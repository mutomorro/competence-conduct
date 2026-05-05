import DiagnosticApp from './components/DiagnosticApp'

export const metadata = {
  title: 'Culture readiness diagnostic | Competence and Conduct Standard',
  description:
    'An interactive diagnostic tool for housing leadership teams. Assess your organisation across six culture dimensions of the Competence and Conduct Standard.',
  alternates: {
    canonical: 'https://competence-conduct.org/diagnostic',
  },
  openGraph: {
    title: 'Culture readiness diagnostic | Competence and Conduct Standard',
    description:
      'Assess your organisation across six culture dimensions. A free tool for housing leadership teams.',
    url: 'https://competence-conduct.org/diagnostic',
    siteName: 'Competence & Conduct',
    locale: 'en_GB',
    type: 'website',
    images: ['/og-image-1200x630.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Culture readiness diagnostic',
  description:
    'An interactive diagnostic tool for housing leadership teams. Assess your organisation across six culture dimensions of the Competence and Conduct Standard.',
  url: 'https://competence-conduct.org/diagnostic',
}

export default function DiagnosticPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DiagnosticApp />
    </>
  )
}
