import React from 'react'

const HelpSection = () => {
  const helpLinks = [
    {
      title: "SpendMap Guide",
      href: "#"
    },
    {
      title: "Early Wage Setup", 
      href: "#"
    },
    {
      title: "Pricing FAQ",
      href: "#"
    },
    {
      title: "Contact Support",
      href: "#"
    }
  ]

  return (
    <div className="bg-white pb-8 sm:pb-16">
      <div className="max-w-7xl mx-auto  px-4 text-center">
        <h2 className="text-lg sm:text-xl text-[#6D6D78] mb-4 sm:mb-5">
          Questions about SpendMap, Early Wage Access, or pricing changes?
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
          {helpLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-[#5048E5] hover:text-[#4338CA] font-medium transition-colors"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HelpSection
