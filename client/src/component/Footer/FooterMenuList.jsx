import React from 'react'

const FooterMenuList = ({
    title1,link1,title2,link2,title3,link3,title4,link4
}) => {
  return (
      <div className='menuFooter col-md-4'>
          <ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/'}>Service</Link></li>
              <li><Link to={'/'}>About</Link></li>
              <li><Link to={'/'}>Contact</Link></li>
          </ul>
      </div>
  )
}

export default FooterMenuList
