import React, { useState } from 'react'
import PayLaterLogo from '../assets/images/PayLaterr-logo.png'
import CardFront from '../assets/images/cardFront.png'
import CardBack from '../assets/images/cardBack.png'
import CreditInfo from '../components/CreditInfo'
import Footer from '../components/Footer'

const CardsPage = () => {
  const [showBack, setShowBack] = useState(false)

  return (
    <div className="min-h-screen ">
     
      <div className="bg-white ">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center">
            <img src={PayLaterLogo} alt="PayLater Logo" className="h-auto w-auto" />
          </div>
        </div>
      </div>

     
      <div className="max-w-4xl mx-auto px-4 py-8">
       
        <div className="text-center mb-8">
          <h1 className="text-[36px] font-semibold text-[#1F242E] mb-4">Your Virtual Card</h1>
          <p className="text-lg text-[#676F7E] leading-[20px] max-w-2xl mx-auto">
            Pay your bills instantly with your PayLaterr virtual card. Copy card details or use them directly for online payments.
          </p>
        </div>

        <div className="flex flex-col gap-3 justify-center items-center mb-11  mx-auto">
          <img src={CardFront} alt="Card Front" className="w-full max-w-[500px] max-h-[300px] h-full" />
          <img src={CardFront} alt="Card Back" className="w-full max-w-[500px] max-h-[300px] h-full" />
        </div> 

        <div className="mb-8">
          <CreditInfo />
        </div>

       
      </div>

   <Footer />
    </div>
  )
}

export default CardsPage
