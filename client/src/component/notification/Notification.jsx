import React from 'react'
// CSS link
import '../../assets/css/Notification.css'
const Notification = ({text, notifyStyle,setNotifyStyle}) => {
  function ResetHandler(){
    setNotifyStyle({bottom:'0%', opacity:'0'})
  } 
  return (
    <div className='notification col-md-4' style={notifyStyle} >
      <h4>{text}</h4>
      <button onClick={ResetHandler}>okay</button>
    </div>
  )
}

export default Notification
