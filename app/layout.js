import { Inter_Tight, Outfit } from 'next/font/google'
import './globals.css'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['100', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-inter-tight',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://competence-conduct.org'),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
}

export const viewport = {
  themeColor: '#6366F0',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${outfit.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
