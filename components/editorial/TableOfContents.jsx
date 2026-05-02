'use client'

import { useEffect, useState } from 'react'

/**
 * TableOfContents — sticky on-this-page navigation for long articles.
 *
 * Usage (inside a grid alongside the article column):
 *   <TableOfContents items={[
 *     { id: 'two-halves', title: 'The two halves of the standard' },
 *     ...
 *   ]} />
 *
 * Active item tracking uses IntersectionObserver against the elements
 * referenced by each id. The observer's rootMargin biases the active
 * state toward sections near the top of the viewport, which is the
 * natural reading position.
 *
 * Hidden below lg by default — long articles need TOC on desktop, not
 * mobile (where it would consume too much real estate).
 */
export default function TableOfContents({ items, label = 'On this page' }) {
  const [activeId, setActiveId] = useState(items[0]?.id)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const ids = items.map((i) => i.id)
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the topmost intersecting entry as the active one.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      {
        // Trigger when a section's top crosses ~20% of the viewport.
        // The bottom margin keeps short sections from bouncing the active
        // state when the next one enters.
        rootMargin: '-20% 0px -65% 0px',
        threshold: 0,
      },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [items])

  return (
    <nav
      aria-label={label}
      className="hidden lg:block sticky top-24 self-start"
    >
      <p className="text-xs uppercase tracking-[0.05em] font-medium text-ink-muted mb-2">
        {label}
      </p>
      <ol className="text-sm">
        {items.map((item, i) => {
          const active = activeId === item.id
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={
                  active
                    ? 'flex items-baseline gap-3 py-1.5 pl-4 -ml-[2px] border-l-2 border-purple-accent text-purple-accent font-medium transition-colors'
                    : 'flex items-baseline gap-3 py-1.5 pl-4 -ml-[2px] border-l-2 border-warm-mid text-ink-muted hover:text-ink hover:border-ink-muted transition-colors'
                }
              >
                <span className="text-ink-faint tabular-nums shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="leading-snug">{item.title}</span>
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
