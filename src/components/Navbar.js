import React, { useState } from "react";
import './Navbar.css';
import contactImg from '../../src/assets/email-icon.png';
import {Link} from 'react-scroll';
import menu from '../../src/assets/menu.png';

const Navbar = () =>{
    //const [showMenu , setShowMenu] =useState(false);
    return(
       <nav className="navbar">
        <h1>My Portfolio</h1>            
            
            <div className="desktopMenu"> 
                <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to='skill' spy={true} smooth={true} offset={-50} duration={500}  className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to='works' spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItem">Portfolio</Link>
                <Link activeClass="active" to='clients' spy={true} smooth={true} offset={-50} duration={500}  className="desktopMenuListItem">Tools</Link>
            </div>

            <button className="desktopMenuBtn" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}>
                <img className="desktopMenuImg" src={contactImg}/> contact me
            </button>

             
             
       </nav>
    )
}

export default Navbar