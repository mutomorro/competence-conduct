import Link from 'next/link'
import SectionWrapper from '../SectionWrapper.jsx'

const points = [
  'Codes of conduct that mean something day to day',
  'Embedded behaviours, not just stated values',
  'Resident voice as a working part of how decisions get made',
  'Evidence that holds up to scrutiny — internal and external',
]

export default function StandardOverview() {
  return (
    <SectionWrapper id="standard-overview">
      <div className="max-w-[42rem]">
        <h2 className="font-display text-[1.75rem] leading-[1.3] text-ink">
          What the standard asks beyond qualifications
        </h2>
        <p className="mt-5">
          The Competence and Conduct Standard isn&apos;t a qualifications
          register. It asks how culture, behaviour, and accountability are
          built into the work — and how you would show it.
        </p>
        <ul className="mt-6 space-y-3">
          {points.map((point) => (
            <li key={point} className="flex gap-3">
              <span aria-hidden className="text-purple-accent mt-2 leading-none">
                •
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="mt-7">
          <Link
            href="/standard"
            className="text-purple-accent font-medium hover:underline underline-offset-2"
          >
            Read the full breakdown of the culture and behaviour requirements →
          </Link>
        </p>
      </div>
    </SectionWrapper>
  )
}
