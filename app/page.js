import Hero from '../components/sections/Hero.jsx'
import WhatTheStandardRequires from '../components/sections/WhatTheStandardRequires.jsx'
import FiveQuestions from '../components/sections/FiveQuestions.jsx'
import Diagnostic from '../components/sections/Diagnostic.jsx'
import PatternsFromPractice from '../components/sections/PatternsFromPractice.jsx'
import WhereToStart from '../components/sections/WhereToStart.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <WhatTheStandardRequires />
      <FiveQuestions />
      <Diagnostic />
      <PatternsFromPractice />
      <WhereToStart />
    </>
  )
}
