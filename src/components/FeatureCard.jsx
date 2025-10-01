import React from 'react'

const FeatureCard = ({ icon, title, description, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow ${className}`}>
      <div className="flex items-center justify-center w-12 h-12 bg-[#5048E5] rounded-lg mb-4">
        <div className="text-2xl text-white">
          {icon}
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-gray-900 mb-3">
        {title}
      </h3>
      
      <p className="text-[#6D6D78] leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default FeatureCard
