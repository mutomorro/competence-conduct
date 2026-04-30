/**
 * DimensionGlyph — the six culture-dimension glyphs.
 *
 * All paths use `currentColor`, so set `color` (or a text-colour utility) on
 * the parent. Pass `size` for a square render.
 *
 * Slugs match the diagnostic data in app/diagnostic/data/dimensions.js so a
 * dimension object can be passed straight in:
 *   <DimensionGlyph slug={dimension.slug} size={28} />
 */

const TITLES = {
  'codes-of-conduct': 'Codes of conduct in practice',
  'embedded-behaviours': 'Embedded behaviours',
  'resident-voice': 'Resident voice',
  'leadership-signal': 'Leadership signal',
  'learning-and-development': 'Learning and development',
  'evidence-and-accountability': 'Evidence and accountability',
}

export default function DimensionGlyph({
  slug,
  size = 80,
  title,
  className,
  ...rest
}) {
  const label = title ?? TITLES[slug]
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 80 80',
    role: 'img',
    'aria-label': label,
    className,
    ...rest,
  }

  switch (slug) {
    case 'codes-of-conduct':
      return (
        <svg {...common}>
          <circle cx="40" cy="40" r="28" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="40" cy="40" r="28" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" opacity="0.4" />
          <circle cx="40" cy="40" r="6" fill="currentColor" />
        </svg>
      )
    case 'embedded-behaviours':
      return (
        <svg {...common}>
          <circle cx="40" cy="40" r="26" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="48" cy="46" r="14" fill="currentColor" />
        </svg>
      )
    case 'resident-voice':
      return (
        <svg {...common}>
          <circle cx="40" cy="40" r="6" fill="currentColor" />
          <path
            d="M 40 26 A 14 14 0 0 1 40 54"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            transform="rotate(-90 40 40)"
          />
          <path
            d="M 40 18 A 22 22 0 0 1 40 62"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            opacity="0.65"
            transform="rotate(-90 40 40)"
          />
          <path
            d="M 40 10 A 30 30 0 0 1 40 70"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            opacity="0.4"
            transform="rotate(-90 40 40)"
          />
        </svg>
      )
    case 'leadership-signal':
      return (
        <svg {...common}>
          <circle cx="40" cy="16" r="6" fill="currentColor" />
          <line x1="40" y1="22" x2="40" y2="68" stroke="currentColor" strokeWidth="1.6" />
          <line x1="32" y1="32" x2="48" y2="32" stroke="currentColor" strokeWidth="1.4" />
          <line x1="34" y1="44" x2="46" y2="44" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
          <line x1="36" y1="56" x2="44" y2="56" stroke="currentColor" strokeWidth="1" opacity="0.45" />
          <line x1="37" y1="66" x2="43" y2="66" stroke="currentColor" strokeWidth="0.8" opacity="0.25" />
        </svg>
      )
    case 'learning-and-development':
      return (
        <svg {...common}>
          <path
            d="M 14 60 L 28 60 L 28 46 L 42 46 L 42 32 L 56 32 L 56 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="square"
          />
          <circle cx="14" cy="60" r="3" fill="currentColor" />
          <circle cx="28" cy="46" r="3" fill="currentColor" />
          <circle cx="42" cy="32" r="3" fill="currentColor" />
          <circle cx="56" cy="18" r="4" fill="currentColor" />
        </svg>
      )
    case 'evidence-and-accountability':
      return (
        <svg {...common}>
          <line x1="14" y1="22" x2="66" y2="22" stroke="currentColor" strokeWidth="1.6" />
          <line x1="14" y1="32" x2="58" y2="32" stroke="currentColor" strokeWidth="1.4" opacity="0.85" />
          <line x1="14" y1="42" x2="62" y2="42" stroke="currentColor" strokeWidth="1.4" opacity="0.7" />
          <line x1="14" y1="52" x2="50" y2="52" stroke="currentColor" strokeWidth="1.2" opacity="0.55" />
          <line x1="14" y1="62" x2="44" y2="62" stroke="currentColor" strokeWidth="1" opacity="0.35" />
          <circle cx="68" cy="22" r="2.5" fill="currentColor" />
        </svg>
      )
    default:
      return null
  }
}
