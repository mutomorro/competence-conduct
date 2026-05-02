import Link from 'next/link'
import TableOfContents from '../../components/editorial/TableOfContents.jsx'
import DownloadCard from '../../components/editorial/DownloadCard.jsx'

const downloadCardProps = {
  thumbnail: '/Key%20Questions%20Thumbnail%20-%20Competence%20and%20Conduct.png',
  title: 'Key Questions for Leadership Teams',
  description:
    'Five culture conversations for housing leaders preparing for the Competence and Conduct Standard.',
  fileType: 'PPTX',
  href: '/downloads/Competence%20%26%20Conduct%20Toolkit%20-%20Key%20Questions%20Slide%20Deck.pptx',
}

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
    images: ['/og-image-1200x630.png'],
  },
}

function ExtLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="text-purple-accent font-medium hover:underline underline-offset-2"
    >
      {children}
    </a>
  )
}

const questions = [
  {
    id: 'question-1',
    title:
      'Can your resident-facing teams describe the behaviours expected of them - in their own words?',
    short: 'Can teams describe expected behaviours?',
    body: (
      <>
        <p className="mt-4">
          Can the people answering the phones and knocking on doors tell you,
          in plain language, what &quot;good&quot; looks like in how they
          treat residents? Not from memory of a document - from how they
          understand their role.
        </p>
        <p className="mt-4">
          The Regulator will be looking for evidence that behaviours are{' '}
          <ExtLink href="https://www.gov.uk/government/consultations/competence-and-conduct-standard-for-social-housing-consultation/consultation-on-a-direction-to-the-regulator-of-social-housing-to-set-a-competence-and-conduct-standard-for-social-housing">
            understood and embedded
          </ExtLink>{' '}
          - not just documented. The distinction matters: a code of conduct
          that lives in practice looks different from one that lives in a
          policy folder.
        </p>
        <p className="mt-4">
          A useful test: ask five resident-facing colleagues what conduct is
          expected of them. Consistency is a good sign. But the most telling
          indicator is whether the answers sound like real working life or
          like a policy document being recited. The standard is looking for
          evidence that behaviours are genuinely understood, not just
          formally communicated.
        </p>
      </>
    ),
  },
  {
    id: 'question-2',
    title:
      'Are your managers equipped to lead culture - or just manage performance?',
    short: 'Managers leading culture, not just performance',
    body: (
      <>
        <p className="mt-4">
          Across the housing sector, a common challenge: managers who are
          technically excellent, promoted for their knowledge of housing
          operations, but who&apos;ve had very little support in leading the
          human side of their teams.
        </p>
        <p className="mt-4">
          The Competence and Conduct Standard places managers in a critical
          position. They&apos;re the ones expected to embed behaviours, model
          conduct, address poor practice, and create environments where people
          feel comfortable raising concerns. That&apos;s leadership work, not
          process work.
        </p>
        <p className="mt-4">
          Where things tend to get stuck is at this middle management level.
          Resident-facing teams want to do the right thing. Senior leaders set the
          direction. But the translation layer in between is where culture is
          either built or lost.
        </p>
        <p className="mt-4">
          If your managers were promoted for technical competence and
          haven&apos;t yet been given the tools for culture leadership, the
          standard creates a useful reason to address that.
        </p>
      </>
    ),
  },
  {
    id: 'question-3',
    title:
      'Have residents shaped your code of conduct - or been consulted on it after the fact?',
    short: 'Residents shaping the code, not consulted on it',
    body: (
      <>
        <p className="mt-4">
          The standard explicitly requires that residents have{' '}
          <ExtLink href="https://www.gov.uk/government/consultations/competence-and-conduct-standard-for-social-housing-consultation/outcome/competence-and-conduct-standard-for-social-housing-government-response">
            &quot;meaningful opportunities to influence and scrutinise&quot;
          </ExtLink>{' '}
          the policy and the code of conduct. That&apos;s a higher bar than
          consultation.
        </p>
        <p className="mt-4">
          Consultation can look like asking residents to respond to something
          already drafted. Influence looks like involving them in shaping it
          from the start. The standard is explicit about expecting the
          latter.
        </p>
        <p className="mt-4">
          Residents aren&apos;t housing experts, and they&apos;re not expected
          to be. But they hold something no internal assessment can replicate:
          direct evidence of whether conduct is working, because they
          experience it every day.
        </p>
        <p className="mt-4">
          The organisations getting this right tend to involve residents
          early, not late. Co-designing what good conduct looks like, rather
          than inviting feedback on a finished document.
        </p>
      </>
    ),
  },
  {
    id: 'question-4',
    title:
      'Does your learning and development connect to culture outcomes - or just knowledge transfer?',
    short: 'L&D linked to culture outcomes',
    body: (
      <>
        <p className="mt-4">
          Most L&amp;D programmes in housing are designed to transfer
          knowledge and skills. That&apos;s necessary, but it&apos;s not what
          the standard is asking for on the culture side. The standard asks
          for evidence that development translates into <em>outcomes</em> -
          into better conduct, better resident experience, better service.
        </p>
        <p className="mt-4">
          The gap tends to appear when you ask a simple question: can you
          show that your training programme changed how people behave, not
          just what they know?
        </p>
        <p className="mt-4">
          Attendance and completion data are valuable for tracking
          participation, but the standard asks for something further -
          evidence that development is changing how people work and how
          residents experience services. That&apos;s a higher bar than most
          L&amp;D reporting is currently set up to meet.
        </p>
        <p className="mt-4">
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
    id: 'question-5',
    title:
      'When someone isn’t meeting behavioural expectations, what happens - honestly?',
    short: 'Addressing conduct that falls short',
    body: (
      <>
        <p className="mt-4">
          Every organisation has a performance management process. The
          question is whether it extends to conduct and culture, or only to
          operational delivery.
        </p>
        <p className="mt-4">
          In many housing organisations, technical underperformance gets
          addressed quickly. Behavioural underperformance - the manager who
          delivers results but treats people poorly, the team leader who
          technically follows process but misses the human moment - tends to
          persist. Sometimes for years.
        </p>
        <p className="mt-4">
          The standard makes conduct a{' '}
          <ExtLink href="https://www.gov.uk/government/consultations/competence-and-conduct-standard-for-social-housing-consultation/outcome/competence-and-conduct-standard-for-social-housing-government-response">
            regulatory expectation
          </ExtLink>
          , not just a cultural preference. That changes the conversation.
          But only if the conversation happens openly.
        </p>
        <p className="mt-4">
          A harder question underneath this one: are there people in your
          organisation right now whose conduct wouldn&apos;t meet the
          standard you&apos;d want to evidence to the Regulator? And if so,
          what would need to change to address that?
        </p>
      </>
    ),
  },
]

const tocItems = questions.map((q) => ({ id: q.id, title: q.short }))

const bandInner = 'max-w-[84rem] mx-auto px-6 lg:pr-[19rem] py-16 md:py-20'

function QuestionBand({ question, index, bg }) {
  return (
    <section className={`w-full ${bg}`}>
      <div className={bandInner}>
        <div id={question.id} className="scroll-mt-24 max-w-[56rem]">
          <div className="flex gap-5">
            <span className="font-display font-normal text-4xl md:text-5xl text-purple-accent leading-none shrink-0">
              {index + 1}
            </span>
            <div>
              <h2 className="text-xl font-semibold text-ink leading-[1.4]">
                {question.title}
              </h2>
              <div className="max-w-[42rem]">{question.body}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function QuestionsPage() {
  return (
    <article className="relative" id="top">
      {/* Band 1 — Page header */}
      <section className="w-full bg-warm-light">
        <div className={bandInner}>
          <div className="max-w-[56rem]">
            <p className="text-xs uppercase tracking-[0.05em] font-medium text-purple-accent mb-2">
              Key Questions
            </p>
            <h1 className="font-display font-normal text-[2.75rem] md:text-[3.625rem] leading-[1.05] tracking-tight text-ink">
              Five culture questions for housing leadership teams
            </h1>

            <div className="mt-8 space-y-5 max-w-[42rem]">
              <p>
                The{' '}
                <ExtLink href="https://www.gov.uk/government/consultations/competence-and-conduct-standard-for-social-housing-consultation/outcome/competence-and-conduct-standard-for-social-housing-government-response">
                  Competence and Conduct Standard
                </ExtLink>{' '}
                places culture and behaviour change at the centre of what
                providers must evidence from October 2026. But unlike the
                qualification requirements, there is no prescribed curriculum
                or course list. Each organisation must define, embed, and
                evidence its own approach.
              </p>
              <p>
                These five questions are designed for housing leadership teams
                to work through together - not as a compliance exercise, but
                as an honest assessment of where your organisation stands on
                the culture side of the standard. Each question connects to a
                specific requirement and surfaces the gap between what policy
                documents say and what staff and residents experience day to
                day.
              </p>
              <p>
                They take about 15 minutes each. The disagreements they
                surface are usually more valuable than the agreements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bands 2–6 — Five questions, alternating */}
      {questions.map((q, i) => (
        <QuestionBand
          key={q.id}
          question={q}
          index={i}
          bg={i % 2 === 0 ? 'bg-white' : 'bg-warm-light'}
        />
      ))}

      {/* Band 7 — Closing cross-links */}
      <section className="w-full bg-warm-light">
        <div className={bandInner}>
          <p className="max-w-[42rem]">
            Explored the questions? See where your organisation stands across
            six culture dimensions of the standard.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 max-w-[56rem]">
            <Link
              href="/diagnostic"
              className="group block bg-white border-l-[3px] border-purple-accent hover:bg-warm-light/50 transition-colors p-6"
            >
              <h3 className="font-display font-medium text-[1.5rem] leading-[1.25] text-ink">
                Culture readiness diagnostic
              </h3>
              <p className="mt-3 text-ink-muted">
                A structured self-assessment that helps your leadership team
                identify where the gaps are - and where you disagree most.
              </p>
              <p className="mt-4 text-purple-accent font-medium">
                Take the diagnostic →
              </p>
            </Link>
            <Link
              href="/challenges"
              className="group block bg-white border-l-[3px] border-purple-accent hover:bg-warm-light/50 transition-colors p-6"
            >
              <h3 className="font-display font-medium text-[1.5rem] leading-[1.25] text-ink">
                Six culture challenges
              </h3>
              <p className="mt-3 text-ink-muted">
                The practical difficulties providers are navigating as they
                prepare for October 2026.
              </p>
              <p className="mt-4 text-purple-accent font-medium">
                Read the challenges →
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile/tablet download card — sidebar collapses below lg */}
      <section className="lg:hidden w-full bg-warm-light">
        <div className={bandInner}>
          <div className="max-w-[28rem]">
            <DownloadCard {...downloadCardProps} />
          </div>
        </div>
      </section>

      {/* Sticky TOC overlay (lg+ only) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <div className="max-w-[84rem] mx-auto px-6 h-full relative">
          <aside className="absolute top-0 right-6 w-[17rem] h-full pointer-events-auto">
            <div className="sticky top-24 space-y-5">
              <TableOfContents items={tocItems} />
              <DownloadCard {...downloadCardProps} />
            </div>
          </aside>
        </div>
      </div>
    </article>
  )
}
