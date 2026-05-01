/**
 * DownloadCard — sidebar resource card promoting a downloadable file.
 *
 * Multiple cards can stack with a 16px gap (e.g. wrap in `space-y-4`).
 */
export default function DownloadCard({
  thumbnail,
  title,
  description,
  fileType,
  href,
}) {
  return (
    <div className="bg-white border border-warm-mid rounded-lg overflow-hidden">
      <div className="aspect-[3/2] w-full overflow-hidden bg-warm-light">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumbnail}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display font-medium text-[15px] md:text-[16px] leading-snug text-ink">
            {title}
          </h3>
          {fileType ? (
            <span
              className="shrink-0 inline-block font-body text-[11px] font-medium uppercase tracking-[0.04em] text-ink-muted bg-warm-light rounded-full"
              style={{ padding: '2px 8px' }}
            >
              {fileType}
            </span>
          ) : null}
        </div>
        <p className="mt-2 font-body text-[13px] md:text-[14px] leading-[1.5] text-ink-muted">
          {description}
        </p>
        <a
          href={href}
          download
          className="mt-3 block w-full text-center font-body font-medium text-[14px] text-white bg-purple-accent hover:bg-purple-overlap transition-colors rounded-md"
          style={{ padding: '10px 16px' }}
        >
          Download
        </a>
      </div>
    </div>
  )
}
