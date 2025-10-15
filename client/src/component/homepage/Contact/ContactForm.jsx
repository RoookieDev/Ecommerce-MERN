import React, { useState } from 'react'
 // axios
import axios from 'axios';
import SocialButton from './SocialButton';


const ContactForm = ({setNotifyStyle,setTextMsg}) => {

  // loading
  const[isLoading,setIsLoading]=useState(false);
 

  // Input  data
  const[firtName,setFirstName]=useState("");
  const[lastName,setLastName]=useState("");
  const[mobileNo,setMobileNo]=useState("");
  const[emailAddress,setEmailAddress]=useState("");
  const[message,setMessage]=useState("");

  // Token Data
  const token = localStorage.getItem("token")

  // BACKEND API
  const URL = import.meta.env.VITE_BACKEND_URL;
  function contactFormHandler(e){
    e.preventDefault();
    if(firtName==="" || lastName==="" || mobileNo==="" || emailAddress===""||message===""){
        setTextMsg("All fields are required");
        setNotifyStyle({bottom:'10px', opacity:'1'})
    }
    else{
      setIsLoading(true)
      axios.post(`${URL}/api/user/contact`,{firtName,lastName,mobileNo,emailAddress,message},{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      .then(res=> {
        setIsLoading(false)

        if(res.data.msg=='1'){
          setTextMsg("Your Query has been send");
        setNotifyStyle({bottom:'10px', opacity:'1'})
        setFirstName("");
        setEmailAddress("")
        setLastName("")
        setMobileNo("")
        setMessage("")
        }
        console.log(res)
      })
      .catch(err=> {
        console.log(err)
        setIsLoading(false)
      })
    }

  }


  return (
    <div className='contactForm'>
        <form action="" onSubmit={contactFormHandler}>
           <section className='fieldHolder'>
             <div className='formData'>
                <label htmlFor="fname">First Name</label>
                <input type="text" 
                id='fname' 
                value={firtName}
                onChange={(e)=>setFirstName(e.target.value)}
                placeholder='Write First Name here'
                />
            </div>
             <div className='formData'>
                <label htmlFor="lname">Last Name</label>
                <input type="text" 
                id='lname' 
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                placeholder='Write Last name here'
                />
            </div>
           </section>
           {/* section End here */}

            <section className='fieldHolder'>
             <div className='formData'>
                <label htmlFor="mobile">Mobile No</label>
                <input type="text"
                 id='mobile' 
                 value={mobileNo}
                  onChange={(e)=>setMobileNo(e.target.value)}
                 placeholder='Enter your placeholder here'
                 />
            </div>
             <div className='formData'>
                <label htmlFor="email">Email Address</label>
                <input type="text" 
                id='email' 
                value={emailAddress}
                onChange={(e)=>setEmailAddress(e.target.value)}
                placeholder='Enter Your Email Address here'
                />
            </div>
           </section>
           {/* section end here */}

           <section className='fieldHolder'>
             <div className='formData'>
                <label htmlFor="msg">Give us your query</label>
                <textarea name=""
                 id="msg" 
                 value={message}
                 onChange={(e)=>setMessage(e.target.value)}
                 placeholder='Write any suggesstion, query or any type of information you want'
                 ></textarea>
            </div>
           </section>
            {/* section end here */}
            <SocialButton isLoading={isLoading}/>
          
        </form>
    </div>
  )
}

export default ContactForm
