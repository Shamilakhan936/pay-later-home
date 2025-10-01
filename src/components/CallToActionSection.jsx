import React from 'react'
import Button from './Button'

const CallToActionSection = () => {
  return (
    <div className="bg-white pb-8 sm:pb-12 mt-10 max-xl:px-4">
      <div className="max-w-7xl shadow-md border border-[#E3E3E8] rounded-[12px] mx-auto px-4 lg:px-8">
        <div className="rounded-[12px] p-4 sm:p-6 lg:p-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6">
            Start Using These Features Today
          </h2>
          
          <p className="text-base sm:text-lg text-[#6D6D78] mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            SpendMap and Early Wage Access are live now in your dashboard. Your new pricing takes effect automatically on your next billing date.
          </p>
          
          <div className="flex justify-center">
            <Button 
              variant="primary" 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium"
            >
              Open Dashboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToActionSection
