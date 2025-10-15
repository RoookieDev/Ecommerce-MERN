import React from 'react'
import {BrowserRouter, Routes, Route, useParams, Link} from 'react-router-dom'

const SignPageFooter = () => {
  return (
    <section className='containers col-md-8'>
      <div className="textBx">
        <h4>Get Access</h4>
        <p>
            Get full access of your account by simply login.
        </p>
      </div>
      <div className='btnBx'>
        <Link to={'/register'}>Register</Link>
        <Link to={'/login'}>Login</Link>
        
      </div>
    </section>
  )
}

export default SignPageFooter
