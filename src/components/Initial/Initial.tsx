import React from 'react';
import "./Initial .scss";
import { SlAnchor } from "react-icons/sl";

const Initial = () => {
    return (
        <div className='initial-container'>
            <SlAnchor size={100} />
            <p>You dont have any Holding Yet</p>
            <button className='get-started-btn'>Get Started</button>
        </div>
    )
}

export default Initial