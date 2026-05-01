import Link from 'next/link'

const sitePages = [
  { href: '/about', label: 'About' },
  { href: '/standard', label: 'The Standard' },
  { href: '/challenges', label: 'Challenges' },
  { href: '/questions', label: 'Key Questions' },
  { href: '/diagnostic', label: 'Diagnostic' },
]

const officialSources = [
  {
    href:
      'https://www.gov.uk/government/consultations/competence-and-conduct-standard-for-social-housing-consultation/outcome/competence-and-conduct-standard-for-social-housing-government-response',
    label: 'Government response to consultation',
  },
  {
    href:
      'https://www.gov.uk/government/news/rsh-launches-consultation-on-updates-to-consumer-standards-and-requirements',
    label: 'RSH consumer standards consultation',
  },
  {
    href: 'https://www.legislation.gov.uk/ukpga/2023/36/contents',
    label: 'Social Housing (Regulation) Act 2023',
  },
  {
    href:
      'https://www.cih.org/knowledge-hub/professionalism-and-training/competence-and-conduct-standard/',
    label: 'CIH guidance',
  },
  {
    href:
      'https://www.housing.org.uk/resources/the-competence-and-conduct-standard/',
    label: 'NHF resources',
  },
]

export default function Footer() {
  return (
    <footer className="bg-black mt-16">
      <div className="max-w-[84rem] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Column 1 — About */}
          <div className="md:col-span-2 lg:col-span-1">
            <p className="font-display text-[18px] leading-[1.5] text-white max-w-[24rem]">
              A culture readiness guide for housing leaders preparing for the
              Competence and Conduct Standard.
            </p>
            <p className="mt-4 text-sm text-stone-400">
              competence-conduct.org
            </p>
          </div>

          {/* Column 2 — Site navigation */}
          <div>
            <h3 className="font-body text-[12px] uppercase tracking-[0.08em] font-medium text-white mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {sitePages.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-sm text-stone-400 hover:text-purple-accent transition-colors"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Official sources */}
          <div>
            <h3 className="font-body text-[12px] uppercase tracking-[0.08em] font-medium text-white mb-4">
              Official sources
            </h3>
            <ul className="space-y-2.5">
              {officialSources.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener"
                    className="text-sm text-stone-400 hover:text-purple-accent transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.1em] text-stone-500 mb-3">
              Developed by
            </p>
            <a
              href="https://mutomorro.com"
              target="_blank"
              rel="noopener"
              className="inline-block opacity-90 hover:opacity-100 transition-opacity"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/mutomorro-logo-white.svg"
                alt="Mutomorro"
                width="130"
                height="22"
                className="h-auto"
              />
            </a>
          </div>
          <p className="text-sm text-stone-500">October 2026</p>
        </div>
      </div>
    </footer>
  )
}
