'use client'

import { useMemo } from 'react'

/**
 * VennField — scattered overlapping indigo + violet circle pairs.
 * The brand mark, multiplied. Use as a decorative background for heroes,
 * headers, and high-impact sections.
 *
 * - Deterministic per `seed` so the layout is stable across renders.
 * - Set `animated` to enable a slow drift (CSS keyframes, GPU-friendly).
 * - Honors `prefers-reduced-motion` automatically.
 *
 *   <section className="relative overflow-hidden bg-warm-light">
 *     <VennField className="absolute inset-0" animated />
 *     <div className="relative z-10 …">…content…</div>
 *   </section>
 */
function rand(i, seed) {
  const x = Math.sin((i + seed) * 9301 + 49297) * 233280
  return x - Math.floor(x)
}

export default function VennField({
  density = 18,
  opacity = 0.16,
  seed = 3,
  indigo = '#6366F0',
  violet = '#9B51E2',
  animated = false,
  duration = 24,
  className,
  style,
  ...rest
}) {
  const pairs = useMemo(() => {
    const out = []
    for (let i = 0; i < density; i++) {
      out.push({
        cx: rand(i * 2, seed) * 100,
        cy: rand(i * 2 + 1, seed) * 100,
        size: 6 + rand(i * 3, seed) * 16,
        rot: rand(i * 5, seed) * 360,
        phase: rand(i * 7, seed),
        key: i,
      })
    }
    return out
  }, [density, seed])

  return (
    <div
      className={className}
      style={{ pointerEvents: 'none', ...style }}
      aria-hidden="true"
      {...rest}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        {pairs.map((d) => {
          const r = d.size / 2
          const dx = r * 0.55
          const animStyle = animated
            ? {
                animation: `venn-drift ${duration}s ease-in-out ${(-d.phase * duration).toFixed(2)}s infinite alternate`,
                transformOrigin: `${d.cx}px ${d.cy}px`,
              }
            : {}
          return (
            <g
              key={d.key}
              transform={`translate(${d.cx} ${d.cy}) rotate(${d.rot})`}
              opacity={opacity}
              style={animStyle}
            >
              <circle cx={-dx} cy={0} r={r} fill={indigo} />
              <circle cx={dx} cy={0} r={r} fill={violet} />
            </g>
          )
        })}
      </svg>
      <style>{`
        @keyframes venn-drift {
          0%   { transform: translate(0, 0) scale(1); }
          50%  { transform: translate(2px, -2px) scale(1.08); }
          100% { transform: translate(-2px, 2px) scale(0.94); }
        }
        @media (prefers-reduced-motion: reduce) {
          [aria-hidden="true"] g { animation: none !important; }
        }
      `}</style>
    </div>
  )
}
