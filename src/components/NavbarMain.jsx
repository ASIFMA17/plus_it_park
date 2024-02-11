import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
// IMPORT IMAGE
import Image1 from '../images/nav-1.png';
// IMPORT ICONS
import { SiTreehouse } from "react-icons/si";
import { PiDotsNineBold } from "react-icons/pi";
import { AiFillCloseCircle } from "react-icons/ai";

function NavbarMain() {

    const [active, setActive] = useState('meanu')

    // Function to toggile navBar
    const showNavbar = () => {
        setActive('meanu activeMeanu')
    }

    // Function to remove navBar
    const removeNavbar = () => {
        setActive('meanu')
    }

    return (
        <div className='navbar-second'>
            <Container>
                <div className='navbar-second-content'>
                    <div className='logo-Div'>
                        <SiTreehouse className='logo-nav' />
                        <span className='nav-Logo'>PLUS IT </span>
                    </div>
                    <div className={active}>
                        <ul className='nav-Links'>
                            <Link to='/' className='nav-link'>Home</Link>
                            <Link to='/dashboard' className='nav-link'>Dashboard</Link>
                            {/* <Link to='/protectedPage' className='nav-link'>Protected Page</Link> */}
                            <Link to='/signUp' className='nav-link nav-link-sign'>Sign Up</Link>
                            <Link to='/login' className='nav-link'>Login</Link>
                        </ul>
                        {/* icon to close navbar on small devices */}
                        <AiFillCloseCircle className='closeIcon img-nav' onClick={removeNavbar} />
                    </div>
                    <div className='inputDiv-nav'>
                        <input type="text" placeholder='What are you looking for?' />
                        <img src={Image1} alt="noImage" className='img-nav' />
                    </div>
                    <div className='meanuIcon-Div'>
                        <PiDotsNineBold className='meanuIcon img-nav' onClick={showNavbar} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default NavbarMain
