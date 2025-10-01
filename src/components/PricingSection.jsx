import React from 'react'
import PricingCard from './PricingCard'

const PricingSection = () => {
  const pricingPlans = [
    {
      planName: "Basic Plan",
      price: "$29.99",
      period: "/month",
      oldPrice: "was $69/mo",
      savings: "Save $20/mo",
      label: null,
      isPopular: false
    },
    {
      planName: "Premium",
      price: "$59.99",
      period: "/month",
      oldPrice: "was $139/mo",
      savings: "Save $40/mo",
      label: "Most Popular",
      isPopular: true
    },
    {
      planName: "Ultimate Plan",
      price: "$129.99",
      period: "/month",
      oldPrice: "was $279/mo",
      savings: "Save $80/mo",
      label: null,
      isPopular: false
    }
  ]

  return (
    <div className="bg-white rounded-[12px] shadow-md max-w-7xl  mx-auto">
      <div className="bg-[#5048E5] py-8 sm:py-16 rounded-t-[12px]">
        <div className="max-w-7xl mx-auto max-xl:px-4  text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            New Lower Pricing (Effective Immediately)
          </h2>
          <p className="text-base sm:text-lg text-white/90">
            All plans include PayLaterr and Early Wage Access at no extra cost
          </p>
        </div>
      </div>

      <div className="md:py-16 py-8">
        <div className="max-w-7xl mx-auto max-xl:px-4 lg:px-8">
          <div className="grid max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 items-center justify-center gap-4 sm:gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                planName={plan.planName}
                price={plan.price}
                period={plan.period}
                oldPrice={plan.oldPrice}
                savings={plan.savings}
                label={plan.label}
                isPopular={plan.isPopular}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingSection
