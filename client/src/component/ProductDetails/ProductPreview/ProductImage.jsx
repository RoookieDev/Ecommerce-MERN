import React from 'react'
import prd  from '../../../assets/images/png/headphone/jbl_1.png'
export const ProductImage = ({prdimg}) => {
  return (
   <div className='col-md-5 prdimg'>
        <img src={prdimg} alt="" width={'100%'}/>
    </div>
  )
}
