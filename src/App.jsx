import { useState } from 'react'
import PayLaterLogo from './assets/images/PayLaterr-logo.png'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import PricingSection from './components/PricingSection'
import CallToActionSection from './components/CallToActionSection'
import HelpSection from './components/HelpSection'
import Footer from './components/Footer'

function App() {
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

export default App