import React from 'react'

// CSS Link
import '../../assets/css/FooterStyle.css'
import SignPageFooter from './SignPageFooter'
import FooterMenu from './FooterMenu'

const Footer = () => {
  return (
    <div className='footer'>
      <SignPageFooter/>
      <FooterMenu/>
    </div>
  )
}

export default Footer
