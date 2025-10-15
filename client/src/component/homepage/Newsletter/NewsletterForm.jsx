import React from 'react'

const NewsletterForm = ({email}) => {
    console.log(email);
  return (
      <form action="" className='col-md-10'>
        <h2>Subscribe Newsletter</h2>
          <div className="formData">
              <input type="text" name="" id="" placeholder='Subscribe Newsletter' />
              <button>Subscribe <i className='fa-solid fa-bell'></i></button>
          </div>
          <p>Subscribe to get updates</p>
      </form>
  )
}

export default NewsletterForm
