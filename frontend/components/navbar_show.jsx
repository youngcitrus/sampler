import React from "react";
import { Link } from "react-router-dom";

class NavBarShow extends React.Component{

    render(){
        
        const NavLoggedOut = () => {
            return (
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
            )}
            
            const NavLoggedIn = () => (
                <div className='nav-bar'>
                    <div className='left-nav-div'>
                        <span><Link to='/'><img src="Sampler_Icon_Main_2.png" id='nav-logo'/></Link></span>
                        <Link to='/' className='nav-home-link'>
                            sampler
                        </Link>
                    </div> 
                    <div className='right-nav-div'>
                        <p className='nav-login' id='nav-logout' onClick={ ()=> {
                                                                                this.props.logoutUser();
                                                                                setTimeout(this.props.redirect, 100);
                                                                                }
                                                                        }>
                            Logout
                        </p>
                    </div>
                </div>
            );
            return this.props.user ? NavLoggedIn() : NavLoggedOut();
    }


    
};

export default NavBarShow;