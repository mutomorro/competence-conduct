'use client'

import { useState } from 'react'

export default function PDFDownloadButton({ responses, className }) {
  const [state, setState] = useState('idle')

  async function handleClick() {
    setState('generating')
    try {
      const [{ pdf }, { default: DiagnosticPDF }] = await Promise.all([
        import('@react-pdf/renderer'),
        import('./DiagnosticPDF'),
      ])

      const completedAt = new Date()
      const blob = await pdf(
        <DiagnosticPDF responses={responses} completedAt={completedAt} />
      ).toBlob()

      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'Culture Readiness Profile - Competence and Conduct.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

      if (typeof window !== 'undefined' && window.posthog) {
        const counts = { embedded: 0, working: 0, attention: 0 }
        Object.values(responses).forEach((v) => {
          if (v && counts[v] != null) counts[v] += 1
        })
        window.posthog.capture('diagnostic_pdf_downloaded', {
          total_embedded: counts.embedded,
          total_working: counts.working,
          total_attention: counts.attention,
        })
      }

      setState('idle')
    } catch (err) {
      console.error('PDF generation failed', err)
      setState('error')
    }
  }

  const label =
    state === 'generating'
      ? 'Generating…'
      : state === 'error'
        ? 'Something went wrong — try again'
        : 'Download as PDF'

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={state === 'generating'}
      className={className}
    >
      {label}
    </button>
  )
}
