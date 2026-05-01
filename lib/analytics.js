'use client'

import posthog from 'posthog-js'

let initialised = false

export function initAnalytics() {
  if (initialised || typeof window === 'undefined') return
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
  if (!key) return
  posthog.init(key, {
    api_host:
      process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
    capture_pageview: true,
    capture_pageleave: true,
  })
  window.posthog = posthog
  initialised = true
}

export function track(event, properties) {
  if (typeof window === 'undefined') return
  if (window.posthog && typeof window.posthog.capture === 'function') {
    try {
      window.posthog.capture(event, properties)
    } catch (err) {
      console.warn('PostHog capture failed:', err)
    }
  }
}

export function countResponses(responses) {
  const counts = { count_embedded: 0, count_working: 0, count_attention: 0 }
  Object.values(responses || {}).forEach((v) => {
    if (v === 'embedded') counts.count_embedded += 1
    else if (v === 'working') counts.count_working += 1
    else if (v === 'attention') counts.count_attention += 1
  })
  return counts
}
