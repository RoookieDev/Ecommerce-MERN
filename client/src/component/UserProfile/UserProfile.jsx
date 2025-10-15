import React, { useEffect, useState } from 'react'

// CSS link
import '../../assets/css/UserPageStyle.css'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import SideMenu from './SideMenu/SideMenu'
import axios from 'axios'
import SummaryBox from './Summary/SummaryBox'
import ContentBox from './ContentBox/ContentBox'

const UserProfile = () => {
    const id = useParams().id;
    const[name,setName] = useState();
    const[email,setEmail]= useState();
    const[mobile,setMobile]= useState();
    const[address,setAddress]= useState();

    
   
    // const [userdata,setUserdata] = useState({
    //   name:'name',
    //   email:'email',
    //   id:'id',
    //   address:'',
    //   mobile:''
    // });

    // get toek
    const token = localStorage.getItem('token')

    // get backend url
    const BACKEND = import.meta.env.VITE_BACKEND_URL;

    // navigate
    const navigate = useNavigate();

    
    // console.log(token)
    useEffect(()=>{
      axios.get(`${BACKEND}/api/userdata/userprofile/${id}`,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      .then(res=> {
        // setUserdata(prev=>{
        //   return{...prev, name:res.data.name, email:res.data.email, id:res.data._id}
        // })
        setName(res.data.name);
        setEmail(res.data.email);
        setMobile(res.data.mobile);
        setAddress(res.data.address);
        console.log(res.data.address)
        
      })
      },[]);

    
  return (
    <div className='userprofile'>
      <div className="row">
        
          <SideMenu name={name} email={email} />
          <ContentBox 
          name={name} email={email} mobile={mobile} address={address} 
          setName={setName} setEmail={setEmail} setAddress={setAddress} 
          setMobile={setMobile}/>
        {/* sideMenuBar */}
      </div>
      {/* row end here */}
    </div>
  )
}

export default UserProfile
