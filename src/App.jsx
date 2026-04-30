import { BrowserRouter, Routes, Route } from 'react-router'
import PageLayout from './layouts/PageLayout.jsx'
import Hero from './sections/Hero.jsx'
import WhatTheStandardRequires from './sections/WhatTheStandardRequires.jsx'
import FiveQuestions from './sections/FiveQuestions.jsx'
import Diagnostic from './sections/Diagnostic.jsx'
import PatternsFromPractice from './sections/PatternsFromPractice.jsx'
import WhereToStart from './sections/WhereToStart.jsx'
import Footer from './sections/Footer.jsx'

function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <WhatTheStandardRequires />
      <FiveQuestions />
      <Diagnostic />
      <PatternsFromPractice />
      <WhereToStart />
      <Footer />
    </PageLayout>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
