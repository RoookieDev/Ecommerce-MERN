import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// CSS LINK
import '../../../assets/css/ProductPreview.css'

import { Navbar } from '../../homepage/navbar/Navbar';
import { ProductImage } from './ProductImage';
import { ProductText } from './ProductText';
import { PriceBox } from './PriceBox';


export const ProductDetails = ({products}) => {
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  
  // get token from localstorage
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  useEffect(()=>{
    axios.post("http://localhost:3001/api/JWTToken", {token},{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    .then(res=> {
      let name = res.data.name.split(' ')
      setUserName(name[0])
      setUserEmail(res.data.email)
    })
    .catch(err=> {
      if(err.response.data.msg=='Invalid'){
        navigate('/login')
      }
    })
  },[])

    const id = useParams();
    const data = products.filter(prd => prd.id==id.id);

    // SET QUANTITY
    const[quantity,setQuantity] = useState(1);
    if(quantity<1){
      setQuantity(1)
    }
  return (
    <div className='productDetails'>
        <Navbar active_user={userName}/>
       <div className="productPreview container-fluid">
         <div className="row justify-content-center gutter-5">
          {
          data.map(product=>{
            return(
              <>
            <ProductImage key={product.id} prdimg={product.image}/>
            <ProductText  text={product.name} price={product.actual_price} disprice={product.discount_price} rating={product.ratings} totalrating={product.no_of_ratings} setQuantity={setQuantity} quantity={quantity}/>
            <PriceBox token={token} userEmail={userEmail} prdid={id.id} price={product.actual_price} disprice={product.discount_price} quantity={quantity}/>
            </>
          )
         
          })
        }
        
         </div>
       </div>
       
    </div>
  )
}
