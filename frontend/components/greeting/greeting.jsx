import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const Greeting = ({ user, logoutUser}) => {
    // const links = () => (
    //   <div className="login-signup">
    //     <Link to="/signup">Sign Up!</Link> <br/>
    //     <Link to="/login">Log In!</Link>
    //   </div>
    // );

    const splash = () =>(
      <div>
        <div className='splash-top'>
          <h1>Discover your sound</h1>
          <p>Join over a million musicians using Sampler to find the highest quality samples, curated by today's leading artists.</p>
          <Link to='/signup' className='splash-signup-link'>Sign up for free</Link>
        </div>
        <div className='featured-in'></div>
          
        <div className='testimonials-container'>
          <h1>Testimonials</h1>
          <div className='testimonials'>
            <div className='testimonial-dean'></div>
            <div className='testimonial-anderson-paak'></div>
            <div className='testimonial-tokimonsta'></div>
          </div>
        </div>
      </div>
    );

    const welcome = () => (
      <div>
        Welcome, {user.username}!<br/>
        <button onClick={logoutUser}>Logout</button>
      </div>
    );

    return user ? welcome() : splash();
}
export default Greeting;

