import Link from 'next/link'
import SectionWrapper from '../SectionWrapper.jsx'

const resources = [
  {
    href: '/challenges',
    title: 'The culture challenges',
    body: 'Six challenges housing providers face in meeting the culture and behaviour requirements of the standard - from evidencing culture change to giving residents genuine influence.',
    cta: 'Read the six challenges',
  },
  {
    href: '/questions',
    title: 'Five culture questions',
    body: 'A reflective tool for leadership teams. Not compliance prompts - culture prompts, designed to surface the conversations that matter before October 2026.',
    cta: 'Explore the questions',
  },
  {
    href: '/diagnostic',
    title: 'Culture readiness diagnostic',
    body: 'A structured self-assessment across six culture dimensions of the standard. Use it as a board pack input or as a starter for an executive away-day.',
    cta: 'Take the diagnostic',
  },
]

export default function ResourceCards() {
  return (
    <SectionWrapper id="resources">
      <h2 className="font-display font-normal text-[1.5rem] md:text-[2rem] leading-[1.2] text-ink">
        Three resources for leadership teams
      </h2>
      <p className="mt-5 max-w-[42rem]">
        Designed to be used together — challenges to understand, questions to
        think with, and a diagnostic to act on.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {resources.map((r) => (
          <Link
            key={r.href}
            href={r.href}
            className="group block bg-white border-l-[3px] border-purple-accent hover:bg-warm-light/50 transition-colors p-7"
          >
            <h3 className="font-display font-medium text-[1.5rem] leading-[1.3] text-ink">
              {r.title}
            </h3>
            <p className="mt-3 text-ink-muted">{r.body}</p>
            <p className="mt-5 text-purple-accent font-medium">
              {r.cta} →
            </p>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  )
}
