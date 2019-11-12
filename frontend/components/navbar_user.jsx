import React from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/session_actions";

const NavBarUser = () => (
    <div className='nav-bar'>
        <div className='left-nav-div'>
            <span><Link to='/'><img src="Sampler_Icon_Main_2.png" id='nav-logo'/></Link></span>
            <Link to='/' className='nav-home-link'>
                sampler
            </Link>
        </div> 
        <div className='right-nav-div'>
            <p className='nav-login' id='nav-logout' onClick={ ()=> dispatch(logoutUser()) }>
                Logout
            </p>
        </div>
    </div>
);

export default NavBarUser;