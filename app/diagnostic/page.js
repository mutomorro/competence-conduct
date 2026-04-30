import DiagnosticApp from './components/DiagnosticApp'

export const metadata = {
  title: 'Culture readiness diagnostic | Competence and Conduct Standard',
  description:
    'An interactive diagnostic tool for housing leadership teams. Assess your organisation across six culture dimensions of the Competence and Conduct Standard.',
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

export default function DiagnosticPage() {
  return <DiagnosticApp />
}
