'use client'

import { useRef } from 'react'
import { trafficLightOptions } from '../data/dimensions'

const optionValues = trafficLightOptions.map((o) => o.value)

export default function TrafficLightSelector({
  statementId,
  statementText,
  value,
  onChange,
}) {
  const refs = useRef({})

  const selected = trafficLightOptions.find((o) => o.value === value)

  function handleKeyDown(e, currentValue) {
    const idx = optionValues.indexOf(currentValue)
    let nextIdx = null
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      nextIdx = (idx + 1) % optionValues.length
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      nextIdx = (idx - 1 + optionValues.length) % optionValues.length
    } else if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      onChange(currentValue)
      return
    }
    if (nextIdx !== null) {
      e.preventDefault()
      const nextValue = optionValues[nextIdx]
      onChange(nextValue)
      const node = refs.current[nextValue]
      if (node) node.focus()
    }
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
      <div
        role="radiogroup"
        aria-label={`${statementText} — select Embedded, Working on it, or Needs attention`}
        className="flex items-center gap-3"
      >
        {trafficLightOptions.map((opt) => {
          const isSelected = value === opt.value
          const isFirst = optionValues[0] === opt.value
          const tabIndex = value
            ? isSelected
              ? 0
              : -1
            : isFirst
            ? 0
            : -1
          return (
            <button
              key={opt.value}
              ref={(el) => {
                refs.current[opt.value] = el
              }}
              type="button"
              role="radio"
              aria-checked={isSelected}
              tabIndex={tabIndex}
              onClick={() => onChange(opt.value)}
              onKeyDown={(e) => handleKeyDown(e, opt.value)}
              aria-label={opt.label}
              className="group relative h-11 w-11 rounded-full border-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-accent focus-visible:ring-offset-2 focus-visible:ring-offset-warm-light"
              style={{
                borderColor: opt.colour,
                backgroundColor: isSelected
                  ? opt.colour
                  : 'transparent',
                transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                boxShadow: isSelected
                  ? `inset 0 0 0 3px rgba(255,255,255,0.7)`
                  : 'none',
              }}
            >
              <span
                aria-hidden
                className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-150 group-hover:opacity-15"
                style={{ backgroundColor: opt.colour }}
              />
              <span className="sr-only">{opt.label}</span>
            </button>
          )
        })}
      </div>

      {selected ? (
        <div
          className="font-body text-[13px] leading-snug animate-fade-in"
          aria-live="polite"
        >
          <div
            className="font-medium"
            style={{ color: selected.colour }}
          >
            {selected.label}
          </div>
          <div className="text-ink-muted">{selected.description}</div>
        </div>
      ) : null}
    </div>
  )
}
