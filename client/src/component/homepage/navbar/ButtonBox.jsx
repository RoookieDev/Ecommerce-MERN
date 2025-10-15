import React from 'react'
import { Link } from 'react-router-dom'

export const ButtonBox = ({active_user,id}) => {
  
  return (
    <div className='buttonBox col-md-3'>
        <button><i className='fa-solid fa-shopping-cart'></i></button>
        <button><i className='fa-solid fa-sign-out'></i></button>
        {/* <button><i className='fa-solid fa-user'></i> {active_user}</button> */}
        <Link to={`/profile/${id}`}>{active_user}</Link>
    </div>
  )
}
