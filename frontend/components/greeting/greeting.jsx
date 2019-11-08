import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../footer'
import NavBar from '../navbar';

const Greeting = ({ user, logoutUser}) => {
    const splash = () =>(
      <div>
        <header>
          <NavBar/>
        </header>
        <div className='splash'>
          <section className='splash-top'>
            <h1>Discover your sound</h1>
            <p>Join over a million musicians using Sampler to find the highest quality samples, curated by today's leading artists.</p>
            <Link to='/signup' className='splash-signup-link'>Sign up for free</Link>
          </section>
          <div className='featured-in'></div>
            
          <div className='testimonials-container'>
            <h1>Testimonials</h1>
            <section className='testimonials'>
              <div className='testimonial-item'>
                <div className='testimonial-dean-image'></div>
                <p>I can always find what I’m looking for on Sampler, whether it’s the exact sound I want or just a bit of inspiration.</p>
                <a href='https://www.instagram.com/deantrbl/' target="_blank" className='testimonial-author'>- Dean</a>
              </div>
              <div className='testimonial-item'>
                <div className='testimonial-anderson-paak-image'></div>
                <p>The samples are endless and full of organic rich textures, featuring sounds that truly spark my creativity.</p>
                <a href='http://www.andersonpaak.com/' target="_blank" className='testimonial-author'>- Anderson Paak</a>
              </div> 
              <div className='testimonial-item'>
                <div className='testimonial-tokimonsta-image'></div>
                <p> Sampler makes my creative process so much faster, especially with sample packs created by my favorite artists.</p>
                <a href='https://tokimonsta.com/' target="_blank" className='testimonial-author'>- TOKiMONSTA</a>
              </div>
            </section>
          </div>
        </div> 
        <footer>
          <Footer/>
        </footer>
      </div>
    );

    const welcome = () => (
      <div>
        <header>
          <NavBar/>
        </header>
        <div className='welcome-page'>
          <div className='welcome-banner'>
            Welcome, {user.username}!<br/>
            <button onClick={logoutUser}>Logout</button>
          </div>    
        </div>
      </div>
    );

    return user ? welcome() : splash();
}
export default Greeting;

