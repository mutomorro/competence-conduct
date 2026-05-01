'use client'

import { supabase } from './supabase'
import { countResponses } from './analytics'

export async function storeDiagnosticResponses(responses) {
  if (!supabase) return null
  if (typeof crypto === 'undefined' || !crypto.randomUUID) return null

  const id = crypto.randomUUID()
  const { count_embedded, count_working, count_attention } =
    countResponses(responses)

  try {
    const { error } = await supabase.from('diagnostic_responses').insert({
      id,
      responses,
      count_embedded,
      count_working,
      count_attention,
      user_agent:
        typeof navigator !== 'undefined' ? navigator.userAgent : null,
      referrer:
        typeof document !== 'undefined' ? document.referrer || null : null,
    })
    if (error) {
      console.warn('Failed to store diagnostic responses:', error.message)
      return null
    }
    return id
  } catch (err) {
    console.warn('Failed to store diagnostic responses:', err)
    return null
  }
}
