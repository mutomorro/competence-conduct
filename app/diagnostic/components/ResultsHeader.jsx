'use client'

export default function ResultsHeader({
  completedDate,
  onPrint,
  onEmail,
  emailOpen,
  emailValue,
  onEmailChange,
  onEmailSubmit,
  emailSubmitted,
}) {
  return (
    <div className="diagnostic-results-header bg-black text-white">
      <div className="mx-auto max-w-[84rem] px-6 py-5 md:py-6 flex flex-col md:flex-row md:items-start md:justify-between gap-5 md:gap-8">
        <div className="flex-1 min-w-0">
          <h1 className="font-display font-normal text-[20px] md:text-[24px] leading-tight">
            Your culture readiness profile
          </h1>
          <p className="mt-1 font-body text-[12px] md:text-[13px] text-white/70 leading-snug">
            <span>Competence and Conduct Standard</span>
            <span> · Completed {completedDate}</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:shrink-0">
          {emailOpen && !emailSubmitted ? (
            <form
              onSubmit={onEmailSubmit}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2"
            >
              <input
                type="email"
                required
                value={emailValue}
                onChange={(e) => onEmailChange(e.target.value)}
                placeholder="you@example.com"
                className="font-body text-[14px] bg-white/10 text-white placeholder-white/50 border border-white/30 rounded-full px-4 py-2.5 focus:outline-none focus-visible:border-white"
              />
              <button
                type="submit"
                className="font-body text-[14px] font-medium text-ink bg-white rounded-full px-5 py-2.5 hover:bg-white/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                Send →
              </button>
            </form>
          ) : emailSubmitted ? (
            <p className="font-body text-[13px] text-white/70 self-center">
              Email delivery coming soon
            </p>
          ) : (
            <button
              type="button"
              onClick={onPrint}
              className="font-body text-[14px] font-medium text-white border border-white/40 rounded-full px-5 py-2.5 hover:bg-white hover:text-ink hover:border-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Download as PDF
            </button>
          )}

          {!emailOpen ? (
            <button
              type="button"
              onClick={onEmail}
              className="font-body text-[14px] font-medium text-ink bg-white rounded-full px-5 py-2.5 hover:bg-white/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Send to my inbox
            </button>
          ) : null}

          <button
            type="button"
            aria-label="More options"
            className="text-white/70 hover:text-white transition-colors p-1 self-start sm:self-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden
            >
              <circle cx="4" cy="10" r="1.5" />
              <circle cx="10" cy="10" r="1.5" />
              <circle cx="16" cy="10" r="1.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
