export const metadata = {
  title: 'About this site - Competence and Conduct',
  description:
    'What this site is, who it is for, and why it exists. A culture readiness resource for housing leaders navigating the Competence and Conduct Standard.',
  openGraph: {
    title: 'About - Competence and Conduct',
    description: 'What this site is, who it is for, and why it exists.',
    url: 'https://competence-conduct.org/about',
    siteName: 'Competence & Conduct',
    locale: 'en_GB',
    type: 'website',
    images: ['/og-image-1200x630.png'],
  },
}

export default function AboutPage() {
  return (
    <main className="max-w-[56rem] mx-auto px-6 py-20">
      <p className="font-body text-[12px] uppercase tracking-[0.05em] font-medium text-purple-accent mb-4">
        About
      </p>
      <h1 className="font-display text-[36px] md:text-[48px] font-normal text-ink leading-tight mb-8">
        About this site
      </h1>
      <p className="font-body text-[17px] leading-[1.7] text-ink max-w-[42rem]">
        Content coming soon. This page will explain what this site is, who it
        is for, why it exists, and who built it.
      </p>
    </main>
  )
}
