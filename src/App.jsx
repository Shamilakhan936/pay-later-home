import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PayLaterLogo from './assets/images/PayLaterr-logo.png'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import PricingSection from './components/PricingSection'
import CallToActionSection from './components/CallToActionSection'
import HelpSection from './components/HelpSection'
import Footer from './components/Footer'
import CardsPage from './pages/CardsPage'

function HomePage() {
  const [count, setCount] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="bg-white pt-6">

      <img src={PayLaterLogo} alt="PayLater Logo" className="h-auto w-auto mx-auto mb-7" />

      <HeroSection />

      <FeaturesSection />

      <PricingSection />

      <CallToActionSection />

      <HelpSection />

      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cards" element={<CardsPage />} />
      </Routes>
    </Router>
  )
}

export default App