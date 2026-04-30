/**
 * SectionDivider — short horizontal rule with the brand mark centred.
 *
 * Use between major chapters / sections in long-form pages.
 * Width is intentionally narrow so it reads as an editorial ornament
 * rather than a hard break.
 */
export default function SectionDivider({ className = '' }) {
  return (
    <div
      aria-hidden
      className={`my-16 flex items-center justify-center gap-4 ${className}`}
    >
      <span className="h-px w-12 bg-warm-mid" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-mark.svg"
        alt=""
        width="20"
        height="20"
        className="opacity-60"
      />
      <span className="h-px w-12 bg-warm-mid" />
    </div>
  )
}
