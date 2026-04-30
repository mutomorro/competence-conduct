'use client'

import { useState } from 'react'
import WelcomeScreen from './WelcomeScreen'
import DimensionScreen from './DimensionScreen'
import ProgressBar from './ProgressBar'
import ResultsPage from './ResultsPage'
import { dimensions } from '../data/dimensions'

const TOTAL_DIMENSIONS = dimensions.length
const RESULTS_STEP = TOTAL_DIMENSIONS + 1

const initialResponses = dimensions.reduce((acc, d) => {
  d.statements.forEach((s) => {
    acc[s.id] = null
  })
  return acc
}, {})

export default function DiagnosticApp() {
  const [currentStep, setCurrentStep] = useState(0)
  const [mode, setMode] = useState(null)
  const [responses, setResponses] = useState(initialResponses)

  function start(selectedMode) {
    setMode(selectedMode)
    setCurrentStep(1)
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  function setResponse(statementId, value) {
    setResponses((prev) => ({ ...prev, [statementId]: value }))
  }

  function next() {
    setCurrentStep((s) => Math.min(s + 1, RESULTS_STEP))
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
    setMode(null)
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
