import React from 'react'

const CreditInfo = ({ 
  availableCredit = 3500, 
  usedCredit = 2000, 
  totalCredit = 5000 
}) => {
  const creditUsedPercentage = (usedCredit / totalCredit) * 100

  return (
    <div className="bg-white rounded-2xl max-w-[500px] p-6 shadow-md  mx-auto">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <span className="text-black font-medium">Available Credit</span>
          <span className="text-2xl font-bold text-black">${availableCredit.toLocaleString()}</span>
        </div>
        
        <div className="flex justify-between items-center mt-10">
          <span className="text-black font-medium">Credit used</span>
          <span className="text-black font-medium">${usedCredit.toLocaleString()}/${totalCredit.toLocaleString()}</span>
        </div>
        
        <div className="w-full">
          <div className="w-full bg-[#D9D9D9] rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-[#5D33D1] to-[#A655DB] h-3 rounded-full transition-all duration-300"
              style={{ width: `${creditUsedPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreditInfo
