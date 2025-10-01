import React from 'react'
import PayLaterLogo from '../assets/images/PayLaterr-logo.png'
import HeroImg from '../assets/images/hero-img.png'
import Button from './Button'

const HeroSection = () => {
  return (
    <div className="bg-white mb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="relative">
            <img 
              src={HeroImg} 
              alt="PayLater Dashboard Screenshot" 
              className="w-full h-auto object-contain"
              style={{ imageRendering: 'crisp-edges' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>

          <div className="p-4 sm:p-6 lg:p-10">
           
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-[#5048E5] text-sm font-medium rounded-full mb-4">
              Major Product Update
            </div>

           
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#14141A] leading-tight mb-6">
              SpendMap, Early Wage Access & Lower Prices.
            </h1>

           
            <p className="text-base sm:text-lg text-[#6D6D78] leading-relaxed mb-8 max-w-4xl">
              Three game-changing updates in one release! Track every dollar with SpendMap, 
              give your team Early Wage Access flexibility, and save up to 30% with our 
              reduced subscription fees across all plans.
            </p>

            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium"
              >
                View New Pricing
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-medium"
              >
                Explore Features
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
