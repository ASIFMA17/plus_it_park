import React from 'react';
import './footer.css';
// IMPORT ICONS
import { SiTreehouse } from "react-icons/si";
import { ImFacebook } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
// import { Container } from 'react-bootstrap';

function Footer() {
    return (
        <div className='Footer'>
            <div className="secContainer container grid">

                <div className="logoDiv">
                    <div className="footerLogo">
                        <SiTreehouse className='logo-icon' />
                        <span className='logo-text'>PLUS IT</span>
                    </div>
                    <p>
                        Empowering businesses with technology.Building tomorrow's technology today.
                    </p>
                    <div className="socials flex">
                        <ImFacebook className='icon' />
                        <BsTwitterX className='icon' />
                        <AiFillInstagram className='icon' />
                    </div>
                </div>

                <div className="footerLinks">
                    <span className="linkTitle">information</span>
                    <li className='move-footer'>
                        <FiChevronRight className='rightArrow-footer' />
                        <Link to='/' className='footer-link' >Home</Link>
                    </li>
                    <li className='move-footer'>
                        <FiChevronRight className='rightArrow-footer' />
                        <Link to='/dashboard' className='footer-link' >Dashboard</Link>
                    </li>
                    <li className='move-footer'>
                        <FiChevronRight className='rightArrow-footer' />
                        <Link to='/profileUpdate' className='footer-link' href="/">Profile Update</Link>
                    </li>
                    <li className='move-footer'>
                        <FiChevronRight className='rightArrow-footer' />
                        <Link to='/protectedPage' className='footer-link' href="/">Protected Page</Link>
                    </li>

                </div>

                <div className="footerLinks">
                    <span className="linkTitle">Our Products</span>
                    <li className='move-footer'>
                        <FiChevronRight className='rightArrow-footer' />
                        <Link to='/shirt' className='footer-link' >Shirt</Link>
                    </li>
                    <li className='move-footer'>
                        <FiChevronRight className='rightArrow-footer' />
                        <Link to='/jacket' className='footer-link' >Jacket</Link>
                    </li>
                    <li className='move-footer'>
                        <FiChevronRight className='rightArrow-footer' />
                        <Link to='/technicalIteams' className='footer-link' >Technical Items</Link>
                    </li>
                    <li className='move-footer'>
                        <FiChevronRight className='rightArrow-footer' />
                        <Link to='/goldPlate' className='footer-link' >Gold Plate</Link>
                    </li>

                </div>

                <div className="footerLinks">
                    <span className="linkTitle">Contact Details</span>
                    <span className="phone">+0000000000</span>
                    <span className="email">plusit@gmail.com</span>
                    <span className="site">www.plusit.com</span>

                </div>

            </div>

        </div>


    )
}

export default Footer
