import { Instrument_Serif, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
})

export const metadata = {
  title:
    'Beyond Qualifications | The culture side of the Competence and Conduct Standard',
  description:
    'A thinking guide and diagnostic tool for housing leaders navigating the culture and behaviour requirements of the Competence and Conduct Standard (October 2026).',
  openGraph: {
    title: 'Beyond Qualifications',
    description:
      'The Competence and Conduct Standard requires culture change. This guide is about the half nobody is helping with.',
    url: 'https://competence-conduct.org',
    siteName: 'Competence & Conduct',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${sourceSans.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
