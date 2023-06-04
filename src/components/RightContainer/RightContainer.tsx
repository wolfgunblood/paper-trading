import React from 'react';
import './RightContainer.scss';

const RightContainer = () => {
  return (
    <div className='right-container'>
        <nav className='right-nav'>
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