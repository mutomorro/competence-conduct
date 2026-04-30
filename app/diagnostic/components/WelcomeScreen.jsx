'use client'

export default function WelcomeScreen({ onStart }) {
  return (
    <div className="mx-auto max-w-[42rem] px-6 py-16 md:py-24">
      <p className="font-body text-xs uppercase tracking-[0.05em] font-medium text-purple-accent">
        Culture readiness diagnostic
      </p>
      <h1 className="mt-3 font-display font-normal text-[2.75rem] md:text-[3.625rem] leading-[1.05] tracking-tight text-ink">
        How ready is your organisation?
      </h1>

      <div className="mt-8 space-y-5 text-[17px] text-ink-muted leading-[1.7]">
        <p>
          A reflective pulse check across six dimensions of the
          Competence and Conduct Standard. Not a compliance quiz - a
          structured way to surface where the culture work is, and
          where it isn&apos;t.
        </p>
        <p>
          For each dimension, you&apos;ll read three specific
          statements about what &quot;good&quot; looks like, and mark
          where your organisation stands today. It takes around five
          minutes.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        <ModeCard
          title="Doing this alone"
          body="For an individual leadership team member to reflect on where things stand."
          onClick={() => onStart('individual')}
        />
        <ModeCard
          title="Doing this with a team"
          body="Run it individually first, then compare. The divergence between team members is often the most valuable finding."
          onClick={() => onStart('team')}
        />
      </div>

      <p className="mt-10 font-body text-[14px] text-ink-faint leading-relaxed">
        Your responses stay in your browser. Nothing is stored on our
        servers. Download or email your results at the end if you want
        to keep them.
      </p>
    </div>
  )
}

function ModeCard({ title, body, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex flex-col items-start text-left bg-white border border-warm-mid border-l-[3px] border-l-warm-mid hover:border-l-purple-accent hover:shadow-sm transition-all duration-200 p-6 focus:outline-none focus-visible:border-l-purple-accent focus-visible:ring-2 focus-visible:ring-purple-accent focus-visible:ring-offset-2 focus-visible:ring-offset-warm-light"
    >
      <span className="font-display font-medium text-[20px] text-ink leading-snug">
        {title}
      </span>
      <span className="mt-2 font-body text-[15px] text-ink-muted leading-relaxed">
        {body}
      </span>
      <span
        aria-hidden
        className="mt-4 font-body text-[13px] text-purple-accent opacity-0 group-hover:opacity-100 transition-opacity"
      >
        Start →
      </span>
    </button>
  )
}
