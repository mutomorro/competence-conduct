'use client'

export default function WelcomeScreen({ onStart }) {
  return (
    <div className="mx-auto max-w-[84rem] px-6 py-16 md:py-24">
      <div className="grid gap-12 lg:gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
        {/* Left — copy + CTA */}
        <div className="max-w-[34rem]">
          <p className="font-body text-xs uppercase tracking-[0.05em] font-medium text-purple-accent">
            Diagnostic
          </p>
          <h1 className="mt-3 font-display font-normal text-[2.75rem] md:text-[3.625rem] leading-[1.05] tracking-tight text-ink">
            Your culture readiness profile
          </h1>

          <p className="mt-8 font-body text-[17px] leading-[1.7] text-ink-muted">
            A structured self-assessment across six dimensions of culture
            and conduct readiness. For each dimension, you&apos;ll consider
            three statements and mark where your organisation stands today.
            It takes about five minutes and produces a profile you can
            download and share.
          </p>

          <p className="mt-5 font-body text-[15px] leading-[1.65] text-ink-faint">
            Designed for individual reflection or as a conversation starter
            with your leadership team. When used in a group, the
            disagreements are usually the most valuable part.
          </p>

          <div className="mt-10">
            <button
              type="button"
              onClick={onStart}
              className="inline-flex items-center font-body text-[15px] font-semibold text-white bg-purple-primary hover:bg-purple-overlap transition-colors rounded-md px-7 py-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-primary focus-visible:ring-offset-2 focus-visible:ring-offset-warm-light"
            >
              Start the diagnostic
            </button>
          </div>

          <p className="mt-10 font-body text-[14px] text-ink-faint leading-relaxed">
            Your responses stay in your browser. Nothing is stored on our
            servers. Download or email your results at the end if you want
            to keep them.
          </p>
        </div>

        {/* Right — preview screenshots (desktop+) */}
        <div className="hidden md:block">
          <PreviewStack />
        </div>
      </div>
    </div>
  )
}

function PreviewStack() {
  return (
    <div className="relative aspect-[4/3] w-full max-w-[34rem] mx-auto">
      {/* Back card — slightly smaller, offset up-right, rotated subtly */}
      <div className="absolute top-0 right-0 w-[78%] rotate-[2deg] origin-bottom-left">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Diagnostics%20-%20Competence%20and%20Conduct%202.png"
          alt=""
          className="w-full h-auto rounded-lg border border-warm-mid shadow-[0_18px_40px_-20px_rgba(14,15,14,0.25)]"
        />
      </div>
      {/* Front card — larger, offset down-left, rotated the other way */}
      <div className="absolute bottom-0 left-0 w-[86%] -rotate-[2deg] origin-top-right">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Diagnostics%20-%20Competence%20and%20Conduct%201.png"
          alt=""
          className="w-full h-auto rounded-lg border border-warm-mid shadow-[0_24px_50px_-20px_rgba(14,15,14,0.3)]"
        />
      </div>
    </div>
  )
}
