/**
 * StatFigure — a labelled key-figure card.
 *
 * Usage:
 *   <StatFigure value="October 2026" label="Comes into force" />
 *
 * Designed to sit in a grid (md:grid-cols-3) for a "key facts" strip.
 * Visual treatment: white panel + 3px purple-accent left border,
 * matching the resource card pattern so the brand reads consistently.
 */
export default function StatFigure({ value, label, sub }) {
  return (
    <div className="bg-white border-l-[3px] border-purple-accent px-5 py-5">
      <p className="font-display text-[1.75rem] md:text-[2rem] font-normal text-ink leading-[1.1] tracking-tight">
        {value}
      </p>
      {sub && <p className="mt-1 text-sm text-ink-muted">{sub}</p>}
      <p className="mt-3 text-xs uppercase tracking-[0.05em] font-medium text-purple-accent">
        {label}
      </p>
    </div>
  )
}
