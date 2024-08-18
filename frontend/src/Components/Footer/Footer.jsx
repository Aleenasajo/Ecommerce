import  React from 'react'
import './Footer.css'
import instagram_icon from'../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
    return(
        <div className='footer'>
            <div className='footer-logo'>
               
                <p>SHOPSY</p>

            </div>
            <ul className="footer-links">
                <li>company</li>
                <li>offices</li>
                <li>about</li>
                <li>contact</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icon-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copy">
                <hr/>
                <p>
                    copyright @ 2024 - All Right Reserved
                </p>
            </div>

        </div>
    )
}
export default Footer