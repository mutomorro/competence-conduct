/**
 * DottedShapeSeparator — a band of small dots arranged into a shape, with
 * the brand indigo+violet pair tucked at the focal point.
 *
 * Three shapes:
 *   arc      — dots trace a shallow upward arc; pair at the apex
 *   wave     — dots trace one cycle of a low-amplitude sine; pair at the first crest
 *   lozenge  — dots in a sparse grid, opacity falling off toward the edges; pair at centre
 *
 * All three use the same wide viewBox so the page rhythm doesn't change
 * when you swap shape. preserveAspectRatio="xMidYMid meet" keeps the dots
 * round at any width.
 */
export default function DottedShapeSeparator({
  shape = 'arc',
  className = '',
  dotR = 0.18,
  dotColor = '#0E0F0E',
  dotOpacity = 0.5,
  pairR = 2,
  indigo = '#6366F0',
  violet = '#9B51E2',
  overlap = '#5E3FD3',
}) {
  const W = 200
  const H = 8

  const dots = []

  if (shape === 'arc') {
    const count = 110
    const yBase = H - 1
    const amp = H - 2
    for (let i = 0; i <= count; i++) {
      const t = i / count
      const x = t * W
      const y = yBase - amp * Math.sin(Math.PI * t)
      dots.push({ x, y, opacity: dotOpacity })
    }
  } else if (shape === 'wave') {
    const count = 130
    const yMid = H / 2
    const amp = (H - 2) / 2
    for (let i = 0; i <= count; i++) {
      const t = i / count
      const x = t * W
      const y = yMid - amp * Math.sin(2 * Math.PI * t)
      dots.push({ x, y, opacity: dotOpacity })
    }
  } else if (shape === 'lozenge') {
    const xStep = 3.2
    const yStep = 1.4
    for (let x = xStep / 2; x < W; x += xStep) {
      for (let y = yStep; y < H; y += yStep) {
        const dx = (x - W / 2) / (W / 2)
        const dy = (y - H / 2) / (H / 2)
        const dist = Math.sqrt(dx * dx + dy * dy * 0.35)
        const fade = Math.max(0, 1 - dist)
        if (fade > 0.05) {
          dots.push({ x, y, opacity: dotOpacity * fade })
        }
      }
    }
  }

  let pairCx
  let pairCy
  if (shape === 'arc') {
    pairCx = W / 2
    pairCy = 1
  } else if (shape === 'wave') {
    pairCx = W / 4
    pairCy = 1
  } else {
    pairCx = W / 2
    pairCy = H / 2
  }

  const round = (n) => Math.round(n * 100) / 100

  return (
    <div
      aria-hidden
      className={`max-w-[84rem] mx-auto px-6 ${className}`}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}
      >
        {dots.map((d, i) => (
          <circle
            key={i}
            cx={round(d.x)}
            cy={round(d.y)}
            r={dotR}
            fill={dotColor}
            opacity={round(d.opacity)}
          />
        ))}
        <g transform={`translate(${pairCx} ${pairCy})`}>
          <circle cx={-pairR * 0.45} cy={0} r={pairR} fill={indigo} />
          <circle cx={pairR * 0.45} cy={0} r={pairR} fill={violet} />
          <ellipse cx={0} cy={0} rx={pairR * 0.4} ry={pairR * 0.92} fill={overlap} />
        </g>
      </svg>
    </div>
  )
}
