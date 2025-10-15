import React from 'react'
import { Rating } from '../../homepage/ProductPage/Rating'
import { StartRating } from '../../homepage/Testimonial/StartRating'
import { ButtonBox } from './ButtonBox'

export const ProductText = ({text,price,disprice,rating,totalrating,setQuantity,quantity}) => {
    const name = text.split(" ")

    return (
    <div className='textBox col-md-4'>
        <h5>{name[0]}</h5>
        <h1>{`${name[1]} ${name[2]} ${name[3]} `}</h1>
        <p>{text}</p>
        <hr />
        <StartRating rating={rating}/>
        <hr />
        <ButtonBox setQuantity={setQuantity} quantity={quantity}/>
    </div>
  )
}
