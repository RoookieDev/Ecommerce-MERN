import React, { useState } from 'react'

export const ButtonBox = ({setQuantity,quantity}) => {
  
  return (
    <section className='buttonBx'>
        <div className='count'>
            <button onClick={e=>{
                setQuantity(prev=>prev-1)}
                }>-</button>
            <h6>{quantity}</h6>
            <button onClick={e=>{
                setQuantity(prev=>prev+1)}
                }>+</button>
        </div>
        <div className='btn'>
            <button >Add to Cart <i className='fa-solid fa-plus'></i></button>
        </div>
    </section>
  )
}
