import React, { useState } from 'react'
import { ProductImage } from './ProductImage'
import { ProductText } from './ProductText'
import { ProductButton } from './ProductButton'
import { Link } from 'react-router-dom'

export const ProductCard = (props) => {
    const {col_size, name, price,rating, img,index,id,userid} = props
    const companyName = name.split(',')

    // Paging

    
    
  return (
    <div className={`cardHolder ${col_size}`}>
       <div className="card">
        <div className="prdData">
         
          <ProductImage prdImg={img}/>
          <ProductText price={price} companyName={companyName[0]} rating={rating}/>
          <Link to={`/product/${id}`}>Buy Now <i className='fa-solid fa-shopping-cart'></i></Link>
        
        </div>

        {/* prdData end here */}
       <ProductButton id={id} userid={userid}/>

       </div>
       {/* card end here */}

    </div>
    // cardholder end here
  )
}
