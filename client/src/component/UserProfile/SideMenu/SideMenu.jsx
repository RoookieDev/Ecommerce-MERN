import React from 'react'

// CSS link
import '../../../assets/css/SideMenuStyle.css'
import SideLogoBox from './SideLogoBox'
import MenuBox from './MenuBox'
import ButtonBoxMenu from './ButtonBoxMenu'

const SideMenu = ({name,email,id}) => {
  return (
    <div className='col-md-2 sideMenuBar'>
      <SideLogoBox name={name}/>
      <MenuBox/>
      <ButtonBoxMenu/>
    </div>
  )
}

export default SideMenu
