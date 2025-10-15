import { useState } from 'react'
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import { Register } from './component/sign/register'
import './assets/css/MainStyle.css'
import { Login } from './component/sign/login'
import { Homepage } from './component/homepage/Homepage'
import ProductData from './component/ProductDetails/ProductData'
import UserProfile from './component/UserProfile/UserProfile'


function App() {

  

  
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/product/:id' element={<ProductData/>}/>
      <Route path='/profile/:id' element={<UserProfile/>}></Route>
    </Routes>
   </BrowserRouter>
  
)
}

export default App
