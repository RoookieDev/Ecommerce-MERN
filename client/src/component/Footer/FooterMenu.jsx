import React from 'react'
import FooterMenuList from './FooterMenuList'
import {BrowserRouter, Routes, Route, useParams, Link} from 'react-router-dom'


const FooterMenu = () => {
    return (
        <div className="footerMenu">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 logo">
                        <h1>Shop<span>Mart</span></h1>
                        <h5>Buy what you like</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum repellendus minus atque assumenda, dolorem eum.
                        </p>   
                    </div>
                    {/* logoHere */}
                    <div className='menuFooter col-md-2'>
                        <ul>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/'}>Service</Link></li>
                            <li><Link to={'/'}>About</Link></li>
                            <li><Link to={'/'}>Contact</Link></li>
                        </ul>
                    </div>
                    {/* menuFooter end here */}
                    
                    <div className='menuFooter col-md-2'>
                        <ul>
                            <li><Link to={'/'}>Dashboard</Link></li>
                            <li><Link to={'/'}>Cartlist</Link></li>
                            <li><Link to={'/'}>Orderlist</Link></li>
                            <li><Link to={'/'}>Profile</Link></li>
                        </ul>
                    </div>
                    {/* menuFooter end here */}

                      <div className='menuFooter col-md-2'>
                        <ul>
                            <li><Link to={'/'}>Facebook</Link></li>
                            <li><Link to={'/'}>Instagram</Link></li>
                            <li><Link to={'/'}>Twitter</Link></li>
                            <li><Link to={'/'}>Linkedin</Link></li>
                        </ul>
                    </div>
                    {/* menuFooter end here */}
                    

                </div>
                {/* row end here */}
            </div>
            {/* container end here */}
        </div>
        // MenuFooter end here
    )
}

export default FooterMenu
