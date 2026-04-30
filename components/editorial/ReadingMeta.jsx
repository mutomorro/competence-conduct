/**
 * ReadingMeta — small editorial metadata strip below an H1.
 *
 * Usage:
 *   <ReadingMeta readTime={8} lastUpdated="30 April 2026" sections={5} />
 *
 * All props optional — only the provided pieces render.
 */
export default function ReadingMeta({ readTime, lastUpdated, sections }) {
  const parts = []
  if (readTime) parts.push(`${readTime} min read`)
  if (lastUpdated) parts.push(`Updated ${lastUpdated}`)
  if (sections) parts.push(`${sections} sections`)

  if (parts.length === 0) return null

  return (
    <p className="mt-5 text-sm text-ink-muted flex flex-wrap items-center gap-x-2 gap-y-1">
      {parts.map((part, i) => (
        <span key={part} className="flex items-center gap-x-2">
          {i > 0 && (
            <span aria-hidden className="text-ink-faint">
              ·
            </span>
          )}
          <span>{part}</span>
        </span>
      ))}
    </p>
  )
}
