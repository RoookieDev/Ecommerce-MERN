import React, { useState } from 'react'
import axios from 'axios'
export const ProductButton = ({userid,id}) => {
  // Loading data
  const [isLoading,setIsLoading] = useState(false)

  // get env variable
  const VITE_APP_API_URL = import.meta.env.VITE_BACKEND_URL



  // Button Style
  const [cartStyle,setCartStyle] = useState({
    background:'none',
    color:'#000',
    icon:'fa-solid fa-plus'
  })


  // GET TOKEN
  const tokenId = localStorage.getItem('token')

  function addToCart(e){
    const productId = id
    setIsLoading(true)
    axios.post(`${VITE_APP_API_URL}/api/cart/addProduct`,{productId, tokenId,userid},{
      headers:{
        Authorization:`Bearer ${tokenId}`
      }
    })
    .then(res=> {
      console.log(res.data)
      if(res.data.msg =='e' || res.data.msg =='a'){
        setCartStyle(prev=>{
          return{...prev, background:'#c7c7c7',color:'#fff', icon:'fa-solid fa-check'}
        })
         setIsLoading(false)
      }
       setIsLoading(false)
     
    })
    .catch(err=>{
      console.log(err)
      setIsLoading(false)
    })
  }

  const cartStyleCss = {
    background:cartStyle.background,
    color:cartStyle.color
  }
  

  return (
     <div className="btnBox">
      {
        isLoading?<button disabled><i className='fa-solid fa-circle-notch fa-spin fa-2x'></i></button>:<button value={id} onClick={addToCart} style={cartStyleCss}><i className={cartStyle.icon}></i></button>
      }
            
        </div>
  )
}
