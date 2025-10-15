import React from 'react'
import { StartRating } from './StartRating'

export const TestimonialCard = ({text,colNo,user, img,rating}) => {
  return (
    <div className={`cardHolder ${colNo}`}>
        <div className="card">
           <div className="imgBx">
             <img src={img} alt="" width={100}/>
           </div>
           {/* imgBx end here */}
            <div className="textBx">
              <h2>{user}</h2>
            <p>
                {text}
            </p>
            <StartRating rating={rating}/>
            </div>
        </div>
    </div>
  )
}
