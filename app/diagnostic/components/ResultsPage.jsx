'use client'

import { useState } from 'react'
import ResultsHeader from './ResultsHeader'
import { dimensions, trafficLightOptions } from '../data/dimensions'

const optionByValue = Object.fromEntries(
  trafficLightOptions.map((o) => [o.value, o])
)

const statusLabel = {
  embedded: 'Embedded',
  working: 'Working on it',
  attention: 'Needs attention',
}

function formatDate() {
  const d = new Date()
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function ResultsPage({ responses, onRestart }) {
  const [emailOpen, setEmailOpen] = useState(false)
  const [emailValue, setEmailValue] = useState('')
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  const counts = { embedded: 0, working: 0, attention: 0 }
  Object.values(responses).forEach((v) => {
    if (v && counts[v] != null) counts[v] += 1
  })

  const completedDate = formatDate()

  function handlePrint() {
    if (typeof window !== 'undefined') window.print()
  }

  function handleEmailSubmit(e) {
    e.preventDefault()
    setEmailSubmitted(true)
  }

  return (
    <div className="diagnostic-results">
      <ResultsHeader
        completedDate={completedDate}
        onPrint={handlePrint}
        onEmail={() => setEmailOpen(true)}
        emailOpen={emailOpen}
        emailValue={emailValue}
        onEmailChange={setEmailValue}
        onEmailSubmit={handleEmailSubmit}
        emailSubmitted={emailSubmitted}
      />

      {/* Summary stats bar */}
      <div className="bg-white border-b border-warm-mid">
        <div className="mx-auto max-w-[84rem] px-6 py-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <StatPill
              colour="#4CAF50"
              count={counts.embedded}
              label="embedded"
            />
            <StatPill
              colour="#FF9800"
              count={counts.working}
              label="working on it"
            />
            <StatPill
              colour="#EF5350"
              count={counts.attention}
              label="need attention"
            />
          </div>
          <p className="font-body text-[13px] md:text-[14px] text-ink-faint">
            18 statements · 6 dimensions
          </p>
        </div>
      </div>

      {/* Results grid */}
      <div className="mx-auto max-w-[84rem] px-6 py-10 md:py-12">
        <div className="results-grid grid gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {dimensions.map((dim) => (
            <DimensionCell
              key={dim.id}
              dimension={dim}
              responses={responses}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <button
            type="button"
            onClick={onRestart}
            className="diagnostic-actions font-body text-[14px] text-ink-muted hover:text-ink transition-colors underline underline-offset-4"
          >
            Start again
          </button>
        </div>
      </div>
    </div>
  )
}

function StatPill({ colour, count, label }) {
  return (
    <div className="inline-flex items-center gap-2 bg-warm-light border border-warm-mid rounded-full px-4 py-1.5">
      <span
        className="inline-block h-2.5 w-2.5 rounded-full"
        style={{ backgroundColor: colour }}
        aria-hidden
      />
      <span className="font-body text-[13px] md:text-[14px] text-ink">
        <strong className="font-semibold">{count}</strong> {label}
      </span>
    </div>
  )
}

function DimensionCell({ dimension, responses }) {
  return (
    <div className="dimension-cell bg-white border border-warm-mid p-6 flex flex-col">
      <div className="flex items-baseline gap-3 pb-4 border-b border-warm-mid">
        <span
          className="font-body text-[13px] tracking-[0.05em] text-ink-faint"
          aria-hidden
        >
          {String(dimension.id).padStart(2, '0')}
        </span>
        <h2 className="font-display font-medium text-[18px] md:text-[19px] leading-tight text-ink">
          {dimension.name}
        </h2>
      </div>

      <ul className="mt-4 divide-y divide-warm-mid flex-1">
        {dimension.statements.map((s) => {
          const value = responses[s.id]
          const opt = value ? optionByValue[value] : null
          const colour = opt ? opt.colour : '#E8E3DB'
          return (
            <li key={s.id} className="py-4 first:pt-0 last:pb-0">
              <div className="flex gap-3 items-start">
                <span
                  className="mt-[5px] h-3 w-3 rounded-full shrink-0 border"
                  style={{
                    backgroundColor: opt ? colour : 'transparent',
                    borderColor: colour,
                  }}
                  aria-hidden
                />
                <div className="flex-1 min-w-0">
                  <p className="font-display text-[14px] md:text-[15px] leading-snug text-ink">
                    {s.text}
                  </p>
                  <p
                    className="mt-1.5 font-body text-[11px] uppercase tracking-[0.05em] font-medium"
                    style={{ color: opt ? colour : '#999999' }}
                  >
                    {value ? statusLabel[value] : 'Not marked'}
                  </p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
