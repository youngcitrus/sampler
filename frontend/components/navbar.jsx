import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
    <div className='nav-bar'>
        <div className='left-nav-div'>
            <span><Link to='/'><img src="Sampler_Icon_Main_2.png" id='nav-logo'/></Link></span>
            <Link to='/' className='nav-home-link'>
                sampler
            </Link>
        </div> 
        <div className='right-nav-div'>
            <Link to='/login' className='nav-login'>
                Log in
            </Link>
            <span className='nav-signup-span'><Link to='/signup' className='nav-signup'>
                Sign up
            </Link></span> 
        </div>
    </div>
);

export default NavBar;