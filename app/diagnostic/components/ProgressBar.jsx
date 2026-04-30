'use client'

export default function ProgressBar({ total = 6, current = 0 }) {
  return (
    <div
      className="diagnostic-progress flex items-center gap-[2px]"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={total}
      aria-valuenow={Math.max(0, Math.min(current, total))}
      aria-label={`Dimension ${current} of ${total}`}
    >
      {Array.from({ length: total }, (_, i) => {
        const idx = i + 1
        const isCompleted = idx < current
        const isCurrent = idx === current
        return (
          <div
            key={idx}
            className="h-[7px] flex-1 rounded-[2px] transition-[background-color,width] duration-[400ms] ease-out"
            style={{
              backgroundColor: isCompleted
                ? 'var(--color-purple-accent)'
                : isCurrent
                ? 'var(--color-purple-primary)'
                : 'var(--color-warm-mid)',
            }}
          />
        )
      })}
    </div>
  )
}
