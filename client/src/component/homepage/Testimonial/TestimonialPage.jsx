import React from 'react'

// CSS IMPORT
import '../../../assets/css/TestimonialStyle.css'

import { TestimonialCard } from './TestimonialCard'

export const TestimonialPage = () => {

  const sliderCon = document.querySelector(".reviewPage .rows")
  function prevReview(){
    let width = sliderCon.clientWidth;
    sliderCon.scrollLeft = sliderCon.scrollLeft-width
  }
   function nextReview(){
    let width = sliderCon.clientWidth;
    sliderCon.scrollLeft = sliderCon.scrollLeft+width
  }

    let ColNo='col-md-5'
  return (
    <div className='reviewPage'>
        <div className="container">
            <h5> User Experience</h5>
            <h1>Testimonial</h1>
            <div className="rows">
                <TestimonialCard 
            img={'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
            colNo={ColNo} 
            text={"I recently purchased a pair of noise-canceling headphones from this e-commerce site, and I couldn't be happier! The sound quality is fantastic, and they arrived just in time for my long flight."} 
            user={'Jessica Miller'}
            rating={4}
            />
            <TestimonialCard 
            img={'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
            colNo={ColNo} 
            text={"I was a bit hesitant to order electronics online, but this website made it so easy! I found exactly what I needed, and my new headphones arrived in perfect condition and super fast."} 
            user={'David Kim'}
            rating={5}
            />
            <TestimonialCard 
            img={'https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
            colNo={ColNo} 
            text={"The selection of headphones on this site is incredible! I ended up buying a pair that was on sale, and they sound amazing. Definitely coming back for more!"} 
            user={'Samantha Lee'}
            className='active'
             rating={4}
            />
            <TestimonialCard 
            img={'https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfDF8MHx8fDA%3D'} 
            colNo={ColNo} 
            text={"I recently purchased a pair of noise-canceling headphones from this e-commerce site, and I couldn't be happier! The sound quality is fantastic, and they arrived just in time for my long flight."} 
            user={'Rachel Green'}
             rating={3}
            />
            <TestimonialCard 
            img={'https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfDF8MHx8fDA%3D'} 
            colNo={ColNo} 
            text={"I recently purchased a pair of noise-canceling headphones from this e-commerce site, and I couldn't be happier! The sound quality is fantastic, and they arrived just in time for my long flight."} 
            user={'Michael Johnson'}
             rating={4}
            />
            <TestimonialCard 
            img={'https://plus.unsplash.com/premium_photo-1663047504447-d54e624ef2d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJ8ZW58MHwxfDB8fHww'} 
            colNo={ColNo} 
            text={"I recently purchased a pair of noise-canceling headphones from this e-commerce site, and I couldn't be happier! The sound quality is fantastic, and they arrived just in time for my long flight."} 
            user={'Emily Nguyen'}
             rating={2}
            />
            </div>

            <button id='prev' onClick={prevReview}><i className='fa-solid fa-angle-left'></i></button>
            <button id='next' onClick={nextReview}><i className='fa-solid fa-angle-right'></i></button>
        </div>
    </div>
  )
}
