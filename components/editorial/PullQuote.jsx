import DotGridMoment from '../visuals/DotGridMoment.jsx'

/**
 * PullQuote — a column-breaking interpretive line.
 *
 * Sits at content width (56rem) inside a prose-width context (42rem),
 * so it visibly breaks out of the body column.
 *
 * Inter Tight Thin (100) italic in the Indigo accent — quiet, refined,
 * distinct from H2 (which is Inter Tight 400 at a heavier visual weight).
 *
 * Pass `decorated` to put a quiet dot-grid + brand pair behind the quote.
 * Keep this rare so it stays a moment, not a pattern.
 */
export default function PullQuote({ children, decorated = false }) {
  if (!decorated) {
    return (
      <figure className="my-12 max-w-[56rem]">
        <span aria-hidden className="block h-px w-12 bg-purple-accent mb-6" />
        <blockquote>
          <p className="font-display font-thin italic text-[1.75rem] md:text-[2.5rem] leading-[1.25] tracking-tight text-purple-accent">
            {children}
          </p>
        </blockquote>
      </figure>
    )
  }

  return (
    <figure className="relative my-16 max-w-[56rem] overflow-hidden px-6 md:px-10 py-10 md:py-12">
      <DotGridMoment
        className="absolute inset-0"
        cx={88}
        cy={28}
        scale={0.6}
        dotOpacity={0.12}
        pairOpacity={0.55}
        step={6}
      />
      <div className="relative z-10">
        <span aria-hidden className="block h-px w-12 bg-purple-accent mb-6" />
        <blockquote>
          <p className="font-display font-thin italic text-[1.75rem] md:text-[2.5rem] leading-[1.25] tracking-tight text-purple-accent">
            {children}
          </p>
        </blockquote>
      </div>
    </figure>
  )
}
