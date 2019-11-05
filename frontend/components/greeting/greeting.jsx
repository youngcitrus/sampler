import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const Greeting = ({ user, logoutUser}) => {
    const links = () => (
      <div className="login-signup">
        <Link to="/signup">Sign Up!</Link> <br/>
        <Link to="/login">Log In!</Link>
      </div>
    );

    const welcome = () => (
      <div>
        Welcome, {user.username}!<br/>
        <button onClick={logoutUser}>Logout</button>
      </div>
    )

    return user ? welcome() : links();
}
export default Greeting;

