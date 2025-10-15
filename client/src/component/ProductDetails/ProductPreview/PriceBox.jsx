import axios from 'axios'
import React, { useState } from 'react'

export const PriceBox = ({price,disprice, quantity,prdid,userEmail,token}) => {
    var priceNew = price.replace(",","")*quantity
    var dispriceNew = disprice.replace(",","")*quantity
    var percent = (dispriceNew/priceNew)*100
    const actualPrice = priceNew-dispriceNew
    const tax = Math.floor((18/100)*actualPrice)

    // Loader here
    const [isloading,setIsLoading] = useState(false)
    const [loadingStyle,setLoadingStyle] = useState({
        cursor:'not-allowed',
        opacity:'0.7',
        backgroundColor:'rgba(0,0,0,0.5)'
    })

    
   

    // BACKEND API CALL
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
    const act = actualPrice+tax
    function buyHandler(){
        if( token==null || token=="" || token==undefined){
            alert("Please Login First")
        }
        else{
            setIsLoading(true)
            axios.post(`${BACKEND_URL}/api/buyNow`, {productId:prdid, userEmail:userEmail,price:priceNew,totalPrice:act,tax:tax,disprice:dispriceNew,quantity:quantity},{
                headers:{
                Authorization:`Bearer ${token}`
            }
            })
            .then(res=>{
                if(res.data.msg=="Purchased"){
                    alert("Product Purchased Successfully")
                setIsLoading(false)
                }
                console.log(res)
                setIsLoading(false)
                
            })
            .catch(err=> alert("Error! Try Again"))
            
            }
    
    }
    
  
  return (
    <div className='priceBox col-md-3'>
        <ul>
            <li>
                <b>Actual Price</b> 
                <span>&#8377; {price}</span>
            </li>
            <li style={{color:'green'}}>
                <b>Get off</b> 
                <span>{Math.floor(percent)}%</span>
            </li>
             <li style={{color:'green'}}>
                <b>Discount Price</b> 
                <span > - &#8377; {dispriceNew}</span>
            </li>
            <li style={{color:'crimson'}}>
                <b>GST Tax</b> 
                <span >+ &#8377; {tax}</span>
            </li>
            <li>
                <b>Total</b> 
                <span>&#8377; {act}</span>
            </li>
        </ul>
        {
            isloading?<button disabled onClick={buyHandler} style={loadingStyle}>Loading <i className='fa-solid fa-shopping-cart'></i></button>:<button onClick={buyHandler}>Buy Now <i className='fa-solid fa-shopping-cart'></i></button>
        }
        
    </div>
  )
}
