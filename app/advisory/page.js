import Link from 'next/link'
import DottedShapeSeparator from '../../components/visuals/DottedShapeSeparator.jsx'

export const metadata = {
  title:
    'Advisory - Hands-on support for the Competence and Conduct Standard',
  description:
    'Ways Mutomorro works with housing organisations on the culture, leadership, and behaviour side of the Competence and Conduct Standard - from organisational health assessment through to embedding change.',
  openGraph: {
    title: 'Advisory - Competence and Conduct',
    description:
      'Ways Mutomorro works with housing organisations on the culture and behaviour side of the Competence and Conduct Standard.',
    url: 'https://competence-conduct.org/advisory',
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
      className="font-body text-purple-accent font-medium hover:underline underline-offset-2"
    >
      {children}
    </a>
  )
}

const cards = [
  {
    title: 'Understanding where you stand',
    body:
      'Before you can close gaps, you need to know where they are. Our organisational health assessment gives you a structured, honest picture of culture, leadership, and capability across your organisation - not just the areas causing visible concern.',
    links: [
      {
        href: 'https://mutomorro.com/states-of-vitality/',
        label: 'Learn about the assessment',
      },
    ],
  },
  {
    title: 'Culture and values',
    body:
      'The standard expects culture that shapes decisions and outcomes - not values on a wall. We work alongside housing associations to understand culture as it is, co-design behaviours and standards with staff and stakeholders, and build the measurement frameworks that demonstrate progress to the regulator.',
    links: [
      {
        href: 'https://mutomorro.com/services/culture-change-consultancy/',
        label: 'Culture change consultancy',
      },
    ],
  },
  {
    title: 'Leadership readiness',
    body:
      'Leaders set the tone for everything the standard asks of an organisation. We design leadership programmes around the specific challenges your leadership team is facing, and provide executive coaching for senior leaders navigating regulatory change, restructuring, or cultural shifts.',
    links: [
      {
        href: 'https://mutomorro.com/develop/deeper-ground/',
        label: 'Leadership development',
      },
      {
        href: 'https://mutomorro.com/develop/executive-coaching/',
        label: 'Executive coaching',
      },
    ],
  },
  {
    title: 'Managing the change',
    body:
      "Meeting the standard isn't a single project - it's a programme of overlapping changes to how your organisation works. We help housing associations plan and deliver change in a way that builds capacity rather than burning people out.",
    links: [
      {
        href: 'https://mutomorro.com/services/change-management-consultancy/',
        label: 'Change management consultancy',
      },
    ],
  },
  {
    title: 'Embedding through managers and teams',
    body:
      'Standards live or die in the day-to-day. We design and deliver training for managers and frontline teams, build internal champion networks, and create the practical tools and routines that make expected behaviours part of how work gets done - not an extra layer on top of it.',
    links: [
      {
        href: 'https://mutomorro.com/develop/bespoke-training/',
        label: 'Bespoke training',
      },
      {
        href: 'https://mutomorro.com/develop/manager-coaching/',
        label: 'Manager coaching',
      },
      {
        href: 'https://mutomorro.com/develop/team-sessions/',
        label: 'Team sessions',
      },
    ],
  },
  {
    title: 'Building long-term capability',
    body:
      "The regulator isn't looking for a one-off exercise. We help organisations build the internal capability to sustain culture work independently - facilitator guides, manager toolkits, and development resources your teams can use long after the consultancy ends.",
    links: [
      {
        href: 'https://mutomorro.com/services/organisational-capacity-building/',
        label: 'Capacity building',
      },
    ],
  },
  {
    title: 'Designing how services work',
    body:
      'The Competence and Conduct Standard connects directly to how residents experience your services. We help housing associations design customer standards, improve complaint handling, and develop the frontline culture that turns policy into practice.',
    links: [
      {
        href: 'https://mutomorro.com/services/customer-experience-consultancy/',
        label: 'Customer experience consultancy',
      },
      {
        href: 'https://mutomorro.com/services/service-design-consultancy/',
        label: 'Service design consultancy',
      },
    ],
  },
]

const bandInner = 'max-w-[84rem] mx-auto px-6 py-16 md:py-20'

export default function AdvisoryPage() {
  return (
    <article id="top">
      {/* Band 1 — Page intro */}
      <section className="w-full bg-warm-light">
        <div className={bandInner}>
          <div className="max-w-[56rem]">
            <p className="font-body text-[12px] uppercase tracking-[0.05em] font-medium text-purple-primary mb-3">
              Advisory
            </p>
            <h1 className="font-display font-normal text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight text-ink">
              Go further with Mutomorro
            </h1>

            <div className="mt-8 space-y-4 max-w-[42rem]">
              <p className="font-body text-[17px] leading-[1.7] text-ink">
                Everything on this site is free and designed to stand on its
                own. If you&apos;d like hands-on support navigating the
                culture and behaviour side of the standard, here are some of
                the ways we work with housing organisations.
              </p>
              <p className="font-body text-[17px] leading-[1.7] text-ink-muted">
                Mutomorro is an organisational development consultancy with
                deep experience in social housing - including culture
                change, merger integration, service improvement, and
                leadership development across G15 members and housing
                associations of all sizes.
              </p>
            </div>

            <p className="mt-8">
              <ExtLink href="https://mutomorro.com/sectors/housing/">
                See our housing experience →
              </ExtLink>
            </p>
          </div>
        </div>
      </section>

      <DottedShapeSeparator shape="lozenge" />

      {/* Band 2 — Cards */}
      <section className="w-full bg-white">
        <div className={bandInner}>
          <div className="max-w-[64rem] space-y-6">
            {cards.map((c) => (
              <article
                key={c.title}
                className="bg-warm-light/60 border border-warm-mid border-l-[3px] border-l-purple-primary p-7 md:p-9"
              >
                <h2 className="font-display font-medium text-[1.375rem] md:text-[1.625rem] leading-[1.25] text-ink">
                  {c.title}
                </h2>
                <p className="mt-4 font-body text-[17px] leading-[1.7] text-ink-muted max-w-[44rem]">
                  {c.body}
                </p>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                  {c.links.map((l) => (
                    <ExtLink key={l.href} href={l.href}>
                      {l.label} →
                    </ExtLink>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DottedShapeSeparator shape="arc" />

      {/* Band 3 — Page footer */}
      <section className="w-full bg-warm-light">
        <div className={bandInner}>
          <div className="max-w-[56rem]">
            <h2 className="font-display font-normal text-[1.5rem] md:text-[2rem] leading-[1.2] text-ink">
              Every organisation is different
            </h2>
            <p className="mt-6 font-body text-[17px] leading-[1.7] text-ink max-w-[42rem]">
              The challenges may be shared, but the right response depends
              on your specific situation, your people, and your
              organisational history. If you&apos;d like to talk through
              what you&apos;re navigating, we&apos;d welcome the
              conversation - whether that&apos;s a direct conversation,
              through a framework, or responding to a tender.
            </p>
            <p className="mt-8">
              <a
                href="https://mutomorro.com/contact/"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center font-body text-[14px] font-semibold rounded-md transition-colors text-white bg-purple-primary hover:bg-purple-overlap px-[18px] py-[10px]"
              >
                Start a conversation →
              </a>
            </p>
          </div>
        </div>
      </section>
    </article>
  )
}
