/**
 * Timeline — vertical chronology with brand-mark nodes.
 *
 * Usage:
 *   <Timeline items={[
 *     { year: '2017', title: 'Grenfell Tower fire', body: <>...</> },
 *     ...
 *   ]} />
 *
 * The connecting line is a 1px warm-mid rule running down the left.
 * Each node is a small dual-circle brand mark, anchoring the year +
 * heading + body to the timeline rail.
 */

function Node() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 56 56"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="20" cy="28" r="14" fill="#6366F0" />
      <circle cx="36" cy="28" r="14" fill="#9B51E2" />
      <path
        d="M 28 16.511 A 14 14 0 0 1 28 39.489 A 14 14 0 0 1 28 16.511 Z"
        fill="#5E3FD3"
      />
    </svg>
  )
}

export default function Timeline({ items }) {
  return (
    <ol className="relative mt-2">
      {/* Vertical rail — sits behind the nodes */}
      <span
        aria-hidden
        className="absolute left-[10px] top-3 bottom-3 w-px bg-warm-mid"
      />

      {items.map((item, i) => (
        <li
          key={i}
          className={`relative pl-10 ${i === items.length - 1 ? '' : 'pb-10'}`}
        >
          <span className="absolute left-0 top-[2px] bg-warm-light pr-1">
            <Node />
          </span>
          <p className="text-xs uppercase tracking-[0.05em] font-medium text-purple-accent">
            {item.year}
          </p>
          <h3 className="mt-1 text-xl font-semibold text-ink leading-[1.3]">
            {item.title}
          </h3>
          {item.body && (
            <div className="mt-2 max-w-[42rem] text-ink-muted">
              {item.body}
            </div>
          )}
        </li>
      ))}
    </ol>
  )
}
