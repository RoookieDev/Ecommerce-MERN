import React from 'react'
import { Link } from 'react-router-dom'

const MenuBox = () => {
  return (
    <div className='menuBox'>
        <ul>
            <li>
                <Link><span>Home</span> <i className='fa-solid fa-home'></i></Link>
            </li>
             <li>
                <button><span>Order list</span> <i className='fa-solid fa-list'></i></button>
            </li>
             <li>
                <button><span>Cart list</span> <i className='fa-solid fa-shopping-cart'></i></button>
            </li>
             <li>
                <button><span>User Details</span> <i className='fa-solid fa-user-circle'></i></button>
            </li>
        </ul>
    </div>
  )
}

export default MenuBox
