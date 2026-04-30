import Link from 'next/link'
import SectionWrapper from '../../components/SectionWrapper.jsx'
import SectionDivider from '../../components/editorial/SectionDivider.jsx'

export const metadata = {
  title:
    'About this site - Competence and Conduct Standard culture guide',
  description:
    'Practical resources for housing leaders navigating the culture and behaviour requirements of the Competence and Conduct Standard. Built by Mutomorro.',
  openGraph: {
    title: 'About - Competence and Conduct',
    description:
      'Practical resources for housing leaders navigating the culture and behaviour requirements of the Competence and Conduct Standard.',
    url: 'https://competence-conduct.org/about',
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

const toolCards = [
  {
    href: '/challenges',
    title: 'Challenges',
    body:
      'Six culture challenges the sector is navigating, each with a starting point for action.',
  },
  {
    href: '/questions',
    title: 'Key Questions',
    body:
      'Reflective questions designed for leadership team conversations about culture readiness.',
  },
  {
    href: '/diagnostic',
    title: 'Diagnostic',
    body:
      'An interactive self-assessment across six dimensions of culture readiness, with a downloadable summary for boards and leadership teams.',
  },
]

const closingCards = [
  {
    href: '/standard',
    title: 'The Standard',
    body:
      'What the Competence and Conduct Standard requires on culture, behaviour, and resident influence.',
    cta: 'Read the full breakdown',
  },
  {
    href: '/diagnostic',
    title: 'Culture readiness diagnostic',
    body:
      'A structured self-assessment across six dimensions of culture readiness for leadership teams.',
    cta: 'Take the diagnostic',
  },
]

export default function AboutPage() {
  return (
    <article>
      <SectionWrapper id="top">
        <div className="max-w-[56rem]">
          {/* Page header */}
          <p className="font-body text-[12px] uppercase tracking-[0.05em] font-medium text-purple-accent mb-2">
            About
          </p>
          <h1 className="font-display font-normal text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight text-ink">
            About this site
          </h1>

          <p className="mt-8 font-body text-[17px] leading-[1.7] text-ink max-w-[42rem]">
            A suite of practical resources for housing leaders preparing for
            the culture and behaviour requirements of the Competence and
            Conduct Standard. Analysis, frameworks, and tools designed to be
            picked up and used with your teams.
          </p>

          {/* Section 1 — Why this exists */}
          <section className="mt-16">
            <h2 className="font-display font-normal text-[1.5rem] md:text-[2rem] leading-[1.2] text-ink">
              Why this exists
            </h2>
            <div className="mt-6 space-y-4 max-w-[42rem]">
              <p>
                The{' '}
                <ExtLink href="https://www.gov.uk/government/consultations/competence-and-conduct-standard-for-social-housing-consultation">
                  Competence and Conduct Standard
                </ExtLink>{' '}
                comes into force in October 2026. The qualification
                requirements have clear deadlines, approved courses, and
                defined transition periods. They&apos;re concrete, and
                there&apos;s good guidance available from{' '}
                <ExtLink href="https://www.cih.org/knowledge-hub/professionalism-and-training/competence-and-conduct-standard/">
                  CIH
                </ExtLink>{' '}
                and others.
              </p>
              <p>
                The culture and behaviour requirements are different. The{' '}
                <ExtLink href="https://www.gov.uk/government/consultations/competence-and-conduct-standard-for-social-housing-consultation/outcome/competence-and-conduct-standard-for-social-housing-government-response">
                  Government&apos;s consultation response
                </ExtLink>{' '}
                asks organisations to evidence embedded behaviours,
                meaningful resident influence, and a demonstrable culture of
                professionalism. These requirements are less structured,
                harder to systematise, and easier to defer - but they carry
                the same regulatory weight.
              </p>
              <p>
                This site focuses on that territory. The culture and conduct
                requirements - the part that asks housing leaders to think
                about how their organisations behave, not just what their
                staff know.
              </p>
            </div>
          </section>

          <SectionDivider />

          {/* Section 2 — Who this is for */}
          <section>
            <h2 className="font-display font-normal text-[1.5rem] md:text-[2rem] leading-[1.2] text-ink">
              Who this is for
            </h2>
            <div className="mt-6 space-y-4 max-w-[42rem]">
              <p>
                This site is designed for people in housing organisations
                who are responsible for preparing for the standard - or for
                assuring that the preparation is on track.
              </p>
              <p>
                That typically includes executive teams, directors of people
                or organisational development, governance and assurance
                leads, and board members. But the culture requirements of
                the standard reach across functions, so it may also be
                useful for anyone involved in resident engagement, workforce
                development, or operational leadership.
              </p>
              <p>
                The content assumes you&apos;re already familiar with the
                broad shape of the Competence and Conduct Standard. It
                doesn&apos;t explain the basics - it goes deeper on the
                culture and behaviour requirements that sit alongside the
                qualification framework.
              </p>
            </div>
          </section>

          <SectionDivider />

          {/* Section 3 — What's on this site */}
          <section>
            <h2 className="font-display font-normal text-[1.5rem] md:text-[2rem] leading-[1.2] text-ink">
              What&apos;s on this site
            </h2>
            <div className="mt-6 space-y-4 max-w-[42rem]">
              <p>The site has two layers: context and tools.</p>
              <p>
                <strong className="font-semibold text-ink">Context</strong>{' '}
                gives you a clear picture of what the standard requires on
                culture and conduct, drawn from the primary regulatory
                documents. Start with{' '}
                <Link
                  href="/standard"
                  className="text-purple-accent font-medium hover:underline underline-offset-2"
                >
                  The Standard
                </Link>{' '}
                for a full breakdown.
              </p>
              <p>
                <strong className="font-semibold text-ink">Tools</strong>{' '}
                give you practical resources for leadership conversations
                and self-assessment:
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3 max-w-[56rem]">
              {toolCards.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="group block bg-white border-l-[3px] border-purple-accent hover:bg-warm-light/50 transition-colors p-5"
                >
                  <h3 className="font-display font-medium text-[20px] leading-[1.25] text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-2 font-body text-[17px] leading-[1.55] text-ink-muted">
                    {c.body}
                  </p>
                </Link>
              ))}
            </div>

            <p className="mt-6 max-w-[42rem]">
              Everything on the site is designed to be used, shared, and
              discussed - not just read. The diagnostic summary, the
              challenge frameworks, and the questions are all built to
              support real conversations in real leadership settings.
            </p>
          </section>

          <SectionDivider />

          {/* Section 4 — Who built this */}
          <section>
            <h2 className="font-display font-normal text-[1.5rem] md:text-[2rem] leading-[1.2] text-ink">
              Who built this
            </h2>
            <div className="mt-6 space-y-4 max-w-[42rem]">
              <p>
                This site was built by{' '}
                <ExtLink href="https://mutomorro.com">Mutomorro</ExtLink>, a
                culture and organisational development consultancy that
                works with housing associations and public sector
                organisations.
              </p>
              <p>
                We built it because the culture and behaviour requirements
                of the Competence and Conduct Standard are the territory we
                work in every day - helping leadership teams understand how
                culture operates in their organisations and what it takes
                to shift it deliberately. When the standard was announced,
                it was clear that the sector would need practical,
                independent resources alongside the formal guidance from
                regulators and professional bodies.
              </p>
              <p>
                If you find the tools useful and want to explore working
                together, you can find us at{' '}
                <ExtLink href="https://mutomorro.com">mutomorro.com</ExtLink>.
              </p>
            </div>
          </section>

          <SectionDivider />

          {/* Section 5 — How this content was developed */}
          <section>
            <h2 className="font-display font-normal text-[1.5rem] md:text-[2rem] leading-[1.2] text-ink">
              How this content was developed
            </h2>
            <div className="mt-6 space-y-4 max-w-[42rem]">
              <p>
                The analysis on this site is drawn from primary regulatory
                sources - the{' '}
                <ExtLink href="https://www.gov.uk/government/consultations/competence-and-conduct-standard-for-social-housing-consultation">
                  Government&apos;s Direction to the Regulator
                </ExtLink>
                ,{' '}
                <ExtLink href="https://www.gov.uk/government/consultations/competence-and-conduct-standard-for-social-housing-consultation/outcome/competence-and-conduct-standard-for-social-housing-government-response">
                  MHCLG&apos;s consultation response
                </ExtLink>
                , the{' '}
                <ExtLink href="https://www.gov.uk/government/news/rsh-launches-consultation-on-updates-to-consumer-standards-and-requirements">
                  draft Transparency, Influence and Accountability Standard
                </ExtLink>
                , and the{' '}
                <ExtLink href="https://www.legislation.gov.uk/ukpga/2023/36/contents">
                  Social Housing (Regulation) Act 2023
                </ExtLink>
                . External links to these sources are included throughout
                the site.
              </p>
              <p>
                The diagnostic dimensions and challenge frameworks are
                informed by Mutomorro&apos;s experience working with housing
                organisations on culture and leadership development. They
                reflect patterns that come up consistently when housing
                leaders engage honestly with the culture requirements of
                the standard.
              </p>
              <p>
                Where sector bodies like{' '}
                <ExtLink href="https://www.cih.org/knowledge-hub/professionalism-and-training/competence-and-conduct-standard/">
                  CIH
                </ExtLink>
                ,{' '}
                <ExtLink href="https://www.housing.org.uk/resources/the-competence-and-conduct-standard/">
                  NHF
                </ExtLink>
                , or the{' '}
                <ExtLink href="https://www.gov.uk/government/news/rsh-launches-consultation-on-updates-to-consumer-standards-and-requirements">
                  RSH
                </ExtLink>{' '}
                have published relevant positions or guidance, these are
                referenced and linked. This site is not affiliated with any
                regulatory or professional body.
              </p>
            </div>
          </section>

          {/* Closing pull-out */}
          <aside className="mt-16 border-l-[3px] border-warm-mid pl-6 max-w-[42rem]">
            <p className="font-display italic text-[18px] font-medium text-ink leading-[1.5]">
              The Competence and Conduct Standard is an opportunity to take
              the culture work that many housing organisations have been
              doing for years and give it the structure, evidence, and
              visibility it deserves. This site is here to help with that.
            </p>
          </aside>

          {/* Cross-link cards */}
          <div className="mt-16 border-t border-warm-mid pt-10">
            <div className="grid gap-6 md:grid-cols-2 max-w-[56rem]">
              {closingCards.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="group block bg-white border-l-[3px] border-purple-accent hover:bg-warm-light/50 transition-colors p-6"
                >
                  <h3 className="font-display font-medium text-[20px] leading-[1.25] text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-3 font-body text-[17px] leading-[1.55] text-ink-muted">
                    {c.body}
                  </p>
                  <p className="mt-4 font-body text-purple-accent font-medium">
                    {c.cta} →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </article>
  )
}
