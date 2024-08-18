import React from 'react'
import './Navbar.css'
import navProfile from '../../assets/nav-profile.png'

const Navbar = () => {
    return(
        <div className='navbar'>
            <p>SHOPSY
                admin panel
                
            </p>
            
            <img src={navProfile}alt="" className="nav-profile" />

        </div>
    )
}
export default Navbar