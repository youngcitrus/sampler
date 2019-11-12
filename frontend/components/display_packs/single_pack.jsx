import React from "react";
import { Link } from 'react-router-dom';

const SinglePack = ({pack}) => (
    <div>
        <Link to={`/packs/${pack.id}`}>{pack.name}</Link>
    </div>
);

export default SinglePack;