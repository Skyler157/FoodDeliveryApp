import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <p className='logo'>Bites & Bliss.</p>
                <p>At Bites&Bliss, we are dedicated to serving up delicious meals made with the freshest ingredients and a dash of love. Whether you're here for a casual bite or a special celebration, we strive to create an unforgettable dining experience. Thank you for choosing us – we’re thrilled to share the joy of great food with you!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+254796886037</li>
                    <li>Bites&Bliss@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2025 &copy; Bites&Bliss.com - All Rights Reserved. </p>
    </div>
  )
}

export default Footer