import React from "react";
import { Link } from 'react-router-dom';

const SinglePack = ({pack}) => (
    <Link to={`/packs/${pack.id}`} className='single-pack-home'>
        <img src={pack.fileUrls[0]} className='pack-home-image'/><br/>
        <p className='pack-home-link'>{pack.name}</p>
    </Link>
);

export default SinglePack;