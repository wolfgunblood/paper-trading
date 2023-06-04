import React from 'react';
import './RightContainer.scss';
import { MdOutlineCandlestickChart } from "react-icons/md";

const RightContainer = () => {
  return (
    <div className='right-container'>
        <nav className='right-nav'>
            <MdOutlineCandlestickChart size={30} />
            <ul className='right-nav-list'>
                <li className=' nav-items active'>
                    <p>Dashboard</p>
                </li>
                <li className=' nav-items'>
                    <p>Orders</p>
                </li>
                <li className=' nav-items'>
                    <p>Holdings</p>
                </li>
                <li className=' nav-items'>
                    <p>Position</p>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default RightContainer