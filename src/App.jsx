import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import AnalysisResult from './pages/analysis-result.jsx'
import InsightReview from './pages/insight-review.jsx'


import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/analysis-result" element={<AnalysisResult />} />
            <Route path="/insight-review" element={<InsightReview />} />
          </Routes>
          <Footer />

        </div>
      </BrowserRouter>
    </ >
  )
}

export default App
