import Link from 'next/link'
import ReadingMeta from '../../components/editorial/ReadingMeta.jsx'
import ChapterOpener from '../../components/editorial/ChapterOpener.jsx'
import PullQuote from '../../components/editorial/PullQuote.jsx'
import StatFigure from '../../components/editorial/StatFigure.jsx'
import Timeline from '../../components/editorial/Timeline.jsx'
import TableOfContents from '../../components/editorial/TableOfContents.jsx'

export const metadata = {
  title:
    'The Competence and Conduct Standard: culture and behaviour requirements',
  description:
    'What the Competence and Conduct Standard requires beyond qualifications - culture change, embedded behaviours, codes of conduct, and resident voice. A practical breakdown for housing leaders preparing for October 2026.',
  openGraph: {
    title:
      'The Competence and Conduct Standard: culture and behaviour requirements',
    description:
      'What the standard requires beyond qualifications. A breakdown for housing leaders preparing for October 2026.',
    url: 'https://competence-conduct.org/standard',
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

const chapters = [
  { id: 'two-halves', title: 'Qualifications vs culture' },
  { id: 'direction', title: 'Six culture and conduct obligations' },
  { id: 'not-prescribed', title: 'What it does not prescribe' },
  { id: 'regulated', title: 'How it will be regulated' },
  { id: 'origins', title: 'From Grenfell to regulation' },
]

const obligations = [
  {
    title:
      'Ensure staff have the right behaviours - not just the right knowledge',
    body: (
      <>
        <p className="mt-3">
          The Direction requires that staff &quot;exhibit the behaviours
          needed for the relevant services provided by those individuals to be
          of a good quality.&quot; This is a deliberate step beyond competence
          as knowledge. It means the standard covers how people treat
          residents, how they handle complaints, how they respond when
          something goes wrong - not just whether they have the technical
          knowledge to do their job.
        </p>
        <p className="mt-3">
          For most providers, this is where the gap between existing practice
          and what the standard expects will be widest. Technical competence
          is already managed through recruitment, training, and appraisal.
          Behavioural competence - the ability to consistently demonstrate
          the right conduct in real interactions - is harder to define,
          harder to develop, and harder to evidence.
        </p>
      </>
    ),
  },
  {
    title: 'Have a written policy on workforce development',
    body: (
      <>
        <p className="mt-3">
          Providers must maintain a written policy covering their approach to
          managing and developing the skills, knowledge, experience, and
          conduct of their staff. The policy must cover learning and
          development, staff appraisal, and the management of poor
          performance. It must be kept up to date and fit for purpose.
        </p>
        <p className="mt-3">
          This goes beyond having an L&amp;D strategy document. The standard
          expects the policy to be a working document that connects
          development activity to outcomes - and one that addresses poor
          performance and conduct explicitly, not just skills gaps.
        </p>
      </>
    ),
  },
  {
    title: 'Adopt or develop - and embed - a code of conduct',
    body: (
      <>
        <p className="mt-3">
          Providers must adopt or develop an appropriate code of conduct for
          all relevant staff and ensure it is embedded within the
          organisation. The code must be kept up to date and fit for purpose.
        </p>
        <p className="mt-3">
          The word &quot;embedded&quot; is doing significant work here. A
          code of conduct that exists as a document signed at induction does
          not meet this requirement. Embedded means staff can articulate the
          expected behaviours in practice, managers feel equipped to hold
          people to them, and the code is a living reference point for
          decisions and conversations - not a policy that sits in a folder.
        </p>
      </>
    ),
  },
  {
    title: 'Give residents meaningful opportunities to influence the code',
    body: (
      <>
        <p className="mt-3">
          Providers must give tenants{' '}
          <ExtLink href="https://www.gov.uk/government/consultations/competence-and-conduct-standard-for-social-housing-consultation/outcome/competence-and-conduct-standard-for-social-housing-government-response">
            meaningful opportunities to influence and scrutinise
          </ExtLink>{' '}
          the development of the policy and decisions relating to the code of
          conduct. Both must be made accessible to tenants.
        </p>
        <p className="mt-3">
          This requirement was added to the Direction after the consultation,
          in direct response to feedback from tenants and tenant
          representative groups. The government&apos;s response makes clear
          that this is about influence, not just consultation. It reflects
          the evidence from the{' '}
          <ExtLink href="https://www.grenfelltowerinquiry.org.uk/">
            Grenfell Tower Inquiry
          </ExtLink>
          , where residents reported that their concerns were ignored or
          disregarded, and the{' '}
          <ExtLink href="https://www.gov.uk/government/consultations/a-new-deal-for-social-housing">
            Social Housing Green Paper
          </ExtLink>{' '}
          consultation, where tenants described feeling excluded from
          decisions about how services were delivered.
        </p>
        <p className="mt-3">
          In practice, this means involving residents in defining what good
          conduct looks like - not presenting a finished code of conduct for
          comment.
        </p>
      </>
    ),
  },
  {
    title: 'Apply the same expectations to service providers',
    body: (
      <p className="mt-3">
        Providers must take appropriate steps to ensure that their service
        providers&apos; staff also have the necessary skills, knowledge,
        experience, and behaviours. The standard does not stop at the
        provider&apos;s own workforce. If housing management services are
        delivered through contractors or managing agents, the provider
        remains accountable for the quality of conduct those staff
        demonstrate.
      </p>
    ),
  },
  {
    title: 'Keep everything current and evidenced',
    body: (
      <p className="mt-3">
        The policy and code of conduct must be kept up to date and fit for
        purpose - a strengthened requirement introduced after the
        consultation. The Regulator will expect to see evidence that these
        are living documents, regularly reviewed and responsive to what is
        happening in practice, not static policies produced to meet a
        deadline.
      </p>
    ),
  },
]

const originsTimeline = [
  {
    year: '2017–2024',
    title: 'Grenfell Tower Inquiry',
    body: (
      <p>
        The{' '}
        <ExtLink href="https://www.grenfelltowerinquiry.org.uk/">
          Grenfell Tower Inquiry
        </ExtLink>{' '}
        heard evidence that key managerial staff at the Tenant Management
        Organisation did not have adequate training or qualifications for
        their roles. More fundamentally, it found that residents who voiced
        safety concerns and complaints about living conditions were ignored
        or disregarded - and that this was entirely consistent with the
        organisation&apos;s approach to engagement with its residents.
      </p>
    ),
  },
  {
    year: '2018',
    title: 'Social Housing Green Paper',
    body: (
      <p>
        The{' '}
        <ExtLink href="https://www.gov.uk/government/consultations/a-new-deal-for-social-housing">
          Social Housing Green Paper
        </ExtLink>{' '}
        consultation heard from tenants across the country who described a
        breakdown of trust between themselves and their landlords. They
        reported feeling ignored, excluded from decisions that affected
        their lives, and subject to dismissive or disrespectful attitudes
        from staff. The government&apos;s own assessment was that the
        issues uncovered at Grenfell were indicative of the wider
        experiences of social tenants across the country.
      </p>
    ),
  },
  {
    year: '2022',
    title: 'Professionalisation Review',
    body: (
      <p>
        Concluded that measures should be introduced to drive
        organisational-wide culture change within the social housing
        sector. It recommended qualification requirements for senior
        staff - but it was clear that qualifications alone would not be
        sufficient. The culture had to change, not just the credentials.
      </p>
    ),
  },
  {
    year: '2023',
    title: 'Social Housing (Regulation) Act',
    body: (
      <p>
        The{' '}
        <ExtLink href="https://www.legislation.gov.uk/ukpga/2023/36/contents">
          Social Housing (Regulation) Act 2023
        </ExtLink>{' '}
        gave the government the power to direct the Regulator to set the
        standard.
      </p>
    ),
  },
  {
    year: 'September 2025',
    title: 'Direction issued',
    body: (
      <p>
        The government&apos;s Direction was issued to the Regulator of
        Social Housing, setting out exactly what the standard must require.
      </p>
    ),
  },
  {
    year: 'October 2026',
    title: 'Standard in force',
    body: (
      <p>
        The Competence and Conduct Standard takes effect, applying to all
        registered providers of social housing in England.
      </p>
    ),
  },
]

const closingCards = [
  {
    href: '/challenges',
    title: 'Six culture challenges',
    body:
      'The practical difficulties housing providers are navigating as they prepare for October 2026 - from evidencing culture change to giving residents genuine influence.',
    cta: 'Read the challenges',
  },
  {
    href: '/questions',
    title: 'Five culture questions',
    body:
      'Reflective questions designed to surface the gap between policy and practice. Each one connects to a specific requirement of the standard.',
    cta: 'Explore the questions',
  },
  {
    href: '/diagnostic',
    title: 'Culture readiness diagnostic',
    body:
      'A structured self-assessment across six culture dimensions. Designed for leadership teams, not compliance teams.',
    cta: 'Take the diagnostic',
  },
]

const bandInner = 'max-w-[84rem] mx-auto px-6 lg:pr-[19rem] py-16 md:py-20'

export default function StandardPage() {
  return (
    <article className="relative" id="top">
      {/* Band 1 — Page header */}
      <section className="w-full bg-warm-light">
        <div className={bandInner}>
          <p className="text-xs uppercase tracking-[0.05em] font-medium text-purple-accent mb-2">
            The Standard
          </p>
          <h1 className="font-display font-normal text-[2.75rem] md:text-[3.625rem] leading-[1.05] tracking-tight text-ink">
            The Competence and Conduct Standard: culture and behaviour
            requirements
          </h1>

          <ReadingMeta readTime={9} lastUpdated="30 April 2026" sections={5} />

          <div className="mt-10 space-y-5 max-w-[42rem]">
            <p className="dropcap">
              The{' '}
              <ExtLink href="https://www.gov.uk/government/consultations/competence-and-conduct-standard-for-social-housing-consultation">
                Competence and Conduct Standard
              </ExtLink>{' '}
              comes into force in October 2026. It applies to all registered
              providers of social housing in England and sets requirements
              across two areas: qualifications for senior staff, and the
              culture, behaviours, and conduct expectations that apply to
              everyone involved in delivering housing management services.
            </p>
            <p>
              This page focuses on the second part - the culture and
              behaviour requirements. These are the clauses that receive less
              attention than the qualification headlines but will, for most
              providers, require more fundamental work. The qualification
              requirements have a defined path. The culture requirements ask
              each provider to build its own.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3 max-w-[56rem]">
            <StatFigure value="October 2026" label="Comes into force" />
            <StatFigure
              value="Level 4 / 5"
              label="Qualifications"
              sub="Senior managers / executives"
            />
            <StatFigure
              value="3 / 4 years"
              label="Transition periods"
              sub="Larger / smaller providers"
            />
          </div>
        </div>
      </section>

      {/* Band 2 — Chapter 1 */}
      <section className="w-full bg-white">
        <div className={bandInner}>
          <ChapterOpener
            id="two-halves"
            number={1}
            total={5}
            title="Qualifications vs culture: the two sides of the standard"
          />
          <PullQuote decorated>
            The qualification requirements are more visible. The culture
            requirements may prove more demanding.
          </PullQuote>
          <div className="space-y-4 max-w-[42rem]">
            <p>
              The Competence and Conduct Standard has two distinct parts, and
              the sector conversation has overwhelmingly focused on one of
              them.
            </p>
            <p>
              The{' '}
              <ExtLink href="https://www.cih.org/knowledge-hub/professionalism-and-training/competence-and-conduct-standard/">
                qualification requirements
              </ExtLink>{' '}
              are specific: Level 4 for senior housing managers, Level 5 or
              a foundation degree for senior housing executives, a transition
              period of three years for larger providers and four for smaller
              ones, and a growing number of courses from CIH and others to
              get people enrolled. Challenging to implement at scale, but
              structured. There is a defined path to compliance.
            </p>
            <p>
              The culture and behaviour requirements are different. They
              apply to all staff involved in delivering housing management
              services - not just senior leaders - and they cover territory
              that no course can certify: how people behave, how conduct is
              defined and embedded, how residents experience the service,
              and whether the organisation can evidence that its development
              work is producing real change.
            </p>
            <p>
              This distinction matters because it shapes how providers need
              to prepare. The qualifications programme is a project with a
              clear endpoint. The culture work is an ongoing commitment with
              no finish line - and the Regulator will expect to see it
              underway from October 2026, not deferred until the
              qualifications are sorted.
            </p>
          </div>
        </div>
      </section>

      {/* Band 3 — Chapter 2 */}
      <section className="w-full bg-warm-light">
        <div className={bandInner}>
          <ChapterOpener
            id="direction"
            number={2}
            total={5}
            title="Six culture and conduct obligations"
          />
          <PullQuote>
            Six specific obligations - each one carrying more practical
            weight than it first appears.
          </PullQuote>
          <p className="max-w-[42rem]">
            The government&apos;s{' '}
            <ExtLink href="https://www.gov.uk/government/consultations/competence-and-conduct-standard-for-social-housing-consultation/outcome/direction-on-the-regulatory-standards-competence-and-conduct-2025--2">
              Direction to the Regulator of Social Housing
            </ExtLink>
            , published in September 2025, sets out exactly what the standard
            must require. On the culture and conduct side, registered
            providers must:
          </p>

          <div className="mt-10">
            {obligations.map((o, i) => (
              <div
                key={o.title}
                className={
                  i === 0 ? '' : 'mt-10 pt-10 border-t border-warm-mid'
                }
              >
                <h3 className="font-display font-medium text-[1.5rem] leading-[1.25] text-ink">
                  {o.title}
                </h3>
                <div className="max-w-[42rem]">{o.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Band 4 — Chapter 3 */}
      <section className="w-full bg-white">
        <div className={bandInner}>
          <ChapterOpener
            id="not-prescribed"
            number={3}
            total={5}
            title="What the standard deliberately does not prescribe"
          />
          <PullQuote>
            The Regulator will not tell you what good conduct looks like in
            your organisation. That is the point.
          </PullQuote>
          <div className="space-y-4 max-w-[42rem]">
            <p>
              One of the most important features of the standard is what it
              does not do. It does not provide a national framework of
              expected behaviours. It does not prescribe what a code of
              conduct should contain. It does not mandate specific
              recruitment, appraisal, or performance management practices. It
              does not define what &quot;embedded&quot; looks like in
              operational terms.
            </p>
            <p>
              This is deliberate. The{' '}
              <ExtLink href="https://www.gov.uk/government/consultations/competence-and-conduct-standard-for-social-housing-consultation/outcome/competence-and-conduct-standard-for-social-housing-government-response">
                government&apos;s consultation response
              </ExtLink>{' '}
              is explicit: the standard takes an outcomes-focused approach
              rather than a prescriptive one, reflecting the Regulator&apos;s
              statutory duty to minimise interference and allow providers to
              deliver outcomes in the way that best fits their organisation
              and their tenants.
            </p>
            <p>
              For providers, this creates both freedom and difficulty.
              Freedom, because the approach can be shaped to the
              organisation&apos;s context, communities, and services.
              Difficulty, because the work of defining what good conduct
              means - in specific, observable, evidenceable terms - now sits
              with each individual provider. There is no template to adopt
              that will satisfy the Regulator. The expectation is that what
              you produce is genuinely yours, genuinely embedded, and
              genuinely making a difference to how residents experience your
              services.
            </p>
          </div>
        </div>
      </section>

      {/* Band 5 — Chapter 4 */}
      <section className="w-full bg-warm-light">
        <div className={bandInner}>
          <ChapterOpener
            id="regulated"
            number={4}
            total={5}
            title="How it will be regulated"
          />
          <PullQuote>
            Outcomes-focused, assurance-led, and folded into an existing
            standard.
          </PullQuote>
          <div className="space-y-4 max-w-[42rem]">
            <p>
              The{' '}
              <ExtLink href="https://www.gov.uk/government/news/rsh-launches-consultation-on-updates-to-consumer-standards-and-requirements">
                Regulator of Social Housing
              </ExtLink>{' '}
              will incorporate the competence and conduct requirements into
              the existing Transparency, Influence and Accountability
              Standard, rather than creating a standalone standard. The RSH
              launched its own consultation on this integration in December
              2025.
            </p>
            <p>
              This approach has practical implications. It means competence
              and conduct will be regulated alongside requirements around
              resident engagement, transparency, and accountability - which
              is logical, given the overlap. But it also means the
              requirements will sit within a broader framework rather than
              standing alone as a distinct regulatory focus.
            </p>
            <p>
              <ExtLink href="https://www.housingtoday.co.uk/news/cih-concerned-new-competence-and-conduct-requirements-may-not-be-taken-seriously-by-rps-if-wound-into-existing-standard/5141099.article">
                CIH has publicly raised concerns
              </ExtLink>{' '}
              about this approach, arguing that folding competence and
              conduct into the TI&amp;A Standard could signal a downgrading
              of the importance of the requirements and risks them not being
              taken seriously enough by some providers. Whether that concern
              proves justified will depend on how prominently the Regulator
              treats these requirements in its assurance work.
            </p>
            <p>
              The regulatory approach is outcomes-focused. The Regulator will
              not inspect against a checklist of prescribed practices.
              Instead, it will look at whether providers can demonstrate that
              their approach is working - that behaviours are genuinely
              embedded, that residents have genuinely influenced the code of
              conduct, that development activity is producing measurable
              improvements, and that poor conduct is being addressed.
            </p>
            <p>
              For boards and governance committees, this means being prepared
              for a conversation about evidence and outcomes, not a document
              review. The Regulator will want to understand what has changed
              as a result of the work - not just what policies are in place.
            </p>
          </div>
        </div>
      </section>

      {/* Band 6 — Chapter 5 */}
      <section className="w-full bg-white">
        <div className={bandInner}>
          <ChapterOpener
            id="origins"
            number={5}
            total={5}
            title="From Grenfell to regulation: why this standard exists"
          />
          <PullQuote>
            Grenfell, the Green Paper, and a professionalisation review that
            concluded culture change was necessary.
          </PullQuote>
          <p className="max-w-[42rem]">
            The Competence and Conduct Standard did not emerge from a policy
            exercise. It emerged from a series of failures in how social
            housing providers treated the people they serve.
          </p>

          <div className="mt-10 max-w-[56rem]">
            <Timeline items={originsTimeline} />
          </div>

          <p className="mt-10 max-w-[42rem]">
            This history matters because it shapes what the Regulator will be
            looking for. The standard was not created to add another
            compliance layer. It was created because residents were being
            failed by the culture of the organisations that were supposed to
            serve them. The Regulator will be asking whether that culture is
            genuinely changing - not just whether the paperwork is in order.
          </p>
        </div>
      </section>

      {/* Band 7 — Closing cross-links */}
      <section className="w-full bg-warm-light">
        <div className={bandInner}>
          <div className="max-w-[42rem] space-y-4">
            <p>
              The standard is clear about what it expects. The challenge is
              in the execution - particularly on the culture and behaviour
              side, where there is no prescribed path and no template to
              follow.
            </p>
            <p>
              Three resources on this site are designed to help leadership
              teams work through that challenge:
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3 max-w-[56rem]">
            {closingCards.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group block bg-white border-l-[3px] border-purple-accent hover:bg-warm-light/50 transition-colors p-6"
              >
                <h3 className="font-display font-medium text-[1.5rem] leading-[1.25] text-ink">
                  {c.title}
                </h3>
                <p className="mt-3 text-ink-muted">{c.body}</p>
                <p className="mt-4 text-purple-accent font-medium">
                  {c.cta} →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky TOC overlay (lg+ only) */}
      <div
        className="hidden lg:block absolute inset-0 pointer-events-none"
        aria-hidden="false"
      >
        <div className="max-w-[84rem] mx-auto px-6 h-full relative">
          <aside className="absolute top-0 right-6 w-[17rem] h-full pointer-events-auto">
            <TableOfContents items={chapters} />
          </aside>
        </div>
      </div>
    </article>
  )
}
