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
      <h2 className="font-display text-4xl md:text-5xl text-stone-900 leading-tight">
        What the Standard actually asks
      </h2>
      <p className="mt-6 text-lg text-stone-700">
        The Competence and Conduct Standard isn&apos;t a qualifications register.
        It asks how culture, behaviour, and accountability are built into the
        work — and how you would show it.
      </p>
      <ul className="mt-8 space-y-3">
        {points.map((point) => (
          <li key={point} className="flex gap-3 text-lg text-stone-800">
            <span aria-hidden className="text-teal-700 mt-2 leading-none">
              •
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <p className="mt-8">
        <Link
          href="/standard"
          className="text-teal-700 hover:text-teal-800 underline-offset-2 hover:underline"
        >
          Read the full breakdown →
        </Link>
      </p>
    </SectionWrapper>
  )
}
