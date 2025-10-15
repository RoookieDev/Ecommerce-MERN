import React from 'react'

export const StartRating = ({rating}) => {
    let stars =[]
    for(let i=1;i<=Math.ceil(rating);i++){
        stars.push(i)
    }
  return (
    <div className='rating'>
        <h4>Rating By User</h4>
       <div className="icon">
         {
            stars.map(star=>{
                return(<span className="fa-solid fa-star"></span>)
            })
        }
       </div>
    </div>
  )
}
