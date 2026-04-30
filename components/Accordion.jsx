'use client'

import { useId, useState } from 'react'

/**
 * Accordion — collapsible disclosure.
 *
 * Usage:
 *   <Accordion title="What does this mean?">Body content here.</Accordion>
 *
 * Props:
 *   - title: string | ReactNode  (required)
 *   - defaultOpen: boolean        (default false)
 *   - children: ReactNode         (the revealed content)
 *
 * Multiple Accordions can be open simultaneously — they are not exclusive.
 * Width is controlled by the parent. Drop inside a max-w-[56rem] wrapper
 * for the design system's content-width treatment.
 */
export default function Accordion({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen)
  const contentId = useId()

  return (
    <div className="border-b border-warm-mid">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 bg-warm-light hover:bg-warm-light/70 transition-colors px-5 py-4 text-left"
      >
        <span className="text-xl font-medium text-ink leading-[1.4]">
          {title}
        </span>
        <span
          aria-hidden
          className={`text-purple-accent transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        >
          {/* chevron */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div
        id={contentId}
        hidden={!open}
        className="px-5 pt-4 pb-6 max-w-[42rem]"
      >
        {children}
      </div>
    </div>
  )
}
