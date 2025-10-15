import React from 'react'

const InputField = ({title, value, setValue,inputtype}) => {
  
  return (
    <div className='formData'>
        <label className=''>{title}</label>
        <input 
        type="text"
        readOnly={inputtype}
        value={value} 
        onChange={e=> setValue(e.target.value)}
        />
    </div>
  )
}

export default InputField
