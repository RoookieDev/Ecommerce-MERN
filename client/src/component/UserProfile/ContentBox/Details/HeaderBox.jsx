import React from 'react'
import { useState } from 'react'

const HeaderBox = ({setInputType, inputtype}) => {
  const[buttonName,setButtonName] = useState('Enable Edit');
  const[buttonStyle,setButtonStyle] = useState({
    bg:'#b0b0b0',
    left:0,
    icon:'fa-solid fa-edit',
    bcolor:'#b0b0b0'
  })
  // change readOnly attribute
  function inputHandler(){
    if(inputtype=='readOnly'){
      setInputType('');
      setButtonName('Disable Edit');
      setButtonStyle(prev=>{
        return{...prev,bg:'#970071',left:'50%',bcolor:'#970071'}
      })
    }
    else{
      setInputType('readOnly')
      setButtonName('Enable Edit')
       setButtonStyle(prev=>{
        return{...prev,bg:'#b0b0b0',left:'00%',bcolor:'#b0b0b0'}
      })
    }
  }
  return (
      <div className='headerBox'>
          <div className="title">
              <h4>User Profile</h4>
              <h1>Your Details</h1>
          </div>
          <div className="buttonBx">
            <button onClick={inputHandler} style={{borderColor:buttonStyle.bcolor}}>
              <i style={{background:buttonStyle.bg,left:buttonStyle.left}}></i>
            </button>
          </div>
      </div>
  )
}

export default HeaderBox
