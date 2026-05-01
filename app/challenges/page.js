import Link from 'next/link'
import TableOfContents from '../../components/editorial/TableOfContents.jsx'

export const metadata = {
  title: 'Six culture challenges in the Competence and Conduct Standard',
  description:
    'Six challenges housing providers face in meeting the culture and behaviour requirements of the Competence and Conduct Standard. Practical guidance for leadership teams preparing for October 2026.',
  openGraph: {
    title: 'Six culture challenges in the Competence and Conduct Standard',
    description:
      'Practical guidance on the culture challenges housing providers face in the Competence and Conduct Standard.',
    url: 'https://competence-conduct.org/challenges',
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

function SubLabel({ children }) {
  return (
    <h4 className="text-sm uppercase tracking-[0.03em] font-semibold text-purple-accent">
      {children}
    </h4>
  )
}

const challenges = [
  {
    id: 'challenge-1',
    title: 'Evidencing culture change - not just training delivery',
    short: 'Evidencing culture change',
    requires: (
      <p className="mt-2">
        Providers must show that staff development translates into outcomes -
        not just attendance records. The Regulator will focus on the quality of
        your evidence and the efficacy of your systems. Comprehensive records of
        competence gaps and clear plans to close them will be expected, along
        with evidence that training has led to measurable improvements in
        service delivery and resident outcomes.
      </p>
    ),
    whyHard: (
      <>
        <p className="mt-2">
          Most housing providers have well-established systems for tracking
          training. Completion rates, course attendance, CPD hours - these are
          straightforward to record and report. But the standard is asking for
          something different: evidence that development has changed how people
          behave, not just what they know.
        </p>
        <p className="mt-3">
          That&apos;s a fundamentally different kind of evidence. It means
          connecting your L&amp;D activity to resident-facing metrics - tenant
          satisfaction measures, complaint patterns, service quality
          indicators. It means being able to answer the question the Regulator
          is likely to ask:{' '}
          <em>
            what has changed in your organisation as a result of this
            investment in development?
          </em>
        </p>
        <p className="mt-3">
          The gap between &quot;we delivered the training&quot; and
          &quot;here&apos;s what changed because of it&quot; is where most
          providers will need to do new thinking.
        </p>
      </>
    ),
    startingPoint: (
      <p className="mt-2">
        Map your current L&amp;D reporting against the evidence the Regulator
        is likely to expect. If your reports show inputs (who attended what)
        but not outcomes (what changed as a result), that gap is your first
        priority. Resident feedback, complaint trends, and tenant satisfaction
        data are the closest most providers already have to culture outcome
        measures - the challenge is connecting them to your development
        programmes.
      </p>
    ),
  },
  {
    id: 'challenge-2',
    title:
      'Defining professional behaviours when the Regulator won’t provide definitive guidelines',
    short: 'Defining professional behaviours',
    requires: (
      <p className="mt-2">
        Providers must ensure that all relevant staff have the right behaviours
        - not just the right knowledge and skills - to deliver high-quality
        housing services. This includes adopting or developing a code of
        conduct, ensuring it is understood and applied across the organisation,
        and keeping it current. But the RSH will not provide a single framework
        of key skills and behaviours. Each organisation must determine what
        competence and conduct looks like for its own context and services.
      </p>
    ),
    whyHard: (
      <>
        <p className="mt-2">
          Qualifications have clear criteria. Behaviours don&apos;t. Defining
          what &quot;good conduct&quot; means in practice - in a way that is
          specific enough to be meaningful, broad enough to apply across
          diverse roles, and grounded enough to be evidenced - is a genuinely
          difficult piece of work.
        </p>
        <p className="mt-3">
          Many providers have values statements and codes of conduct that
          have been carefully developed. The question the standard raises is
          whether those expectations have moved beyond documentation into
          something staff can describe in their own words, that managers feel
          confident holding people to, and that residents would recognise in
          their day-to-day experience.
        </p>
        <p className="mt-3">
          The temptation is to adopt a generic framework. The risk is that a
          borrowed framework doesn&apos;t reflect your organisation&apos;s
          actual culture, context, or the specific needs of the communities you
          serve - and the Regulator will be looking for something that is
          genuinely embedded, not imported.
        </p>
      </>
    ),
    startingPoint: (
      <p className="mt-2">
        Test what you already have. Ask five resident-facing colleagues to describe
        the behaviours expected of them - without looking anything up. If the
        answers are consistent and grounded in real experience, that&apos;s a
        strong foundation to build on. If they vary widely, that&apos;s
        useful information about where to focus. Start there before investing
        in new frameworks.
      </p>
    ),
  },
  {
    id: 'challenge-3',
    title: 'Giving residents genuine influence over your code of conduct',
    short: 'Giving residents genuine influence',
    requires: (
      <p className="mt-2">
        Providers must give tenants{' '}
        <ExtLink href="https://www.gov.uk/government/consultations/competence-and-conduct-standard-for-social-housing-consultation/outcome/competence-and-conduct-standard-for-social-housing-government-response">
          meaningful opportunities to influence and scrutinise
        </ExtLink>{' '}
        the development of their competence policy and decisions relating to
        the code of conduct. Both must be accessible to tenants and kept up to
        date. This is a requirement rooted in the evidence heard by the{' '}
        <ExtLink href="https://www.grenfelltowerinquiry.org.uk/">
          Grenfell Tower Inquiry
        </ExtLink>{' '}
        and the{' '}
        <ExtLink href="https://www.gov.uk/government/consultations/a-new-deal-for-social-housing">
          Social Housing Green Paper
        </ExtLink>{' '}
        consultation, where residents reported feeling ignored, excluded from
        decisions, and subject to dismissive attitudes from staff.
      </p>
    ),
    whyHard: (
      <>
        <p className="mt-2">
          Most providers have well-developed resident engagement structures -
          panels, surveys, scrutiny groups. But the standard draws a
          distinction that matters: influence is not the same as consultation.
        </p>
        <p className="mt-3">
          Consultation can range from reviewing a finished document to
          shaping something from the beginning. The standard is explicit
          that it expects residents to have shaped the code of conduct - not
          just reviewed it. It means involving residents in defining what
          good conduct looks like, not reviewing a finished code of conduct.
        </p>
        <p className="mt-3">
          This is unfamiliar territory for many providers. It requires a
          different kind of conversation with residents - one that starts with
          their experience of how staff interact with them and works forward to
          what expectations should look like, rather than starting with an
          organisational document and asking for feedback.
        </p>
      </>
    ),
    startingPoint: (
      <p className="mt-2">
        Review how your current code of conduct was developed. If residents
        were involved, at what stage? The earlier residents are part of the
        conversation, the closer the process sits to what the standard
        describes as meaningful influence. Reviewing a finished document and
        shaping one from the start are different things - the standard is
        clear about which it expects. If there&apos;s a gap, the good news
        is that residents are usually willing to contribute to this work -
        the question is whether they&apos;re invited early enough to make a
        real difference.
      </p>
    ),
  },
  {
    id: 'challenge-4',
    title: 'The risk of treating culture change as a compliance exercise',
    short: 'Avoiding the compliance trap',
    requires: (
      <p className="mt-2">
        The Competence and Conduct Standard is outcome-based and assurance-led.
        Providers must be able to demonstrate that they meet the standard - not
        through a checklist, but through evidence of genuine change in how
        their organisation operates and how residents experience their
        services.
      </p>
    ),
    whyHard: (
      <>
        <p className="mt-2">
          There&apos;s a real tension in how the sector is approaching this.
          The standard was designed to drive culture change - the{' '}
          <ExtLink href="https://www.gov.uk/government/consultations/competence-and-conduct-standard-for-social-housing-consultation/outcome/competence-and-conduct-standard-for-social-housing-government-response">
            government&apos;s consultation response
          </ExtLink>{' '}
          explicitly states it aims to &quot;drive the culture change necessary
          to eradicate unprofessional attitudes and stigma.&quot; But culture
          change is hard to systematise. In a regulated sector, the logical
          starting point is to turn requirements into processes, policies,
          and frameworks. That&apos;s a reasonable response - but the
          standard asks for something beyond it.
        </p>
        <p className="mt-3">
          The risk is that providers build an impressive compliance
          architecture around the standard - written policies, recorded
          training, documented codes - without the underlying culture shifting.
          Boards report compliance. Staff experience no change. Residents
          notice no difference. The Regulator, taking an assurance-based
          approach, will be looking beyond the documentation.
        </p>
        <p className="mt-3">
          This risk is heightened by the decision to incorporate the competence
          and conduct requirements into the existing Transparency, Influence
          and Accountability Standard rather than as a standalone standard.{' '}
          <ExtLink href="https://www.housingtoday.co.uk/news/cih-concerned-new-competence-and-conduct-requirements-may-not-be-taken-seriously-by-rps-if-wound-into-existing-standard/5141099.article">
            CIH has raised concerns
          </ExtLink>{' '}
          that this approach could signal a &quot;downgrading of the importance
          of the requirements&quot; and risks them not being taken seriously
          enough.
        </p>
      </>
    ),
    startingPoint: (
      <p className="mt-2">
        Ask your board a simple question: are we preparing for this standard as
        a compliance exercise or as a culture change programme? If the honest
        answer is compliance, the approach will need to shift. Compliance
        produces documentation. Culture change produces different resident
        experiences. The Regulator will be asking about the latter.
      </p>
    ),
  },
  {
    id: 'challenge-5',
    title:
      'Culture change takes years - but the requirements start in October 2026',
    short: 'Culture change vs the deadline',
    requires: (
      <p className="mt-2">
        The qualification requirements have a transition period - three years
        for larger providers, four for smaller ones. The broader culture and
        behaviour requirements do not have a separate transition period. They
        apply from October 2026.
      </p>
    ),
    whyHard: (
      <>
        <p className="mt-2">
          Research consistently suggests that meaningful culture change takes
          three to five years. That&apos;s not a comfortable timeline for a
          standard that comes into force in six months. Providers who
          haven&apos;t yet started the culture work - as distinct from the
          qualifications work - face a genuine challenge of sequencing.
        </p>
        <p className="mt-3">
          The Regulator is unlikely to expect complete culture transformation
          by October 2026. But it will expect to see that the work has started,
          that there is a credible plan, and that progress is demonstrable. The
          difference between &quot;we haven&apos;t started this yet&quot; and
          &quot;here is where we are, here is where we&apos;re heading, and
          here is how we&apos;ll know it&apos;s working&quot; is significant.
        </p>
        <p className="mt-3">
          There&apos;s also a sequencing question that many providers are
          navigating: the qualifications programme and the culture programme
          are related but different workstreams. The risk is that the urgency
          of qualifications - which have hard deadlines and defined courses -
          crowds out the culture work, which is less structured and easier to
          defer.
        </p>
      </>
    ),
    startingPoint: (
      <p className="mt-2">
        If you haven&apos;t already, separate the two workstreams explicitly.
        Give the culture work its own plan, its own timeline, its own
        leadership. It doesn&apos;t need to be finished by October 2026 - but
        it does need to be visibly underway, with clear milestones and a way of
        measuring progress. The Regulator will want to see trajectory, not
        perfection.
      </p>
    ),
  },
  {
    id: 'challenge-6',
    title: 'Making this a cross-functional priority - not isolated to HR functions',
    short: 'A cross-functional priority',
    requires: (
      <p className="mt-2">
        The{' '}
        <ExtLink href="https://www.gov.uk/government/consultations/competence-and-conduct-standard-for-social-housing-consultation/consultation-on-a-direction-to-the-regulator-of-social-housing-to-set-a-competence-and-conduct-standard-for-social-housing">
          standard
        </ExtLink>{' '}
        places obligations on the provider as a whole. Written policies on
        workforce development, codes of conduct, resident engagement
        mechanisms, evidence of outcomes - these are organisational
        responsibilities, not departmental ones. Boards and governance
        committees are expected to be the first point of contact for the
        Regulator and must have the right information to demonstrate
        compliance.
      </p>
    ),
    whyHard: (
      <>
        <p className="mt-2">
          The natural home for this work in most housing organisations is HR or
          L&amp;D. They own workforce development, they manage training
          programmes, they hold the competency frameworks. But the culture
          requirements of the standard reach well beyond what HR can deliver
          alone.
        </p>
        <p className="mt-3">
          Embedding a code of conduct requires operational managers to model
          and reinforce behaviours daily. Evidencing culture change requires
          data from resident-facing teams - complaints, satisfaction measures,
          service quality. Giving residents genuine influence requires
          collaboration with engagement teams. Getting the board ready to
          assure the Regulator requires governance input.
        </p>
        <p className="mt-3">
          When the work sits solely with HR, it tends to produce strong
          policies and well-designed training programmes - but
          cross-functional culture change requires more than one function can
          deliver alone, regardless of how capable that function is. The gap
          isn&apos;t capability - most HR and L&amp;D teams are highly
          capable. The gap is mandate, resourcing, and organisational buy-in.
        </p>
      </>
    ),
    startingPoint: (
      <p className="mt-2">
        Review who currently owns your Competence and Conduct Standard
        preparation. If it sits entirely within one function, consider whether
        the culture and behaviour workstream needs a cross-functional steering
        group with senior leadership sponsorship. This doesn&apos;t mean
        creating bureaucracy - it means ensuring the people who will need to
        embed, evidence, and sustain the culture work are part of shaping it.
      </p>
    ),
  },
]

const tocItems = challenges.map((c) => ({ id: c.id, title: c.short }))

const bandInner = 'max-w-[84rem] mx-auto px-6 lg:pr-[18rem] py-16 md:py-20'

function ChallengeBand({ challenge, index, bg }) {
  return (
    <section className={`w-full ${bg}`}>
      <div className={bandInner}>
        <div
          id={challenge.id}
          className="scroll-mt-24 max-w-[56rem]"
        >
          <div className="flex items-baseline gap-4">
            <span className="font-display font-normal text-2xl text-purple-accent shrink-0">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h2 className="text-xl font-semibold text-ink leading-[1.4]">
              {challenge.title}
            </h2>
          </div>

          <div className="mt-6 space-y-7 max-w-[42rem]">
            <div>
              <SubLabel>What the standard requires</SubLabel>
              {challenge.requires}
            </div>
            <div>
              <SubLabel>Why this is hard</SubLabel>
              {challenge.whyHard}
            </div>
            <div>
              <SubLabel>A starting point</SubLabel>
              {challenge.startingPoint}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ChallengesPage() {
  return (
    <article className="relative" id="top">
      {/* Band 1 — Page header */}
      <section className="w-full bg-warm-light">
        <div className={bandInner}>
          <div className="max-w-[56rem]">
            <p className="text-xs uppercase tracking-[0.05em] font-medium text-purple-accent mb-2">
              Challenges
            </p>
            <h1 className="font-display font-normal text-[2.75rem] md:text-[3.625rem] leading-[1.05] tracking-tight text-ink">
              Six culture challenges in the Competence and Conduct Standard
            </h1>

            <div className="mt-8 space-y-5 max-w-[42rem]">
              <p>
                The qualification requirements in the Competence and Conduct
                Standard have a defined path - Level 4 for senior housing
                managers, Level 5 for senior housing executives, transition
                periods of three to four years, CIH and others offering the
                courses. Challenging, but structured.
              </p>
              <p>
                The culture and behaviour requirements are deliberately less
                prescribed. The{' '}
                <ExtLink href="https://www.gov.uk/government/news/rsh-launches-consultation-on-updates-to-consumer-standards-and-requirements">
                  Regulator of Social Housing
                </ExtLink>{' '}
                won&apos;t provide a single framework of key skills and
                behaviours. It will ask each provider to define what
                competence and conduct looks like, embed it across the
                organisation, and evidence that it&apos;s working.
              </p>
              <p>
                These are six challenges that housing providers are
                navigating as they prepare for October 2026. Each one is
                grounded in what the standard specifically requires, and
                each one is an area where the gap between policy and
                practice tends to be wider than it first appears.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bands 2–7 — Six challenges, alternating */}
      {challenges.map((c, i) => (
        <ChallengeBand
          key={c.id}
          challenge={c}
          index={i}
          bg={i % 2 === 0 ? 'bg-white' : 'bg-warm-light'}
        />
      ))}

      {/* Band 8 — Closing cross-links */}
      <section className="w-full bg-white">
        <div className={bandInner}>
          <div className="max-w-[42rem] space-y-4">
            <p>
              These challenges aren&apos;t reasons for pessimism. They&apos;re
              the areas where honest assessment now will save significant
              difficulty later - both in meeting the standard and in creating
              genuinely better outcomes for residents.
            </p>
            <p>
              Two resources on this site are designed to help your leadership
              team work through them:
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 max-w-[56rem]">
            <Link
              href="/questions"
              className="group block bg-warm-light border-l-[3px] border-purple-accent hover:bg-warm-light/70 transition-colors p-6"
            >
              <h3 className="font-display font-medium text-[1.5rem] leading-[1.25] text-ink">
                Five culture questions
              </h3>
              <p className="mt-3 text-ink-muted">
                Reflective questions designed to surface the gap between
                policy and practice. Each one takes about 15 minutes of
                honest conversation.
              </p>
              <p className="mt-4 text-purple-accent font-medium">
                Explore the questions →
              </p>
            </Link>
            <Link
              href="/diagnostic"
              className="group block bg-warm-light border-l-[3px] border-purple-accent hover:bg-warm-light/70 transition-colors p-6"
            >
              <h3 className="font-display font-medium text-[1.5rem] leading-[1.25] text-ink">
                Culture readiness diagnostic
              </h3>
              <p className="mt-3 text-ink-muted">
                An interactive tool that helps your leadership team assess
                where your organisation stands across six culture
                dimensions of the standard.
              </p>
              <p className="mt-4 text-purple-accent font-medium">
                Take the diagnostic →
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky TOC overlay (lg+ only) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <div className="max-w-[84rem] mx-auto px-6 h-full relative">
          <aside className="absolute top-0 right-6 w-[15rem] h-full pointer-events-auto">
            <TableOfContents items={tocItems} />
          </aside>
        </div>
      </div>
    </article>
  )
}
