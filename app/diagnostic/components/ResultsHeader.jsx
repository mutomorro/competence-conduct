'use client'

export default function ResultsHeader({ completedDate }) {
  return (
    <div className="bg-black text-white">
      <div className="mx-auto max-w-[84rem] px-6 py-5 md:py-6 flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-6">
        <h1 className="font-display font-normal text-[20px] md:text-[24px] leading-tight">
          Your culture readiness profile
        </h1>
        <div className="flex items-start gap-3 md:shrink-0">
          <p className="font-body text-[12px] md:text-[14px] text-white/70 md:text-right leading-snug flex-1 md:flex-initial">
            <span>Competence and Conduct Standard</span>
            <span className="hidden md:inline"> · Completed {completedDate}</span>
            <span className="md:hidden"> · {completedDate}</span>
          </p>
          <button
            type="button"
            aria-label="More options"
            className="text-white/70 hover:text-white transition-colors p-1 -m-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded shrink-0"
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
