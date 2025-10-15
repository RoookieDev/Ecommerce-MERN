import React, { useEffect } from 'react'
// CSS Import
import '../../../../assets/css/DetailsStyle.css'

import { useParams } from 'react-router-dom'
import { useState } from 'react'
import InputField from './InputField'
import HeaderBox from './HeaderBox'
import axios from 'axios'



const DetailsForm = ({name,email,mobile,address,setName,setEmail,setMobile,setAddress}) => {
  // BACKEND URL
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const userId = useParams().id;
 
  // readonly
  const [inputtype,setInputType] = useState('readOnly');

  const token = localStorage.getItem('token')


  function detailsFormHandler(e){
    const BACKEND = import.meta.env.BACKEND_URL;
    e.preventDefault()
    if(mobile===""||address===""){
      alert('empty')
    }
    else{
      axios.post(`${BACKEND_URL}/api/userdata/UpdateDetails/${userId}`, {name,email,mobile,address,userId},{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      .then(res=>{
        console.log(res)
        alert(res.data.msg)
      })
      .catch(err=> console.log(err))
    }
  }

  

  useEffect(()=>{
  
},[])

  return (
    <div className='detailsform'>
      <HeaderBox setInputType={setInputType} inputtype={inputtype} />
        <form action="" onSubmit={detailsFormHandler}>
              <div className="inputData">
                  <InputField title={'Full Name:'} value={name} inputtype={inputtype} setValue={setName}/>
                  
              </div>
              <div className="inputData">
                  <InputField title={'Email Address:'} value={email} inputtype={inputtype} setValue={setEmail}/>
                  <InputField title={'Mobile No.:'} value={mobile} inputtype={inputtype} setValue={setMobile}/>
              </div>
              <div className="inputData">
              <div className="formData">
                  <label htmlFor="">Shipping Address</label>
                  <textarea 
                  name="" 
                  id=""
                  onChange={e=> setAddress(e.target.value)} 
                  readOnly={inputtype} value={address}></textarea>
              </div>
              </div>
              <button>Update Now <i className='fa-solid fa-arrow-right-long'></i></button>
        </form>


    </div>
  )
}

export default DetailsForm
