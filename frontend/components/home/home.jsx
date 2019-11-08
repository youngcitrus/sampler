import React from 'react'
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <GreetingContainer/>
        </div>

    );
}
    
    export default Home;