import React from 'react'
import { Map, Clock, TrendingDown, PieChart, Calendar, DollarSign } from 'lucide-react'
import FeatureCard from './FeatureCard'

const FeaturesSection = () => {
  const features = [
    {
      icon: <Map className="w-6 h-6" />,
      title: "SpendMap: Visual Expense Tracking",
      description: "See exactly where every dollar goes with interactive spend visualization. Categorize expenses automatically, identify spending patterns, and export detailed reports in seconds."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Early Wage Access for Your Team",
      description: "Empower your employees with on-demand access to earned wages. No more waiting for payday—improve financial wellness and boost team morale instantly."
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "30% Lower Subscription Fees",
      description: "We've reduced pricing across all plans. Starter plan now $29.99/mo (was $69), Pro at $59.99/mo (was $139), and Enterprise at $129.99/mo (was $279). Same features, better value."
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Advanced Spend Analytics",
      description: "SpendMap comes with built-in analytics that break down spending by category, vendor, department, and time period. Get actionable insights to optimize your budget."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Flexible Wage Schedule",
      description: "Let employees access up to 50% of earned wages before payday. Zero impact on your cash flow with our instant funding model. Setup takes just 5 minutes."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Grandfathered Pricing",
      description: "Existing customers automatically get the new lower rates—no action needed. Your loyalty matters, and we're passing the savings directly to you starting next billing cycle."
    }
  ]

  return (
    <div className="bg-white pb-10">
      <div className="max-w-7xl mx-auto max-xl:px-4 ">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Three Major Updates You'll Love
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection
