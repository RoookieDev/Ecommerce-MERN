import React from 'react'
import CardBx from './CardBx'

const SummaryCard = () => {
    const size = 'col-md-4'
  return (
    <div className='cardbx'>
      <div className="row" >
        <CardBx size={size} title={'Purchase'} icon={'fa-shopping-bag'} value={'12000'}/>
        <CardBx size={size} title={'Wishlist'} icon={'fa-heart'} value={'15000'}/>
        <CardBx size={size} title={'Return Order'} icon={'fa-share'} value={'12'}/>
      </div>
    </div>
  )
}

export default SummaryCard
