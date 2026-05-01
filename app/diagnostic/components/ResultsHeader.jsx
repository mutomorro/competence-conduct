'use client'

import PDFDownloadButton from '../pdf/PDFDownloadButton'

export default function ResultsHeader({
  completedDate,
  responses,
  emailOpen,
  emailValue,
  onEmailChange,
  onEmailOpen,
  onEmailCancel,
  onEmailSubmit,
  emailState,
  emailError,
  sentTo,
}) {
  const isSent = emailState === 'sent'
  const isSending = emailState === 'sending'

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
          {isSent ? (
            <p
              className="font-body text-[13px] text-white self-center"
              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              <span style={{ color: '#4CAF50' }}>✓</span>{' '}
              Sent to {sentTo}. We won&apos;t email you again unless you ask
              us to.
            </p>
          ) : (
            <>
              <PDFDownloadButton
                responses={responses}
                className="font-body text-[14px] font-medium text-white border border-white/40 rounded-full px-5 py-2.5 hover:bg-white hover:text-ink hover:border-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 disabled:opacity-70 disabled:cursor-not-allowed"
              />

              {emailOpen ? (
                <form
                  onSubmit={onEmailSubmit}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2"
                  noValidate
                >
                  <div className="flex flex-col">
                    <input
                      type="email"
                      required
                      autoFocus
                      value={emailValue}
                      onChange={(e) => onEmailChange(e.target.value)}
                      placeholder="Your email address"
                      disabled={isSending}
                      className="font-body text-[14px] bg-white text-ink placeholder-ink-faint border border-white rounded-full px-4 py-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 disabled:opacity-70"
                    />
                    {emailError ? (
                      <p
                        role="alert"
                        className="mt-1 font-body text-[12px] text-[#FFB4B4]"
                      >
                        {emailError}
                      </p>
                    ) : null}
                  </div>
                  <button
                    type="submit"
                    disabled={isSending}
                    className="font-body text-[14px] font-medium text-white bg-purple-primary rounded-full px-5 py-2.5 hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#9B51E1' }}
                  >
                    {isSending ? 'Sending…' : 'Send'}
                  </button>
                  <button
                    type="button"
                    onClick={onEmailCancel}
                    disabled={isSending}
                    aria-label="Cancel"
                    className="font-body text-[13px] text-white/70 hover:text-white transition-colors px-2 py-1 self-center disabled:opacity-50"
                  >
                    ✕
                  </button>
                </form>
              ) : (
                <button
                  type="button"
                  onClick={onEmailOpen}
                  className="font-body text-[14px] font-medium text-ink bg-white rounded-full px-5 py-2.5 hover:bg-white/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  Send to my inbox
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
