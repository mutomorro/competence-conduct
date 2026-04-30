import Link from 'next/link'
import SectionWrapper from '../../components/SectionWrapper.jsx'

export const metadata = {
  title:
    'Five culture questions for housing leadership teams | Competence and Conduct Standard',
  description:
    'Five reflective questions designed for housing leadership teams preparing for the Competence and Conduct Standard. Not compliance questions - culture questions.',
  openGraph: {
    title: 'Five culture questions for housing leadership teams',
    description:
      'Reflective questions for leadership teams navigating the culture side of the Competence and Conduct Standard.',
    url: 'https://competence-conduct.org/questions',
    siteName: 'Competence & Conduct',
    locale: 'en_GB',
    type: 'website',
  },
}

const questions = [
  {
    title:
      'What does competence mean for the work we actually do?',
    body: 'Placeholder. The framing question — moving past role descriptions and qualifications into the everyday practice that residents experience.',
  },
  {
    title: 'How do we know it is present — and where it is not?',
    body: 'Placeholder. The signals you already have, the ones you don’t, and what would change if you collected the latter.',
  },
  {
    title: 'How do we develop it, deliberately and over time?',
    body: 'Placeholder. The difference between training as event and competence as habit. What the supporting infrastructure looks like.',
  },
  {
    title: 'How do conduct and culture reinforce or undermine it?',
    body: 'Placeholder. The reality that codes of conduct only work if leadership behaviour matches them. What goes wrong when it doesn’t.',
  },
  {
    title:
      'How do we evidence all of this to ourselves and to the regulator?',
    body: 'Placeholder. Practical notes on the evidence trail — what stands up to scrutiny, what looks performative, and how to tell the difference.',
  },
]

export default function QuestionsPage() {
  return (
    <article>
      <SectionWrapper id="top">
        <p className="text-sm uppercase tracking-widest text-stone-500">
          Five Questions
        </p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl text-stone-900 leading-[1.05] tracking-tight">
          Five culture questions for housing leadership teams
        </h1>
        <p className="mt-8 text-lg text-stone-700">
          Placeholder introduction. These aren&apos;t compliance prompts —
          they&apos;re the questions a leadership team needs to be able to
          answer before the Standard takes effect. Use them as the agenda for a
          board session, an executive away-day, or a quiet hour on your own.
        </p>

        <ol className="mt-12 space-y-12">
          {questions.map((q, i) => (
            <li key={i}>
              <div className="flex gap-5">
                <span className="font-display text-4xl md:text-5xl text-teal-700 leading-none shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl text-stone-900 leading-tight">
                    {q.title}
                  </h2>
                  <p className="mt-4 text-lg text-stone-700">{q.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 border-t border-stone-200 pt-10">
          <p className="text-lg text-stone-700">
            Explored the questions?{' '}
            <Link
              href="/diagnostic"
              className="text-teal-700 hover:text-teal-800 underline-offset-2 hover:underline"
            >
              See where your organisation stands →
            </Link>
          </p>
        </div>
      </SectionWrapper>
    </article>
  )
}
