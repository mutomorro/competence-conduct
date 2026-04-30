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
        <div className="max-w-[56rem]">
          <p className="text-xs uppercase tracking-[0.05em] font-medium text-purple-accent mb-2">
            Diagnostic
          </p>
          <h1 className="font-display font-bold text-[2.5rem] md:text-[3.5rem] leading-[1.05] tracking-tight text-ink">
            Competence and Conduct Standard: culture readiness diagnostic
          </h1>
          <p className="mt-8 max-w-[42rem]">
            Placeholder introduction. Six dimensions, structured prompts, a
            clear picture of where your organisation stands today. Use it as
            a board pack input, an executive away-day starter, or a working
            document for your people team. Interactive version coming soon.
          </p>

          <ol className="mt-12 space-y-8">
            {dimensions.map((d, i) => (
              <li
                key={d.title}
                className="bg-warm-light border-l-[3px] border-purple-accent p-7"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display font-normal text-2xl text-purple-accent shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-semibold text-ink leading-[1.4]">
                    {d.title}
                  </h3>
                </div>
                <p className="mt-3 max-w-[42rem] text-ink-muted">{d.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-16 border-t border-warm-mid pt-10">
            <p className="max-w-[42rem]">
              Haven&apos;t explored the five questions yet?{' '}
              <Link
                href="/questions"
                className="text-purple-accent font-medium hover:underline underline-offset-2"
              >
                Start with the questions →
              </Link>
            </p>
          </div>
        </div>
      </SectionWrapper>
    </article>
  )
}
