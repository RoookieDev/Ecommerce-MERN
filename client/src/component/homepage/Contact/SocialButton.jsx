import React from 'react'

const SocialButton = ({isLoading}) => {
  return (
      <section className='btnBx'>
        {isLoading ? <button disabled>Submmiting.....</button> :<button>Submit Now <i className='fa-solid fa-arrow-right-long'></i></button>}
          
          <a href=""><i className='fa-brands fa-facebook-f'></i></a>
          <a href=""><i className='fa-brands fa-instagram'></i></a>
          <a href=""><i className='fa-brands fa-twitter'></i></a>
      </section>
  )
}

export default SocialButton
