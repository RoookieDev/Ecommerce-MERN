import React from 'react'

// CSS file
import '../../../assets/css/AboutPageStyle.css'
const AboutPage = () => {
  return (
    <div className='aboutpage'>
      <div className="container">
       <div className="row justify-content-center">
        <div className="col-md-10 aboutBx">
             <h5>What We Do?</h5>
        <h1>About Us</h1>
        <p>
        At ShopAdda, we understand that technology is an integral part of modern living. 
        As a leading e-commerce platform dedicated exclusively to electronic products, 
        we provide a vast selection tailored to meet the diverse needs of our customers. 
        Our mission is to deliver unparalleled value and convenience, ensuring that you can access the latest gadgets, accessories, and home electronics with just a few clicks.
        <br />
        <br />
        Our user-friendly interface is designed to enhance your shopping experience, making it easier than ever to explore our extensive inventory. 
        From cutting-edge smartphones and high-performance laptops to state-of-the-art audio equipment and smart home devices, 
        ShopAdda is your one-stop-shop for all things electronic. We pride ourselves on offering competitive pricing, comprehensive product descriptions, and customer reviews to assist you in making informed purchasing decisions.
        </p>
        </div>
        {/* Aboutbx end here */}

        <div className="col-md-10 connectBx">
            <ul>
                <li><i className='fa-solid fa-phone'></i> <span>+91 12345 67890</span></li>
                <li><i className='fa-solid fa-location-dot'></i> <span>Mumbai, Maharashtra</span></li>
                <li><i className='fa-solid fa-envelope'></i> <span>info@shopadda.com</span></li>
            </ul>
        </div>
        {/* connectBx en dhere */}
       </div>
       {/* row end here */}
      </div>
      {/* container end here */}
    </div>
  )
}

export default AboutPage
