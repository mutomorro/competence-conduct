import Link from 'next/link'
import SectionWrapper from '../components/SectionWrapper.jsx'
import VennField from '../components/visuals/VennField.jsx'
import DottedShapeSeparator from '../components/visuals/DottedShapeSeparator.jsx'

export const metadata = {
  title:
    'Beyond Qualifications | Culture change and the Competence and Conduct Standard',
  description:
    'Practical guidance on the culture and conduct requirements of the Competence and Conduct Standard. A breakdown of the requirements, reflective questions, a diagnostic tool, and an honest look at the challenges housing providers are navigating.',
  openGraph: {
    title: 'Beyond Qualifications | Competence and Conduct Standard',
    description:
      'Practical guidance on the culture and conduct requirements of the Competence and Conduct Standard for housing leaders.',
    url: 'https://competence-conduct.org',
    siteName: 'Competence & Conduct',
    locale: 'en_GB',
    type: 'website',
    images: ['/og-image-1200x630.png'],
  },
}

const insightColumns = [
  {
    title: 'Behaviours, not just knowledge',
    body:
      'The standard asks providers to evidence how people behave, not just what they have been trained on.',
  },
  {
    title: 'Resident influence, not consultation',
    body:
      'There is a specific and deliberate distinction in the standard between consulting residents and giving them genuine influence.',
  },
  {
    title: 'Assurance, not prescription',
    body:
      'The Regulator will not tell you what good looks like. It will ask you to prove your version is working.',
  },
]

const toolCards = [
  {
    href: '/challenges',
    title: 'Six culture challenges',
    body:
      'The practical difficulties housing providers are navigating as they prepare for October 2026 - from evidencing culture change to giving residents genuine influence. Each one includes a starting point for action.',
    cta: 'Explore the challenges',
  },
  {
    href: '/questions',
    title: 'Key questions for leadership teams',
    body:
      'Reflective questions designed to surface the gap between what your organisation says about culture and what people experience day to day. Built for honest conversations, not compliance exercises.',
    cta: 'Explore the questions',
  },
]

const diagnosticCard = {
  href: '/diagnostic',
  title: 'Culture readiness diagnostic',
  body:
    'A structured self-assessment across six dimensions of culture readiness. Takes about five minutes. Produces a summary you can share with your board or use as a leadership team conversation starter.',
  cta: 'Take the diagnostic',
}

