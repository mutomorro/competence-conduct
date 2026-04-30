/**
 * ChapterOpener — kicker (e.g. "CHAPTER 02 · OF 05") + H2.
 *
 * Usage:
 *   <ChapterOpener id="two-halves" number={1} total={5} title="The two halves of the standard" />
 *
 * The H2 carries the id so anchor links / scrollspy can target it.
 * `scroll-mt-24` keeps it clear of the sticky nav when jumped to.
 */
export default function ChapterOpener({ id, number, total, title }) {
  const num = String(number).padStart(2, '0')
  const totalNum = total ? String(total).padStart(2, '0') : null

  return (
    <header>
      <p className="text-xs uppercase tracking-[0.05em] font-medium text-purple-accent mb-2">
        Chapter {num}
        {totalNum && (
          <>
            {' '}
            <span className="text-ink-faint">· of {totalNum}</span>
          </>
        )}
      </p>
      <h2
        id={id}
        className="font-display font-normal text-[2rem] md:text-[3rem] leading-[1.1] text-ink scroll-mt-24"
      >
        {title}
      </h2>
    </header>
  )
}
