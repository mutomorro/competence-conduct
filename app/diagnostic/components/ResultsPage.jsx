'use client'

import Link from 'next/link'
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
  null: 'Not marked',
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
      <ResultsHeader completedDate={completedDate} />

      {/* Summary stats bar */}
      <div className="bg-white border-b border-warm-mid">
        <div className="mx-auto max-w-[84rem] px-6 py-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
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
          <p className="font-body text-[14px] text-ink-faint">
            18 statements · 6 dimensions
          </p>
        </div>
      </div>

      {/* Results grid */}
      <div className="mx-auto max-w-[84rem] px-6 py-12">
        <div className="results-grid grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dimensions.map((dim) => (
            <DimensionCell
              key={dim.id}
              dimension={dim}
              responses={responses}
            />
          ))}
        </div>

        {/* Action buttons */}
        <div className="diagnostic-actions mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <button
            type="button"
            onClick={handlePrint}
            className="font-body text-[14px] font-medium text-purple-primary border border-purple-primary rounded-full px-6 py-3 hover:bg-purple-primary hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-accent focus-visible:ring-offset-2 focus-visible:ring-offset-warm-light"
          >
            Download as PDF
          </button>

          <div className="flex-1">
            {!emailOpen ? (
              <button
                type="button"
                onClick={() => setEmailOpen(true)}
                className="font-body text-[14px] font-medium text-purple-primary border border-purple-primary rounded-full px-6 py-3 hover:bg-purple-primary hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-accent focus-visible:ring-offset-2 focus-visible:ring-offset-warm-light"
              >
                Send to my inbox
              </button>
            ) : emailSubmitted ? (
              <p className="font-body text-[14px] text-ink-muted">
                Thanks — email delivery is coming soon. Use{' '}
                <strong className="text-ink">Download as PDF</strong>{' '}
                for now.
              </p>
            ) : (
              <form
                onSubmit={handleEmailSubmit}
                className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center"
              >
                <input
                  type="email"
                  required
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  placeholder="you@example.com"
                  className="flex-1 font-body text-[14px] bg-white border border-warm-mid rounded-full px-5 py-3 focus:outline-none focus-visible:border-purple-accent"
                />
                <button
                  type="submit"
                  className="font-body text-[14px] font-medium text-white bg-purple-primary rounded-full px-6 py-3 hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-accent focus-visible:ring-offset-2 focus-visible:ring-offset-warm-light"
                >
                  Send →
                </button>
              </form>
            )}
          </div>

          <button
            type="button"
            onClick={onRestart}
            className="font-body text-[14px] text-ink-muted hover:text-ink transition-colors underline underline-offset-4 self-center sm:ml-auto"
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
    <div className="inline-flex items-center gap-2 bg-warm-light rounded-full px-4 py-2">
      <span
        className="inline-block h-2.5 w-2.5 rounded-full"
        style={{ backgroundColor: colour }}
        aria-hidden
      />
      <span className="font-body text-[14px] text-ink">
        <strong className="font-semibold">{count}</strong> {label}
      </span>
    </div>
  )
}

function DimensionCell({ dimension, responses }) {
  return (
    <div className="dimension-cell bg-white border border-warm-mid p-6 flex flex-col">
      <div className="flex items-baseline gap-3">
        <span
          className="font-display font-normal text-[18px] text-ink-faint"
          aria-hidden
        >
          {String(dimension.id).padStart(2, '0')}
        </span>
        <h2 className="font-display font-normal text-[20px] md:text-[22px] leading-tight text-ink">
          {dimension.name}
        </h2>
      </div>

      <ul className="mt-5 space-y-4 flex-1">
        {dimension.statements.map((s) => {
          const value = responses[s.id]
          const opt = value ? optionByValue[value] : null
          const colour = opt ? opt.colour : '#E8E3DB'
          return (
            <li key={s.id} className="flex gap-3">
              <span
                className="mt-[6px] h-3 w-3 rounded-full shrink-0 border"
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
                  className="mt-1 font-body text-[12px] font-medium"
                  style={{ color: opt ? colour : '#999999' }}
                >
                  {value ? statusLabel[value] : 'Not marked'}
                </p>
              </div>
            </li>
          )
        })}
      </ul>

      <Link
        href={dimension.exploreLink.href}
        className="explore-link mt-5 pt-4 border-t border-warm-mid font-body text-[13px] font-medium text-purple-accent hover:underline underline-offset-2 inline-flex items-center gap-1"
      >
        {dimension.exploreLink.text} <span aria-hidden>→</span>
      </Link>
    </div>
  )
}
