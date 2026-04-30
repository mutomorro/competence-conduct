/**
 * DotGridMoment — a quiet field of dots with a single overlapping
 * indigo+violet pair drifting through it.
 *
 * Use as a toned-down decorative background for callouts, secondary heroes,
 * and section dividers. Pair-position is `cx`/`cy` as a percent of the
 * viewport so it can be steered toward whatever content sits on top.
 *
 *   <section className="relative">
 *     <DotGridMoment className="absolute inset-0" cx={80} cy={30} scale={0.8} />
 *     <div className="relative z-10 …">…</div>
 *   </section>
 */
export default function DotGridMoment({
  cx = 75,
  cy = 45,
  scale = 1,
  dotColor = '#0E0F0E',
  dotOpacity = 0.18,
  step = 6,
  pairOpacity = 0.7,
  indigo = '#6366F0',
  violet = '#9B51E2',
  overlap = '#5E3FD3',
  className,
  style,
  ...rest
}) {
  const dots = []
  for (let x = step; x < 100; x += step) {
    for (let y = step; y < 100; y += step) {
      dots.push(
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r="0.5"
          fill={dotColor}
          opacity={dotOpacity}
        />
      )
    }
  }
  const r = 12 * scale
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
        {dots}
        <g transform={`translate(${cx} ${cy})`} opacity={pairOpacity}>
          <circle cx={-r * 0.55} cy={0} r={r} fill={indigo} />
          <circle cx={r * 0.55} cy={0} r={r} fill={violet} />
          <ellipse cx={0} cy={0} rx={r * 0.45} ry={r * 0.92} fill={overlap} />
        </g>
      </svg>
    </div>
  )
}
