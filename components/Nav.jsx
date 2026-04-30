const links = [
  { href: '#standard', label: 'The Standard' },
  { href: '#five-questions', label: 'Five Questions' },
  { href: '#diagnostic', label: 'Diagnostic' },
  { href: '#patterns', label: 'Patterns' },
  { href: '#where-to-start', label: 'Where to Start' },
]

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-xl text-stone-900 tracking-tight"
        >
          Competence &amp; Conduct
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm text-stone-600">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-teal-700 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
