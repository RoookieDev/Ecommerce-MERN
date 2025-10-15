import React, { useState } from 'react'
// CSS LINK
import '../../../assets/css/ContactStyle.css'
import ContactTitle from './ContactTitle'
import ContactForm from './ContactForm'
import Notification from '../../notification/Notification'

const ContactPage = () => {
  const [notifyStyle,setNotifyStyle] = useState({
    bottom:'0%',
    opacity:'0',
  });

  const[text,setTextMsg] = useState("Alert Message");
  return (
    <div className='contactPage'>
      <div className="container containers">
        <ContactTitle/>
        <ContactForm setNotifyStyle={setNotifyStyle} setTextMsg={setTextMsg}/>
        <Notification text={text} notifyStyle={notifyStyle} setNotifyStyle={setNotifyStyle}/>
      </div>
      {/* container end here */}
    </div>
  )
}

export default ContactPage
