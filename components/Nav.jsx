'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/standard', label: 'The Standard' },
  { href: '/questions', label: 'Five Questions' },
  { href: '/diagnostic', label: 'Diagnostic' },
  { href: '/challenges', label: 'Challenges' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-warm-light/95 backdrop-blur border-b border-warm-mid">
      <div className="max-w-[84rem] mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-base font-medium text-ink tracking-tight hover:text-purple-accent transition-colors"
        >
          Competence &amp; Conduct
        </Link>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== '/' && pathname.startsWith(link.href))
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    active
                      ? 'text-purple-accent font-medium'
                      : 'text-ink-muted font-normal hover:text-ink transition-colors'
                  }
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
