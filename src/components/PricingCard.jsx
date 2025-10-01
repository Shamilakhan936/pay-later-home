import React from 'react'

const PricingCard = ({ 
  planName, 
  price, 
  period, 
  oldPrice, 
  savings, 
  label, 
  isPopular = false,
  className = '' 
}) => {
  return (
    <div className={`relative bg-white rounded-[12px] cursor-pointer shadow-sm border-2 p-6 text-center ${isPopular ? 'border-[#5048E5]' : 'border-[#E3E3E8'} ${className}`}>
      {label && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-[#5048E5] text-white text-sm font-medium px-3 py-2 rounded-full">
            {label}
          </span>
        </div>
      )}
      
      <h3 className="text-[#6D6D78] text-base font-medium mb-2">
        {planName}
      </h3>
      
      <div className="mb-2 flex items-baseline justify-center">
        <span className="text-3xl font-bold text-black">
          {price}
        </span>
        <span className="text-lg text-gray-500 ml-1">
          {period}
        </span>
      </div>
      
      <div className="mb-4">
        <span className="text-base text-[#6D6D78] line-through">
          {oldPrice}
        </span>
      </div>
      
      <div className="flex justify-center">
        <span className="bg-green-100 text-[#16A34A] text-sm font-medium px-3 py-2 rounded-full">
          {savings}
        </span>
      </div>
    </div>  
  )
}

export default PricingCard
