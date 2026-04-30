import Link from 'next/link'
import SectionWrapper from '../../components/SectionWrapper.jsx'

export const metadata = {
  title:
    'The Competence and Conduct Standard: culture and behaviour requirements',
  description:
    'What the Competence and Conduct Standard requires beyond qualifications - culture change, embedded behaviours, codes of conduct, and resident voice. For housing leaders preparing for October 2026.',
  openGraph: {
    title:
      'The Competence and Conduct Standard: culture and behaviour requirements',
    description:
      'What the standard requires beyond qualifications. A breakdown for housing leaders.',
    url: 'https://competence-conduct.org/standard',
    siteName: 'Competence & Conduct',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function StandardPage() {
  return (
    <article>
      <SectionWrapper id="top">
        <p className="text-sm uppercase tracking-widest text-stone-500">
          The Standard
        </p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl text-stone-900 leading-[1.05] tracking-tight">
          The Competence and Conduct Standard: culture and behaviour
          requirements
        </h1>
        <p className="mt-8 text-lg text-stone-700">
          Placeholder introduction. The Standard, due October 2026, sets
          expectations for housing providers that go well beyond a
          qualifications register. This page sets out what it actually requires
          on the culture and behaviour side — and what tends to get missed.
        </p>

        <h2 className="mt-12 font-display text-3xl md:text-4xl text-stone-900 leading-tight">
          What it asks for
        </h2>
        <p className="mt-4 text-lg text-stone-700">
          Placeholder paragraph. Each clause translated into the practical
          implications for boards, executive teams, and people functions.
        </p>
        <p className="mt-4 text-lg text-stone-700">
          Placeholder paragraph. The relationship between the Code of Conduct,
          the resident voice clauses, and the broader Consumer Standards.
        </p>

        <blockquote className="mt-10 border-l-4 border-teal-700 bg-stone-100 px-6 py-5 italic text-stone-700">
          <p className="font-display text-xl leading-relaxed">
            &ldquo;Placeholder MHCLG quotation. Replace with the verbatim
            extract that frames the regulator&apos;s intent on culture.&rdquo;
          </p>
          <footer className="mt-3 not-italic text-sm text-stone-500">
            — MHCLG, placeholder source
          </footer>
        </blockquote>

        <h2 className="mt-12 font-display text-3xl md:text-4xl text-stone-900 leading-tight">
          What it doesn&apos;t say (but expects)
        </h2>
        <p className="mt-4 text-lg text-stone-700">
          Placeholder. The implicit expectations — embedded behaviours, working
          codes of conduct, evidence trails — that providers will be asked to
          demonstrate even though the Standard doesn&apos;t prescribe a method.
        </p>

        <div className="mt-16 border-t border-stone-200 pt-10">
          <p className="text-lg text-stone-700">
            Ready to assess where your organisation stands?{' '}
            <Link
              href="/diagnostic"
              className="text-teal-700 hover:text-teal-800 underline-offset-2 hover:underline"
            >
              Take the diagnostic →
            </Link>
          </p>
        </div>
      </SectionWrapper>
    </article>
  )
}
