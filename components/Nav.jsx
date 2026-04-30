import Link from 'next/link'

const links = [
  { href: '/standard', label: 'The Standard' },
  { href: '/questions', label: 'Five Questions' },
  { href: '/diagnostic', label: 'Diagnostic' },
  { href: '/challenges', label: 'Challenges' },
]

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur border-b border-stone-200">
      <div className="max-w-[1350px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl text-stone-900 tracking-tight"
        >
          Competence &amp; Conduct
        </Link>
        <ul className="hidden md:flex items-center gap-6 text-sm text-stone-600">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-teal-700 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
