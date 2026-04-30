/**
 * PullQuote — a column-breaking interpretive line.
 *
 * Sits at content width (56rem) inside a prose-width context (42rem),
 * so it visibly breaks out of the body column — the magazine-style
 * pull-quote moment.
 *
 * Inter Tight italic at display size, with a thin top rule. Stays
 * deliberately quiet — restraint over flourish.
 */
export default function PullQuote({ children }) {
  return (
    <figure className="my-12 max-w-[56rem]">
      <span aria-hidden className="block h-px w-12 bg-purple-accent mb-6" />
      <blockquote>
        <p className="font-display font-normal italic text-[2rem] md:text-[3rem] leading-[1.2] tracking-tight text-ink">
          {children}
        </p>
      </blockquote>
    </figure>
  )
}
