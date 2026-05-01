import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'
import { buildResultsEmailHTML } from '../../../lib/emailTemplate'
import { renderDiagnosticPDFBuffer } from '../../../lib/diagnosticPDFServer'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const PDF_FILENAME = 'Culture Readiness Profile - Competence and Conduct.pdf'

const SOURCE_TAG = 'competence-conduct-diagnostic'
const FROM_ADDRESS_VERIFIED =
  'Competence & Conduct Toolkit <diagnostic@competence-conduct.org>'
const FROM_ADDRESS_FALLBACK =
  'Competence & Conduct Toolkit <onboarding@resend.dev>'
const REPLY_TO_ADDRESS = 'hello@competence-conduct.org'

function emailLooksValid(value) {
  return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { email, responseId, responses, completedAt } = body || {}

  if (!emailLooksValid(email) || !responses || typeof responses !== 'object') {
    return Response.json({ error: 'Missing or invalid fields' }, { status: 400 })
  }

  const resendKey = process.env.RESEND_API_KEY
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseServiceKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY

  if (!resendKey) {
    console.error('RESEND_API_KEY is not configured')
    return Response.json({ error: 'Email not configured' }, { status: 500 })
  }

  const supabase =
    supabaseUrl && supabaseServiceKey
      ? createClient(supabaseUrl, supabaseServiceKey, {
          auth: { persistSession: false },
        })
      : null

  let contactId = null

  if (supabase) {
    try {
      const { data: existing } = await supabase
        .from('contacts')
        .select('id, sources')
        .eq('signup_email', email)
        .maybeSingle()

      if (existing) {
        contactId = existing.id
        const sources = existing.sources || []
        if (!sources.includes(SOURCE_TAG)) {
          await supabase
            .from('contacts')
            .update({ sources: [...sources, SOURCE_TAG] })
            .eq('id', existing.id)
        }
      } else {
        const { data: newContact, error: insertError } = await supabase
          .from('contacts')
          .insert({
            signup_email: email,
            sources: [SOURCE_TAG],
            first_source: SOURCE_TAG,
          })
          .select('id')
          .single()
        if (insertError) {
          console.warn('Contact insert failed:', insertError.message)
        } else if (newContact) {
          contactId = newContact.id
        }
      }
    } catch (err) {
      console.warn('Contacts upsert error:', err)
    }

    if (responseId) {
      try {
        await supabase
          .from('diagnostic_responses')
          .update({
            email,
            email_sent_at: new Date().toISOString(),
            contact_id: contactId,
          })
          .eq('id', responseId)
      } catch (err) {
        console.warn('diagnostic_responses update error:', err)
      }
    }
  }

  const resend = new Resend(resendKey)
  const completedAtDate = completedAt ? new Date(completedAt) : new Date()
  const html = buildResultsEmailHTML(responses, completedAtDate)

  // Try to attach the PDF. If rendering fails for any reason, log it
  // and fall through to the HTML-only email rather than failing the send.
  let pdfAttachment = null
  try {
    const pdfBuffer = await renderDiagnosticPDFBuffer({
      responses,
      completedAt: completedAtDate,
    })
    pdfAttachment = {
      filename: PDF_FILENAME,
      content: pdfBuffer,
    }
  } catch (err) {
    console.warn('PDF render failed, sending HTML-only email:', err)
  }

  // Verified domain is the default. Set RESEND_USE_FALLBACK_SENDER=true to
  // route through onboarding@resend.dev (useful before DNS verification is
  // complete). RESEND_FROM_ADDRESS overrides both.
  const fromAddress =
    process.env.RESEND_FROM_ADDRESS ||
    (process.env.RESEND_USE_FALLBACK_SENDER === 'true'
      ? FROM_ADDRESS_FALLBACK
      : FROM_ADDRESS_VERIFIED)

  try {
    const { error: emailError } = await resend.emails.send({
      from: fromAddress,
      to: email,
      replyTo: REPLY_TO_ADDRESS,
      subject: 'Your culture readiness profile',
      html,
      ...(pdfAttachment ? { attachments: [pdfAttachment] } : {}),
    })

    if (emailError) {
      console.error('Resend error:', emailError)
      return Response.json({ error: 'Failed to send email' }, { status: 502 })
    }
  } catch (err) {
    console.error('Resend threw:', err)
    return Response.json({ error: 'Failed to send email' }, { status: 502 })
  }

  return Response.json({ success: true, pdfAttached: !!pdfAttachment })
}
