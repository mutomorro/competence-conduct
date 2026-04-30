'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const contextLinks = [
  { href: '/about', label: 'About' },
  { href: '/standard', label: 'The Standard' },
]

const toolLinks = [
  { href: '/challenges', label: 'Challenges' },
  { href: '/questions', label: 'Key Questions' },
]

const diagnosticLink = { href: '/diagnostic', label: 'Diagnostic' }

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href) => pathname === href

  return (
    <nav className="sticky top-0 z-50 bg-warm-light/90 backdrop-blur border-b border-warm-mid">
      <div className="max-w-[84rem] mx-auto px-6">
        {/* Row 1 — logo + explainer (and hamburger on mobile) */}
        <div className="py-3 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="group flex items-start gap-3"
            onClick={() => setOpen(false)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-mark.svg"
              alt=""
              width="28"
              height="28"
              aria-hidden="true"
              className="shrink-0 mt-0.5"
            />
            <span className="flex flex-col" style={{ gap: '2px' }}>
              <span className="font-display text-[16px] font-medium text-ink tracking-tight leading-none group-hover:text-purple-accent transition-colors">
                Competence <em>&amp;</em> Conduct
              </span>
              <span className="font-body text-[12px] font-normal text-ink-muted leading-none">
                Culture readiness guide for housing leaders
              </span>
            </span>
          </Link>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 text-ink"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="primary-mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Row 2 — desktop tiers */}
        <div className="hidden md:flex items-stretch pb-3 gap-6">
          {/* Context group */}
          <div className="flex flex-col" style={{ gap: '4px' }}>
            <span className="font-body text-[10px] uppercase tracking-[0.08em] text-ink-faint">
              Context
            </span>
            <div className="flex items-center gap-4">
              {contextLinks.map((l) => (
                <ContextLink key={l.href} href={l.href} active={isActive(l.href)}>
                  {l.label}
                </ContextLink>
              ))}
            </div>
          </div>

          {/* Vertical divider */}
          <div aria-hidden className="w-px bg-warm-mid self-stretch" />

          {/* Tools group */}
          <div className="flex flex-col ml-auto items-end" style={{ gap: '4px' }}>
            <span className="font-body text-[10px] uppercase tracking-[0.08em] text-ink-faint">
              Tools
            </span>
            <div className="flex items-center gap-3">
              {toolLinks.map((l) => (
                <ToolPill key={l.href} href={l.href} active={isActive(l.href)}>
                  {l.label}
                </ToolPill>
              ))}
              <DiagnosticButton
                href={diagnosticLink.href}
                active={isActive(diagnosticLink.href)}
              >
                {diagnosticLink.label}
              </DiagnosticButton>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open ? (
        <div
          id="primary-mobile-menu"
          className="md:hidden border-t border-warm-mid bg-warm-light"
        >
          <div className="max-w-[84rem] mx-auto px-6 py-5 space-y-5">
            <div>
              <p className="font-body text-[10px] uppercase tracking-[0.08em] text-ink-faint mb-2">
                Context
              </p>
              <ul className="space-y-2">
                {contextLinks.map((l) => (
                  <li key={l.href}>
                    <MobileContextLink
                      href={l.href}
                      active={isActive(l.href)}
                      onNavigate={() => setOpen(false)}
                    >
                      {l.label}
                    </MobileContextLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-warm-mid pt-5">
              <p className="font-body text-[10px] uppercase tracking-[0.08em] text-ink-faint mb-2">
                Tools
              </p>
              <ul className="flex flex-wrap items-center gap-2">
                {toolLinks.map((l) => (
                  <li key={l.href}>
                    <ToolPill
                      href={l.href}
                      active={isActive(l.href)}
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </ToolPill>
                  </li>
                ))}
                <li>
                  <DiagnosticButton
                    href={diagnosticLink.href}
                    active={isActive(diagnosticLink.href)}
                    onClick={() => setOpen(false)}
                  >
                    {diagnosticLink.label}
                  </DiagnosticButton>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  )
}

function ContextLink({ href, active, children }) {
  return (
    <Link href={href} className="font-body text-[14px] font-medium">
      <span
        className={
          active
            ? 'inline-block pb-1 border-b-2 border-purple-accent text-ink'
            : 'inline-block pb-1 border-b-2 border-transparent text-ink-muted hover:text-ink transition-colors'
        }
      >
        {children}
      </span>
    </Link>
  )
}

function MobileContextLink({ href, active, children, onNavigate }) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={
        active
          ? 'inline-block font-body text-[15px] font-semibold text-ink border-b-2 border-purple-accent pb-1'
          : 'inline-block font-body text-[15px] font-medium text-ink-muted hover:text-ink pb-1 border-b-2 border-transparent transition-colors'
      }
    >
      {children}
    </Link>
  )
}

function ToolPill({ href, active, children, onClick }) {
  const base =
    'inline-flex items-center font-body text-[14px] rounded-md transition-colors'
  const padding = 'px-[14px] py-[6px]'
  const stateClass = active
    ? 'bg-purple-accent/15 text-purple-accent font-semibold'
    : 'bg-purple-accent/10 text-purple-accent font-medium hover:bg-purple-accent/15'
  return (
    <Link href={href} onClick={onClick} className={`${base} ${padding} ${stateClass}`}>
      {children}
    </Link>
  )
}

function DiagnosticButton({ href, active, children, onClick }) {
  const base =
    'inline-flex items-center font-body text-[14px] font-semibold rounded-md transition-colors text-white'
  const padding = 'px-[18px] py-[8px]'
  const stateClass = active
    ? 'bg-purple-overlap'
    : 'bg-purple-accent hover:bg-purple-overlap'
  return (
    <Link href={href} onClick={onClick} className={`${base} ${padding} ${stateClass}`}>
      {children}
    </Link>
  )
}
