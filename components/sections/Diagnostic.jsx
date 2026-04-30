import SectionWrapper from '../SectionWrapper.jsx'

export default function Diagnostic() {
  return (
    <SectionWrapper id="diagnostic">
      <h2 className="font-display text-4xl md:text-5xl text-stone-900 leading-tight">
        Diagnostic
      </h2>
      <p className="mt-6 text-lg text-stone-700">
        A short, structured self-assessment for leadership teams to map their
        current position against the Standard. Interactive version coming soon.
      </p>
      <div className="mt-10 border border-stone-200 rounded-md bg-stone-100 p-8 text-stone-600">
        <p className="font-display text-xl italic">
          Interactive diagnostic — placeholder
        </p>
        <p className="mt-3 text-base">
          Twenty questions across the five areas, scored to produce a clear
          picture of strengths and gaps. You&apos;ll be able to take it on
          screen or export as a PDF for your board pack.
        </p>
      </div>
    </SectionWrapper>
  )
}
