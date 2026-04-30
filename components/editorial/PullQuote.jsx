/**
 * PullQuote — a column-breaking interpretive line.
 *
 * Sits at content width (56rem) inside a prose-width context (42rem),
 * so it visibly breaks out of the body column.
 *
 * Inter Tight Thin (100) italic in the Indigo accent — quiet, refined,
 * distinct from H2 (which is Inter Tight 400 at a heavier visual weight).
 */
export default function PullQuote({ children }) {
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
