import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#F4F4F6] border-t-2 border-[#E3E3E8] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto  px-4 text-center">
        <p className="text-[#6D6D78] text-base sm:text-lg mb-3 sm:mb-4">
          © 2025 PayLaterr. All rights reserved.
        </p>
        
        <p className="text-[#6D6D78] text-base sm:text-lg mb-4 sm:mb-6">
          5900 Wilshire Blvd Los Angeles CA 90036
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
          <a href="#" className="text-[#6D6D78] text-sm sm:text-lg hover:text-gray-900 transition-colors">
            Privacy Policy
          </a>
          <span className="text-[#6D6D78]">•</span>
          <a href="#" className="text-[#6D6D78] text-sm sm:text-lg hover:text-gray-900 transition-colors">
            Terms of Service
          </a>
          <span className="text-[#6D6D78]">•</span>
          <a href="#" className="text-[#6D6D78] text-sm sm:text-lg hover:text-gray-900 transition-colors">
            Unsubscribe
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
