import SectionWrapper from '../SectionWrapper.jsx'

const steps = [
  {
    title: 'Read the Standard properly',
    body: 'Not the headlines — the actual culture and behaviour clauses. Get the leadership team in a room with the document.',
  },
  {
    title: 'Run the diagnostic together',
    body: 'Use it as a structured conversation, not a score. The disagreement between team members is the most valuable output.',
  },
  {
    title: 'Pick one dimension to work on first',
    body: 'Trying to fix everything at once is how culture programmes stall. Choose the dimension where action would change the most.',
  },
]

export default function WhereToStart() {
  return (
    <SectionWrapper id="where-to-start">
      <h2 className="font-display text-4xl md:text-5xl text-stone-900 leading-tight">
        Where to start
      </h2>
      <p className="mt-6 text-lg text-stone-700">
        Three practical first moves for boards and executive teams.
      </p>
      <ol className="mt-8 space-y-6">
        {steps.map((step, i) => (
          <li key={step.title} className="flex gap-4">
            <span className="font-display text-3xl text-teal-700 leading-none mt-1 shrink-0">
              {i + 1}
            </span>
            <div>
              <h3 className="font-display text-xl text-stone-900">
                {step.title}
              </h3>
              <p className="mt-1 text-stone-700">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  )
}
