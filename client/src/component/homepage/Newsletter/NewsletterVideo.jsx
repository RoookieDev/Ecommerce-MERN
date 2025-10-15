import React from 'react'
// import video
import video from '../../../assets/video/headphone_bg.mp4'
const NewsletterVideo = () => {
  return (
    <div className='videoBx'>
      <video muted loop autoPlay>
        <source src={video}/>
      </video>
    </div>
  )
}

export default NewsletterVideo
