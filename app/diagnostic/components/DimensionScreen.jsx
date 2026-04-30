'use client'

import { useState } from 'react'
import TrafficLightSelector from './TrafficLightSelector'
import { trafficLightOptions } from '../data/dimensions'

export default function DimensionScreen({
  dimension,
  total,
  responses,
  onChange,
  onBack,
  onNext,
  isLast,
}) {
  const [showNudge, setShowNudge] = useState(false)

  const allAnswered = dimension.statements.every(
    (s) => responses[s.id] != null
  )

  function handleNext() {
    if (!allAnswered && !showNudge) {
      setShowNudge(true)
      return
    }
    setShowNudge(false)
    onNext()
  }

  return (
    <div className="mx-auto max-w-[84rem] px-6 py-10 md:py-14">
      <div className="grid gap-10 md:gap-12 md:grid-cols-[2fr_3fr]">
        {/* Left column — context */}
        <div className="md:pr-4">
          <p className="font-body text-xs uppercase tracking-[0.05em] font-medium text-purple-accent">
            Dimension {dimension.id} of {total}
          </p>
          <div
            className="mt-4 font-display font-normal text-ink-faint leading-none"
            style={{ fontSize: 'clamp(56px, 8vw, 80px)' }}
            aria-hidden
          >
            {String(dimension.id).padStart(2, '0')}
          </div>
          <h2 className="mt-3 font-display font-normal text-[1.75rem] md:text-[2rem] leading-[1.15] tracking-tight text-ink">
            {dimension.name}
          </h2>

          <p className="mt-8 font-body text-xs uppercase tracking-[0.05em] text-ink-faint">
            Why this matters
          </p>
          <p className="mt-3 font-display text-[17px] font-normal text-ink-muted leading-[1.7]">
            {dimension.context}
          </p>
        </div>

        {/* Right column — statements */}
        <div className="bg-white border border-warm-mid p-6 md:p-8">
          <p className="font-body text-[15px] text-ink-muted">
            For each statement, mark where your organisation stands
            today.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-body text-[13px] text-ink-muted">
            {trafficLightOptions.map((opt) => (
              <span key={opt.value} className="flex items-center gap-2">
                <span
                  className="inline-block h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: opt.colour }}
                  aria-hidden
                />
                {opt.value === 'embedded'
                  ? 'Embedded'
                  : opt.value === 'working'
                  ? 'Working on it'
                  : 'Needs attention'}
              </span>
            ))}
          </div>

          <div className="mt-6 divide-y divide-warm-mid">
            {dimension.statements.map((s, i) => (
              <div key={s.id} className={i === 0 ? 'pb-6' : 'py-6 last:pb-0'}>
                <p className="font-body text-[11px] uppercase tracking-[0.05em] font-medium text-purple-accent">
                  {s.label}
                </p>
                <p className="mt-2 font-display text-[17px] md:text-[18px] font-normal leading-[1.45] text-ink">
                  {s.text}
                </p>
                <div className="mt-4">
                  <TrafficLightSelector
                    statementId={s.id}
                    statementText={s.text}
                    value={responses[s.id]}
                    onChange={(v) => onChange(s.id, v)}
                  />
                </div>
              </div>
            ))}
          </div>

          {showNudge && !allAnswered ? (
            <p
              className="mt-6 font-body text-[14px] text-ink-muted bg-warm-light border-l-[3px] border-purple-accent px-4 py-3"
              role="status"
            >
              You haven&apos;t marked all statements — press{' '}
              <strong className="text-ink">
                {isLast ? 'See your results' : 'Next dimension'}
              </strong>{' '}
              again to continue anyway.
            </p>
          ) : null}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-10 flex items-center justify-between gap-4">
        <div className="flex-1">
          {dimension.id > 1 ? (
            <button
              type="button"
              onClick={onBack}
              className="font-body text-[14px] font-medium text-purple-accent border border-purple-accent rounded-full px-5 py-2.5 hover:bg-purple-accent hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-accent focus-visible:ring-offset-2 focus-visible:ring-offset-warm-light"
            >
              ← Back
            </button>
          ) : null}
        </div>

        <div className="font-body text-[14px] text-ink-faint">
          {dimension.id} of {total}
        </div>

        <div className="flex-1 flex justify-end">
          <button
            type="button"
            onClick={handleNext}
            className="font-body text-[14px] font-medium text-white bg-purple-primary rounded-full px-6 py-2.5 hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-accent focus-visible:ring-offset-2 focus-visible:ring-offset-warm-light"
          >
            {isLast ? 'See your results →' : 'Next dimension →'}
          </button>
        </div>
      </div>
    </div>
  )
}
