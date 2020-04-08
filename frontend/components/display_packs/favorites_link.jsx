import React from "react";
import { Link } from 'react-router-dom';

const FavoritesLink = () => (
    <Link to={`/favorites`} className='single-pack-home'>
        <img src="https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/cover-art/favorites-cover.png" className='pack-home-image'/><br/>
        <p className='pack-home-link'>My Favorites</p>
    </Link>
);

export default FavoritesLink;