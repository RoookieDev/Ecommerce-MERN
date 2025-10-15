import React from 'react'
import SummaryBox from '../Summary/SummaryBox'
import DetailsForm from './Details/DetailsForm'

const ContentBox = ({name,email,mobile,address,setName,setEmail,setMobile,setAddress}) => {
  return (
    <div className='col-md-7 contentBx'>
      <SummaryBox/>
      <DetailsForm name={name} email={email} 
      setName={setName} setEmail={setEmail}
      address={address} setAddress={setAddress}
      mobile={mobile} setMobile={setMobile} 
      />
    </div>
  )
}

export default ContentBox
