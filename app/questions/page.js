import Link from 'next/link'
import SectionWrapper from '../../components/SectionWrapper.jsx'

export const metadata = {
  title: 'Five culture questions for housing leadership teams',
  description:
    'Five reflective questions for housing leadership teams preparing for the culture and behaviour requirements of the Competence and Conduct Standard. Designed to surface the gap between policy and practice before October 2026.',
  openGraph: {
    title: 'Five culture questions for housing leadership teams',
    description:
      'Reflective culture questions for housing leadership teams preparing for the Competence and Conduct Standard.',
    url: 'https://competence-conduct.org/questions',
    siteName: 'Competence & Conduct',
    locale: 'en_GB',
    type: 'website',
  },
}

function ExtLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="text-teal-700 hover:text-teal-800 underline-offset-2 hover:underline"
    >
      {children}
    </a>
  )
}

const questions = [
  {
    title:
      'Can your front-line teams describe the behaviours expected of them - in their own words?',
    body: (
      <>
        <p className="mt-4 text-lg text-stone-700">
          Not what&apos;s written in the code of conduct. Not the values poster
          on the wall. Can the people answering the phones and knocking on
          doors tell you, in plain language, what &quot;good&quot; looks like
          in how they treat residents?
        </p>
        <p className="mt-4 text-lg text-stone-700">
          If the answer relies on a document nobody has read since induction,
          the standard will surface that gap. The Regulator will be looking
          for evidence that behaviours are{' '}
          <ExtLink href="https://www.gov.uk/government/consultations/competence-and-conduct-standard-for-social-housing-consultation/consultation-on-a-direction-to-the-regulator-of-social-housing-to-set-a-competence-and-conduct-standard-for-social-housing">
            understood and embedded
          </ExtLink>{' '}
          - not just documented.
        </p>
        <p className="mt-4 text-lg text-stone-700">
          The test is simple: ask five front-line colleagues what conduct is
          expected of them. If you get five different answers, the code
          isn&apos;t embedded. If you get the same answer in the same
          corporate language, it might be memorised rather than lived.
        </p>
      </>
    ),
  },
  {
    title:
      'Are your managers equipped to lead culture - or just manage performance?',
    body: (
      <>
        <p className="mt-4 text-lg text-stone-700">
          Across the housing sector, a common challenge: managers who are
          technically excellent, promoted for their knowledge of housing
          operations, but who&apos;ve had very little support in leading the
          human side of their teams.
        </p>
        <p className="mt-4 text-lg text-stone-700">
          The Competence and Conduct Standard places managers in a critical
          position. They&apos;re the ones expected to embed behaviours, model
          conduct, address poor practice, and create environments where people
          feel comfortable raising concerns. That&apos;s leadership work, not
          process work.
        </p>
        <p className="mt-4 text-lg text-stone-700">
          Where things tend to get stuck is at this middle management level.
          Front-line teams want to do the right thing. Senior leaders set the
          direction. But the translation layer in between is where culture is
          either built or lost.
        </p>
        <p className="mt-4 text-lg text-stone-700">
          If your managers were promoted for technical competence and
          haven&apos;t been given the tools for culture leadership, the
          standard will expose that.
        </p>
      </>
    ),
  },
  {
    title:
      'Have residents genuinely shaped your code of conduct - or been consulted after the fact?',
    body: (
      <>
        <p className="mt-4 text-lg text-stone-700">
          The standard explicitly requires that residents have{' '}
          <ExtLink href="https://www.gov.uk/government/consultations/competence-and-conduct-standard-for-social-housing-consultation/outcome/competence-and-conduct-standard-for-social-housing-government-response">
            &quot;meaningful opportunities to influence and scrutinise&quot;
          </ExtLink>{' '}
          the policy and the code of conduct. That&apos;s a higher bar than
          consultation.
        </p>
        <p className="mt-4 text-lg text-stone-700">
          Consultation asks:{' '}
          <em>what do you think of this thing we&apos;ve already designed?</em>
          <br />
          Influence asks:{' '}
          <em>
            what matters to you, and how should that shape what we build?
          </em>
        </p>
        <p className="mt-4 text-lg text-stone-700">
          Residents aren&apos;t housing experts, and they&apos;re not expected
          to be. But they hold something no internal assessment can replicate:
          direct evidence of whether conduct is working, because they
          experience it every day.
        </p>
        <p className="mt-4 text-lg text-stone-700">
          The organisations getting this right tend to involve residents
          early, not late. Co-designing what good conduct looks like, rather
          than inviting feedback on a finished document.
        </p>
      </>
    ),
  },
  {
    title:
      'Does your learning and development connect to culture outcomes - or just knowledge transfer?',
    body: (
      <>
        <p className="mt-4 text-lg text-stone-700">
          Most L&amp;D programmes in housing are designed to transfer
          knowledge and skills. That&apos;s necessary, but it&apos;s not what
          the standard is asking for on the culture side. The standard asks
          for evidence that development translates into <em>outcomes</em> -
          into better conduct, better resident experience, better service.
        </p>
        <p className="mt-4 text-lg text-stone-700">
          The gap tends to appear when you ask a simple question: can you
          show that your training programme changed how people behave, not
          just what they know?
        </p>
        <p className="mt-4 text-lg text-stone-700">
          Attendance records don&apos;t evidence culture change. Certificates
          don&apos;t evidence embedded behaviours. What does evidence it is
          the resident who notices they&apos;re being spoken to differently.
          The complaint that was handled with curiosity rather than
          defensiveness. The safety concern that was escalated because
          someone felt the environment was safe enough to raise it.
        </p>
        <p className="mt-4 text-lg text-stone-700">
          If your L&amp;D measures inputs (who attended what) but not
          outcomes (what changed as a result), the assurance conversation
          with the{' '}
          <ExtLink href="https://www.gov.uk/government/news/rsh-launches-consultation-on-updates-to-consumer-standards-and-requirements">
            Regulator
          </ExtLink>{' '}
          will be harder than it needs to be.
        </p>
      </>
    ),
  },
  {
    title:
      'When someone isn’t meeting behavioural expectations, what happens - honestly?',
    body: (
      <>
        <p className="mt-4 text-lg text-stone-700">
          Every organisation has a performance management process. The
          question is whether it extends to conduct and culture, or only to
          operational delivery.
        </p>
        <p className="mt-4 text-lg text-stone-700">
          In many housing organisations, technical underperformance gets
          addressed quickly. Behavioural underperformance - the manager who
          delivers results but treats people poorly, the team leader who
          technically follows process but misses the human moment - tends to
          persist. Sometimes for years.
        </p>
        <p className="mt-4 text-lg text-stone-700">
          The standard makes conduct a{' '}
          <ExtLink href="https://www.gov.uk/government/consultations/competence-and-conduct-standard-for-social-housing-consultation/outcome/competence-and-conduct-standard-for-social-housing-government-response">
            regulatory expectation
          </ExtLink>
          , not just a cultural preference. That changes the conversation.
          But only if organisations are willing to have it.
        </p>
        <p className="mt-4 text-lg text-stone-700">
          The honest version of this question: are there people in your
          organisation right now whose conduct wouldn&apos;t meet the
          standard you&apos;d want to evidence to the Regulator? And if so,
          what&apos;s preventing that from being addressed?
        </p>
      </>
    ),
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

        <div className="mt-8 space-y-5">
          <p className="text-lg text-stone-700">
            The{' '}
            <ExtLink href="https://www.gov.uk/government/consultations/competence-and-conduct-standard-for-social-housing-consultation/outcome/competence-and-conduct-standard-for-social-housing-government-response">
              Competence and Conduct Standard
            </ExtLink>{' '}
            places culture and behaviour change at the centre of what
            providers must evidence from October 2026. But unlike the
            qualification requirements, there is no prescribed curriculum or
            course list. Each organisation must define, embed, and evidence
            its own approach.
          </p>
          <p className="text-lg text-stone-700">
            These five questions are designed for housing leadership teams to
            work through together - not as a compliance exercise, but as an
            honest assessment of where your organisation stands on the
            culture side of the standard. Each question connects to a
            specific requirement and surfaces the gap between what policy
            documents say and what staff and residents experience day to day.
          </p>
          <p className="text-lg text-stone-700">
            They take about 15 minutes each. The disagreements they surface
            are usually more valuable than the agreements.
          </p>
        </div>

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
                  {q.body}
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 border-t border-stone-200 pt-10">
          <p className="text-lg text-stone-700">
            Explored the questions? See where your organisation stands across
            six culture dimensions of the standard.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Link
              href="/diagnostic"
              className="group block border border-stone-200 rounded-md bg-stone-100 hover:bg-stone-50 hover:border-stone-300 transition-colors p-6"
            >
              <h3 className="font-display text-xl text-stone-900 leading-tight">
                Culture readiness diagnostic
              </h3>
              <p className="mt-3 text-stone-700">
                A structured self-assessment that helps your leadership team
                identify where the gaps are - and where you disagree most.
              </p>
              <p className="mt-4 text-teal-700 group-hover:text-teal-800">
                Take the diagnostic →
              </p>
            </Link>
            <Link
              href="/challenges"
              className="group block border border-stone-200 rounded-md bg-stone-100 hover:bg-stone-50 hover:border-stone-300 transition-colors p-6"
            >
              <h3 className="font-display text-xl text-stone-900 leading-tight">
                Six culture challenges
              </h3>
              <p className="mt-3 text-stone-700">
                The practical difficulties providers are navigating as they
                prepare for October 2026.
              </p>
              <p className="mt-4 text-teal-700 group-hover:text-teal-800">
                Read the challenges →
              </p>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </article>
  )
}
