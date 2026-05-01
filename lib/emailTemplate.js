import { dimensions } from '../app/diagnostic/data/dimensions'

const STATUS_META = {
  embedded: { label: 'Embedded', colour: '#4CAF50' },
  working: { label: 'Working on it', colour: '#FF9800' },
  attention: { label: 'Needs attention', colour: '#EF5350' },
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function formatDate(date) {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function buildResultsEmailHTML(responses, completedAt) {
  const date = completedAt instanceof Date ? completedAt : new Date(completedAt)
  const dateStr = formatDate(date)

  let countEmbedded = 0
  let countWorking = 0
  let countAttention = 0
  Object.values(responses || {}).forEach((v) => {
    if (v === 'embedded') countEmbedded += 1
    else if (v === 'working') countWorking += 1
    else if (v === 'attention') countAttention += 1
  })

  const summaryLine = `${countEmbedded} embedded · ${countWorking} working on it · ${countAttention} needs attention`

  const dimensionSections = dimensions
    .map((dim) => {
      const number = String(dim.id).padStart(2, '0')
      const rows = dim.statements
        .map((s) => {
          const value = responses?.[s.id]
          const meta = value ? STATUS_META[value] : null
          const colour = meta ? meta.colour : '#C9C2B5'
          const label = meta ? meta.label : 'Not answered'
          return `
              <tr>
                <td style="padding:8px 0;border-bottom:1px solid #EFEAE0;vertical-align:top;">
                  <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background-color:${colour};margin-right:10px;vertical-align:middle;"></span>
                  <span style="font-family:Helvetica,Arial,sans-serif;font-size:14px;color:#1A1A1A;line-height:1.45;">
                    ${escapeHtml(s.text)}
                  </span>
                  <div style="margin-left:20px;margin-top:4px;font-family:Helvetica,Arial,sans-serif;font-size:12px;color:${colour};font-weight:600;">
                    ${escapeHtml(label)}
                  </div>
                </td>
              </tr>`
        })
        .join('')

      return `
        <tr>
          <td style="padding:24px 0 8px 0;">
            <span style="font-family:Helvetica,Arial,sans-serif;font-size:13px;color:#6366F0;font-weight:600;letter-spacing:0.5px;">
              ${number}
            </span>
            <h2 style="margin:4px 0 12px 0;font-family:Helvetica,Arial,sans-serif;font-size:18px;color:#1A1A1A;font-weight:600;line-height:1.3;">
              ${escapeHtml(dim.name)}
            </h2>
          </td>
        </tr>
        <tr>
          <td>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              ${rows}
            </table>
          </td>
        </tr>`
    })
    .join('')

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Your culture readiness profile</title>
  </head>
  <body style="margin:0;padding:0;background-color:#F7F4ED;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F7F4ED;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background-color:#FFFFFF;border:1px solid #EFEAE0;">
            <tr>
              <td style="padding:32px 32px 8px 32px;">
                <p style="margin:0 0 4px 0;font-family:Helvetica,Arial,sans-serif;font-size:11px;color:#6366F0;font-weight:600;letter-spacing:1px;text-transform:uppercase;">
                  Competence and Conduct Standard
                </p>
                <h1 style="margin:0;font-family:Helvetica,Arial,sans-serif;font-size:26px;color:#1A1A1A;font-weight:600;line-height:1.2;">
                  Your culture readiness profile
                </h1>
                <p style="margin:8px 0 0 0;font-family:Helvetica,Arial,sans-serif;font-size:13px;color:#6B6B6B;">
                  Completed ${escapeHtml(dateStr)}
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px 0 32px;">
                <div style="background-color:#6366F0;color:#FFFFFF;padding:14px 18px;border-radius:4px;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:600;">
                  PDF report attached
                  <span style="display:block;margin-top:4px;font-weight:400;font-size:13px;color:#E2E1FF;">
                    A formatted, shareable copy of your results is attached to this email.
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px;">
                <div style="background-color:#F7F4ED;border-left:3px solid #6366F0;padding:12px 16px;font-family:Helvetica,Arial,sans-serif;font-size:14px;color:#1A1A1A;">
                  ${escapeHtml(summaryLine)}
                </div>
                <p style="margin:8px 0 0 0;font-family:Helvetica,Arial,sans-serif;font-size:12px;color:#8C8678;">
                  18 statements · 6 dimensions
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 24px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  ${dimensionSections}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px;background-color:#F7F4ED;border-top:1px solid #EFEAE0;">
                <p style="margin:0 0 6px 0;font-family:Helvetica,Arial,sans-serif;font-size:13px;color:#1A1A1A;">
                  This diagnostic is part of <a href="https://competence-conduct.org" style="color:#6366F0;text-decoration:none;">competence-conduct.org</a>
                </p>
                <p style="margin:0 0 12px 0;font-family:Helvetica,Arial,sans-serif;font-size:13px;color:#6B6B6B;">
                  Developed by Mutomorro · <a href="https://mutomorro.com" style="color:#6366F0;text-decoration:none;">mutomorro.com</a>
                </p>
                <p style="margin:0;font-family:Helvetica,Arial,sans-serif;font-size:12px;color:#8C8678;line-height:1.5;">
                  You received this email because you requested your diagnostic results. We won't email you again unless you ask us to.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}
