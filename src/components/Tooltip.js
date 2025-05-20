import React, { useState } from 'react'

const Tooltip = ({text, children}) => {
  const [showToolTip, setShowToolTip] = useState(false)
  return (
    <div 
      className='tooltip'
      onMouseEnter={() => setShowToolTip(true)}  
      onMouseLeave={() => setShowToolTip(false)}  
    >
      {children}
      {showToolTip && <div className='tooltiptext'>{text}</div>}
    </div>
  )
}

export default Tooltip