export default function Home() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="relative overflow-hidden">
        <VennField
          className="absolute inset-0"
          density={12}
          opacity={0.1}
          animated
        />
        <div className="relative z-10 max-w-[84rem] mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <p className="font-body text-[12px] uppercase tracking-[0.05em] font-medium text-purple-accent mb-3">
            Beyond Qualifications
          </p>
          <h1 className="font-display font-normal text-[2.75rem] md:text-[4rem] lg:text-[5rem] leading-[1.05] tracking-tight text-ink max-w-[64rem]">
            The Competence and Conduct Standard
          </h1>
          <p className="mt-5 font-display font-normal text-[1.5rem] md:text-[1.75rem] leading-[1.25] text-ink-muted max-w-[56rem]">
            A culture change guide for housing leaders
          </p>
          <p className="mt-8 font-body text-[17px] leading-[1.7] text-ink max-w-[42rem]">
            This site offers practical guidance on the culture and conduct
            requirements of the Competence and Conduct Standard. A
            breakdown of what the standard asks for, reflective questions
            for leadership teams, a diagnostic tool, and an honest look at
            the challenges providers are navigating.
          </p>
        </div>
      </section>

      <DottedShapeSeparator shape="arc" />

      {/* Section 2 — Our reading of the standard */}
      <SectionWrapper id="our-reading">
        <h2 className="font-display font-normal text-[1.75rem] md:text-[2.25rem] leading-[1.15] text-ink">
          Our reading of the standard
        </h2>
        <p className="mt-5 font-body text-[17px] leading-[1.7] text-ink max-w-[42rem]">
          The Competence and Conduct Standard takes effect in October
          2026. The qualification requirements are well documented. The
          culture and behaviour requirements are where the real
          leadership challenge sits.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {insightColumns.map((c) => (
            <div key={c.title} className="border-t-2 border-purple-accent pt-5">
              <h3 className="font-body text-[17px] font-semibold text-ink leading-snug">
                {c.title}
              </h3>
              <p className="mt-3 font-body text-[15px] md:text-[16px] leading-[1.6] text-ink-muted">
                {c.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10">
          <Link
            href="/standard"
            className="font-body text-purple-accent font-medium hover:underline underline-offset-2"
          >
            Read our full analysis →
          </Link>
        </p>
      </SectionWrapper>

      <DottedShapeSeparator shape="wave" />

      {/* Section 3 — Tools for leadership teams */}
      <SectionWrapper id="tools">
        <h2 className="font-display font-normal text-[1.75rem] md:text-[2.25rem] leading-[1.15] text-ink">
          Tools for leadership teams
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {toolCards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group flex flex-col bg-white border border-warm-mid border-l-[3px] border-l-purple-accent hover:bg-warm-light/50 transition-colors p-6"
            >
              <h3 className="font-display font-medium text-[20px] md:text-[22px] leading-[1.25] text-ink">
                {c.title}
              </h3>
              <p className="mt-3 font-body text-[17px] leading-[1.55] text-ink-muted flex-1">
                {c.body}
              </p>
              <p className="mt-5 font-body text-purple-accent font-medium">
                {c.cta} →
              </p>
            </Link>
          ))}
          {/* Diagnostic — elevated */}
          <Link
            href={diagnosticCard.href}
            className="group flex flex-col bg-purple-accent hover:bg-purple-overlap transition-colors p-6 text-white"
          >
            <h3 className="font-display font-medium text-[20px] md:text-[22px] leading-[1.25] text-white">
              {diagnosticCard.title}
            </h3>
            <p className="mt-3 font-body text-[17px] leading-[1.55] text-white/90 flex-1">
              {diagnosticCard.body}
            </p>
            <p className="mt-5 font-body text-white font-medium">
              {diagnosticCard.cta} →
            </p>
          </Link>
        </div>
      </SectionWrapper>

      <DottedShapeSeparator shape="lozenge" />

      {/* Section 4 — Where to start */}
      <SectionWrapper id="where-to-start">
        <h2 className="font-display font-normal text-[1.75rem] md:text-[2.25rem] leading-[1.15] text-ink">
          Where to start
        </h2>
        <p className="mt-5 font-body text-[17px] leading-[1.7] text-ink max-w-[42rem]">
          There is no single right path through this material. Where you
          start depends on where your organisation is in its
          preparation. Three common starting points:
        </p>

        <ul className="mt-10 space-y-7 max-w-[56rem]">
          <li>
            <p className="font-body text-[17px] leading-[1.7] text-ink-muted">
              <strong className="font-semibold text-ink">
                If you are early in your thinking
              </strong>{' '}
              - start with{' '}
              <Link
                href="/standard"
                className="text-purple-accent font-medium hover:underline underline-offset-2"
              >
                The Standard
              </Link>
              . It sets out what the culture and behaviour requirements
              ask for and what the Regulator is likely to look for. That
              context makes everything else on the site more useful.
            </p>
          </li>
          <li>
            <p className="font-body text-[17px] leading-[1.7] text-ink-muted">
              <strong className="font-semibold text-ink">
                If you are already preparing
              </strong>{' '}
              - the{' '}
              <Link
                href="/challenges"
                className="text-purple-accent font-medium hover:underline underline-offset-2"
              >
                Challenges
              </Link>{' '}
              and{' '}
              <Link
                href="/questions"
                className="text-purple-accent font-medium hover:underline underline-offset-2"
              >
                Key Questions
              </Link>{' '}
              are designed for leadership teams who are actively working
              on culture readiness. They surface the practical
              difficulties and the conversations worth having.
            </p>
          </li>
          <li>
            <p className="font-body text-[17px] leading-[1.7] text-ink-muted">
              <strong className="font-semibold text-ink">
                If you want a quick snapshot
              </strong>{' '}
              - the{' '}
              <Link
                href="/diagnostic"
                className="text-purple-accent font-medium hover:underline underline-offset-2"
              >
                Diagnostic
              </Link>{' '}
              takes about five minutes and gives you a visual summary
              across six culture dimensions. Useful as a conversation
              starter or a board pack input.
            </p>
          </li>
        </ul>
      </SectionWrapper>
    </>
  )
}
