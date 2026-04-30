import Hero from '../components/sections/Hero.jsx'
import StandardOverview from '../components/sections/StandardOverview.jsx'
import ResourceCards from '../components/sections/ResourceCards.jsx'
import WhereToStart from '../components/sections/WhereToStart.jsx'

export const metadata = {
  title:
    'Beyond Qualifications | Culture change and the Competence and Conduct Standard',
  description:
    'The Competence and Conduct Standard requires more than qualifications. A guide and diagnostic tool for housing leaders navigating the culture and behaviour requirements.',
  openGraph: {
    title: 'Beyond Qualifications | Competence and Conduct Standard',
    description:
      'The Competence and Conduct Standard requires more than qualifications. A guide and diagnostic for housing leaders.',
    url: 'https://competence-conduct.org',
    siteName: 'Competence & Conduct',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <StandardOverview />
      <ResourceCards />
      <WhereToStart />
    </>
  )
}
