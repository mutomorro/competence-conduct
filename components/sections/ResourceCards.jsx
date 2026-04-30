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
      <h2 className="font-display text-4xl md:text-5xl text-stone-900 leading-tight">
        Three resources for leadership teams
      </h2>
      <p className="mt-6 text-lg text-stone-700">
        Designed to be used together — challenges to understand, questions
        to think with, and a diagnostic to act on.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {resources.map((r) => (
          <Link
            key={r.href}
            href={r.href}
            className="group block border border-stone-200 rounded-md bg-stone-100 hover:bg-stone-50 hover:border-stone-300 transition-colors p-7"
          >
            <h3 className="font-display text-2xl text-stone-900 leading-tight">
              {r.title}
            </h3>
            <p className="mt-3 text-stone-700">{r.body}</p>
            <p className="mt-5 text-teal-700 group-hover:text-teal-800">
              {r.cta} →
            </p>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  )
}
