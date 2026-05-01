'use client'

import { useEffect, useState } from 'react'
import WelcomeScreen from './WelcomeScreen'
import DimensionScreen from './DimensionScreen'
import ProgressBar from './ProgressBar'
import ResultsPage from './ResultsPage'
import { dimensions } from '../data/dimensions'
import { track } from '../../../lib/analytics'

const TOTAL_DIMENSIONS = dimensions.length
const RESULTS_STEP = TOTAL_DIMENSIONS + 1

const initialResponses = dimensions.reduce((acc, d) => {
  d.statements.forEach((s) => {
    acc[s.id] = null
  })
  return acc
}, {})

// Varied seed for ?demo=1 — exercises all three statuses across the six cards,
// including one all-embedded card to show the single-pill "quiet confidence" state.
const demoPattern = [
  ['embedded', 'working', 'attention'],
  ['embedded', 'embedded', 'embedded'],
  ['attention', 'attention', 'working'],
  ['working', 'working', 'embedded'],
  ['attention', 'embedded', 'working'],
  ['working', 'embedded', 'attention'],
]

function buildDemoResponses() {
  const seed = { ...initialResponses }
  dimensions.forEach((d, i) => {
    d.statements.forEach((s, j) => {
      seed[s.id] = demoPattern[i]?.[j] ?? null
    })
  })
  return seed
}

export default function DiagnosticApp() {
  const [currentStep, setCurrentStep] = useState(0)
  const [responses, setResponses] = useState(initialResponses)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('demo') === '1') {
      setResponses(buildDemoResponses())
      setCurrentStep(RESULTS_STEP)
    }
  }, [])

  function start() {
    track('diagnostic_started')
    setCurrentStep(1)
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  function setResponse(statementId, value) {
    setResponses((prev) => ({ ...prev, [statementId]: value }))
  }

  function next() {
    setCurrentStep((s) => {
      const dim = dimensions[s - 1]
      if (dim) {
        track('diagnostic_dimension_completed', {
          dimension_number: dim.id,
          dimension_name: dim.name,
        })
      }
      return Math.min(s + 1, RESULTS_STEP)
    })
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  function back() {
    setCurrentStep((s) => Math.max(s - 1, 1))
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  function restart() {
    setResponses(initialResponses)
    setCurrentStep(0)
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Welcome
  if (currentStep === 0) {
    return (
      <div className="diagnostic-app">
        <WelcomeScreen onStart={start} />
      </div>
    )
  }

  // Results
  if (currentStep === RESULTS_STEP) {
    return (
      <div className="diagnostic-app">
        <ResultsPage responses={responses} onRestart={restart} />
      </div>
    )
  }

  // Dimension screen
  const dimension = dimensions[currentStep - 1]
  return (
    <div className="diagnostic-app">
      <div className="mx-auto max-w-[84rem] px-6 pt-6">
        <ProgressBar total={TOTAL_DIMENSIONS} current={currentStep} />
      </div>
      <DimensionScreen
        dimension={dimension}
        total={TOTAL_DIMENSIONS}
        responses={responses}
        onChange={setResponse}
        onBack={back}
        onNext={next}
        isLast={currentStep === TOTAL_DIMENSIONS}
      />
    </div>
  )
}
