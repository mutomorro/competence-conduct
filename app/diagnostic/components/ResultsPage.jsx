'use client'

import { useState } from 'react'
import ResultsHeader from './ResultsHeader'
import { dimensions, trafficLightOptions } from '../data/dimensions'

const optionByValue = Object.fromEntries(
  trafficLightOptions.map((o) => [o.value, o])
)

const statusStyles = {
  embedded: {
    colour: '#4CAF50',
    bg: 'rgba(76, 175, 80, 0.1)',
    cardLabel: 'embedded',
    summaryLabel: 'embedded',
  },
  working: {
    colour: '#FF9800',
    bg: 'rgba(255, 152, 0, 0.1)',
    cardLabel: 'working on it',
    summaryLabel: 'working on it',
  },
  attention: {
    colour: '#EF5350',
    bg: 'rgba(239, 83, 80, 0.1)',
    cardLabel: 'needs attention',
    summaryLabel: 'need attention',
  },
}

const STATUS_KEYS = ['embedded', 'working', 'attention']

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

  function handleEmailSubmit(e) {
    e.preventDefault()
    setEmailSubmitted(true)
  }

  return (
    <div className="diagnostic-results">
      <ResultsHeader
        completedDate={completedDate}
        responses={responses}
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
          <div className="flex flex-wrap items-center gap-2">
            {STATUS_KEYS.map((key) => (
              <StatusPill
                key={key}
                status={key}
                count={counts[key]}
                variant="summary"
              />
            ))}
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

function StatusPill({ status, count, variant }) {
  const s = statusStyles[status]
  if (!s) return null
  if (variant === 'card' && count === 0) return null

  const label = variant === 'summary' ? s.summaryLabel : s.cardLabel

  return (
    <span
      className="inline-flex items-center font-body text-[11px] leading-none rounded-full"
      style={{
        backgroundColor: s.bg,
        color: s.colour,
        padding: '4px 10px',
      }}
    >
      <span className="font-semibold">{count}</span>
      <span className="ml-1">{label}</span>
    </span>
  )
}

function DimensionCell({ dimension, responses }) {
  const cardCounts = { embedded: 0, working: 0, attention: 0 }
  dimension.statements.forEach((s) => {
    const v = responses[s.id]
    if (v && cardCounts[v] != null) cardCounts[v] += 1
  })

  const number = String(dimension.id).padStart(2, '0')

  return (
    <div className="dimension-cell bg-white border border-warm-mid rounded-lg flex flex-col overflow-hidden">
      {/* Card header */}
      <div className="bg-warm-light px-5 py-[14px] flex items-baseline gap-2.5">
        <span className="font-display font-medium text-[14px] text-purple-accent leading-none">
          {number}
        </span>
        <h2 className="font-display font-medium text-[15px] md:text-[16px] text-ink leading-tight">
          {dimension.name}
        </h2>
      </div>

      {/* Statement rows */}
      <ul className="flex-1">
        {dimension.statements.map((s, idx) => {
          const value = responses[s.id]
          const opt = value ? optionByValue[value] : null
          const colour = opt ? opt.colour : '#E8E3DB'
          const isLast = idx === dimension.statements.length - 1
          return (
            <li
              key={s.id}
              className={`flex items-center min-h-[72px] pr-5 ${
                isLast ? '' : 'border-b border-warm-mid'
              }`}
              style={{
                borderLeft: `3px solid ${colour}`,
                paddingLeft: '14px',
              }}
            >
              <p className="font-body text-[13px] md:text-[14px] leading-[1.5] text-ink">
                {s.text}
              </p>
            </li>
          )
        })}
      </ul>

      {/* Summary pills */}
      <div className="border-t border-warm-mid px-5 py-3 flex flex-wrap items-center gap-1.5">
        {STATUS_KEYS.map((key) => (
          <StatusPill
            key={key}
            status={key}
            count={cardCounts[key]}
            variant="card"
          />
        ))}
      </div>
    </div>
  )
}
