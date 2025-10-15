import React from 'react'

const SideLogoBox = ({name}) => {
  return (
    <div className='logoBx'>
      <h4>Control Panel</h4>
        <h2>{name || 'Username'}</h2>
        
    </div>
  )
}

export default SideLogoBox
