import SectionWrapper from '../SectionWrapper.jsx'

const questions = [
  'What does competence mean for the work we actually do?',
  'How do we know it is present — and where it is not?',
  'How do we develop it, deliberately and over time?',
  'How do conduct and culture reinforce or undermine it?',
  'How do we evidence all of this to ourselves and to the regulator?',
]

export default function FiveQuestions() {
  return (
    <SectionWrapper id="five-questions">
      <h2 className="font-display text-4xl md:text-5xl text-stone-900 leading-tight">
        Five questions every provider should answer
      </h2>
      <p className="mt-6 text-lg text-stone-700">
        A framework for thinking past qualifications and into the everyday
        practice of competence.
      </p>
      <ol className="mt-8 space-y-5">
        {questions.map((q, i) => (
          <li key={i} className="flex gap-4 text-lg text-stone-800">
            <span className="font-display text-2xl text-teal-700 leading-none mt-0.5">
              {i + 1}.
            </span>
            <span>{q}</span>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  )
}
