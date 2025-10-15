import React, { useEffect, useState } from 'react'
import '../../assets/css/homepageStyle.css'
import { Navbar } from './navbar/Navbar'
import { ContentPage } from './ContentPage/ContentPage'
import { Categories } from './Categorypage/Categories'
import { Posterpage } from './PosterPage/Posterpage'
import { ProductPage } from './ProductPage/ProductPage'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { SliderPage } from './Slider/SliderPage'
import { ServicePage } from './service/ServicePage'
import { GridLayout } from './GridLayout/GridLayout'
import { TestimonialPage } from './Testimonial/TestimonialPage'
import AboutPage from './About/AboutPage'
import ContactPage from './Contact/ContactPage'
import Newsletter from './Newsletter/Newsletter'
import Footer from '../Footer/Footer'
export const Homepage = () => {

  const [userName, setUserName] = useState();
  const [email,setEmail] = useState();
  const [id,setId] = useState();

   // ENV FILE
  const VITE_APP_API_URL = import.meta.env.VITE_BACKEND_URL


  // get token from localstorage
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  useEffect(()=>{
    axios.post(`${VITE_APP_API_URL}/api/JWTToken`, {token},{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    .then(res=> {
      let name = res.data.name.split(' ')
      setUserName(name[0])
      setEmail(res.data.email)
      setId(res.data.id)

    })
    .catch(err=> {
     
      if(err.response.data.msg=='Invalid'){
        navigate('/login')
      }
    })
  },[]);  

  return (
    <div className='homepage'>
      <Navbar active_user = {userName} id={id} />
      <ContentPage/>
      <Categories/>
      <Posterpage/>
      <ProductPage id={id}/>
      <SliderPage/>
      <GridLayout/>
      <ServicePage/>
      <TestimonialPage/>
      <AboutPage/>
      
      <ContactPage token={token}/>

      <Newsletter email={email}/>
      <Footer/>
    </div>
  )
}
