'use client'

import { dimensions } from '../data/dimensions'

export default function WelcomeScreen({ onStart }) {
  return (
    <>
      {/* Hero */}
      <section className="bg-warm-light">
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
                <PrimaryCta onStart={onStart} label="Start the diagnostic" />
              </div>

              <p className="mt-10 font-body text-[14px] text-ink-faint leading-relaxed">
                Your responses are anonymous. No personal information is
                collected unless you choose to share it with us.
              </p>
            </div>

            {/* Right — preview screenshots (desktop+) */}
            <div className="hidden md:block">
              <PreviewStack />
            </div>
          </div>
        </div>
      </section>

      {/* Section A — How it works */}
      <section className="bg-white border-t border-warm-mid">
        <div className="mx-auto max-w-[84rem] px-6 py-16 md:py-20">
          <div className="max-w-[42rem]">
            <p className="font-body text-xs uppercase tracking-[0.05em] font-medium text-purple-accent">
              How it works
            </p>
            <h2 className="mt-3 font-display font-normal text-[1.875rem] md:text-[2.25rem] leading-[1.15] tracking-tight text-ink">
              Three steps. About five minutes.
            </h2>
          </div>

          <ol className="mt-12 grid gap-10 md:gap-8 md:grid-cols-3 md:items-start">
            <Step
              number="01"
              title="Reflect"
              body={
                <>
                  Six dimensions of culture readiness. For each one,
                  you&apos;ll consider three statements about what
                  &ldquo;good&rdquo; looks like in practice.
                </>
              }
            />
            <Step
              number="02"
              title="Rate"
              body={
                <>
                  For each statement, mark where your organisation stands
                  today: embedded, working on it, or needs attention. No
                  scores — just an honest snapshot.
                </>
              }
            />
            <Step
              number="03"
              title="Share"
              body={
                <>
                  Get a visual profile you can download as a PDF or send to
                  your inbox. Designed to drop into a board pack or start
                  a leadership conversation.
                </>
              }
            />
          </ol>
        </div>
      </section>

      {/* Section B — Six dimensions */}
      <section className="bg-warm-light border-t border-warm-mid">
        <div className="mx-auto max-w-[84rem] px-6 py-16 md:py-24">
          <div className="max-w-[42rem]">
            <p className="font-body text-xs uppercase tracking-[0.05em] font-medium text-purple-accent">
              What it covers
            </p>
            <h2 className="mt-3 font-display font-normal text-[1.875rem] md:text-[2.25rem] leading-[1.15] tracking-tight text-ink">
              Six dimensions of culture readiness
            </h2>
            <p className="mt-6 font-body text-[16px] leading-[1.7] text-ink-muted">
              Each dimension is grounded in what the Competence and Conduct
              Standard specifically requires. The diagnostic asks three
              statements per dimension — eighteen in total.
            </p>
          </div>

          <ol className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2">
            {dimensions.map((d) => (
              <DimensionPreview
                key={d.id}
                number={String(d.id).padStart(2, '0')}
                title={d.name}
                context={d.context}
              />
            ))}
          </ol>

          <div className="mt-14 flex justify-center md:justify-start">
            <PrimaryCta onStart={onStart} label="Start the diagnostic" />
          </div>
        </div>
      </section>

      {/* Section C — Team conversations */}
      <section className="bg-white border-t border-warm-mid">
        <div className="mx-auto max-w-[84rem] px-6 py-16 md:py-20">
          <div className="max-w-[42rem]">
            <p className="font-body text-xs uppercase tracking-[0.05em] font-medium text-purple-accent">
              In practice
            </p>
            <h2 className="mt-3 font-display font-normal text-[1.5rem] md:text-[1.75rem] leading-[1.25] tracking-tight text-ink">
              Designed for team conversations
            </h2>

            <blockquote className="mt-7 border-l-[3px] border-purple-accent pl-5 md:pl-6">
              <p className="font-body text-[17px] md:text-[18px] leading-[1.65] text-ink">
                The diagnostic works well as individual reflection, but
                it&apos;s designed for teams. When a leadership group
                completes it independently and compares results, the
                disagreements are usually the most valuable part. Where
                your team diverges is where the real conversation starts.
              </p>
            </blockquote>

            <p className="mt-7 font-body text-[14px] text-ink-faint">
              Takes about five minutes. Three statements per dimension,
              eighteen in total.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

function PrimaryCta({ onStart, label }) {
  return (
    <button
      type="button"
      onClick={onStart}
      className="inline-flex items-center font-body text-[15px] font-semibold text-white bg-purple-primary hover:bg-purple-overlap transition-colors rounded-md px-7 py-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-primary focus-visible:ring-offset-2 focus-visible:ring-offset-warm-light"
    >
      {label}
    </button>
  )
}

function Step({ number, title, body }) {
  return (
    <li className="flex flex-col">
      <span className="font-display font-normal text-[1.5rem] text-purple-accent leading-none">
        {number}
      </span>
      <h3 className="mt-4 font-display font-medium text-[1.25rem] text-ink leading-tight">
        {title}
      </h3>
      <p className="mt-3 font-body text-[15px] leading-[1.65] text-ink-muted">
        {body}
      </p>
    </li>
  )
}

function DimensionPreview({ number, title, context }) {
  return (
    <li className="flex gap-5">
      <span className="font-display font-normal text-[1.5rem] text-purple-accent leading-none shrink-0 pt-1">
        {number}
      </span>
      <div className="min-w-0">
        <h3 className="font-display font-medium text-[1.0625rem] md:text-[1.125rem] leading-tight text-ink">
          {title}
        </h3>
        <p className="mt-3 font-body text-[15px] leading-[1.65] text-ink-muted">
          {context}
        </p>
      </div>
    </li>
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
