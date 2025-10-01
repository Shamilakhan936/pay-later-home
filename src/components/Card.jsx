import React from 'react'

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-lg shadow-md p-6'
  const hoverClasses = hover ? 'hover:shadow-lg transition-shadow' : ''
  
  const classes = `${baseClasses} ${hoverClasses} ${className}`.trim()
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default Card
