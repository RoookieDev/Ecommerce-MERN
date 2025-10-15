import React from 'react'

const CardBx = ({ size, title, icon, value }) => {
  return (
    <div className={`${size} cardHolder`}>
      <div className="card">
        <i className={`fa-solid ${icon}  fa-2x`}></i>
        <div className="textBx">
          <h1>{value}</h1>
          <h4>{title}</h4>
        </div>
      </div>
    </div>
  )
}

export default CardBx
