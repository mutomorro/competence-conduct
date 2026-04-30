import Link from 'next/link'
import SectionWrapper from '../../components/SectionWrapper.jsx'

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
  },
}

const dimensions = [
  {
    title: 'Codes of conduct in practice',
    body: 'Placeholder. How a written code translates into the decisions and behaviours people actually see day to day.',
  },
  {
    title: 'Embedded behaviours',
    body: 'Placeholder. The gap between stated values and observable behaviour — and the systems that hold the gap open or close it.',
  },
  {
    title: 'Resident voice',
    body: 'Placeholder. Whether resident input is a working part of decisions, or a parallel track that runs alongside them.',
  },
  {
    title: 'Leadership signal',
    body: 'Placeholder. What leadership attention, time, and language communicate about what really matters.',
  },
  {
    title: 'Learning and development',
    body: 'Placeholder. Whether competence is treated as a once-a-year event or as an ongoing practice with the infrastructure to match.',
  },
  {
    title: 'Evidence and accountability',
    body: 'Placeholder. The trail you would actually walk a regulator through — and what it would say about the culture beneath it.',
  },
]

export default function DiagnosticPage() {
  return (
    <article>
      <SectionWrapper id="top">
        <p className="text-sm uppercase tracking-widest text-stone-500">
          Diagnostic
        </p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl text-stone-900 leading-[1.05] tracking-tight">
          Competence and Conduct Standard: culture readiness diagnostic
        </h1>
        <p className="mt-8 text-lg text-stone-700">
          Placeholder introduction. Six dimensions, structured prompts, a clear
          picture of where your organisation stands today. Use it as a board
          pack input, an executive away-day starter, or a working document for
          your people team. Interactive version coming soon.
        </p>

        <ol className="mt-12 space-y-10">
          {dimensions.map((d, i) => (
            <li
              key={d.title}
              className="border border-stone-200 rounded-md bg-stone-100 p-7"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-2xl text-teal-700 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="font-display text-2xl md:text-3xl text-stone-900 leading-tight">
                  {d.title}
                </h2>
              </div>
              <p className="mt-4 text-stone-700">{d.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 border-t border-stone-200 pt-10">
          <p className="text-lg text-stone-700">
            Haven&apos;t explored the five questions yet?{' '}
            <Link
              href="/questions"
              className="text-teal-700 hover:text-teal-800 underline-offset-2 hover:underline"
            >
              Start with the questions →
            </Link>
          </p>
        </div>
      </SectionWrapper>
    </article>
  )
}
