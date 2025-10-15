import React from 'react'
import NewsletterForm from './NewsletterForm'

import '../../../assets/css/NewsletterStyle.css'
import NewsletterVideo from './NewsletterVideo'

const Newsletter = ({email}) => {
  return (
    <div className='newsletter'>
        <div className="container">
            <NewsletterForm email={email}/>
        </div>
        {/* <NewsletterVideo/> */}
    </div>
  )
}

export default Newsletter
