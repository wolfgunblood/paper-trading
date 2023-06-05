import React from 'react';
import './RightContainer.scss';
import { MdOutlineCandlestickChart } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import DashBorad from '../../Pages/DashBoard/DashBorad';
import Orders from '../../Pages/Orders/Orders';
import Holdings from '../../Pages/Holdings/Holdings';
import Position from '../../Pages/Position/Position';

const RightContainer = () => {
    const navigate = useNavigate();
    return (
        <div className='right-container'>
            <nav className='right-nav'>
                <MdOutlineCandlestickChart size={30} />
                <ul className='right-nav-list'>
                    <li className=' nav-items active' onClick={() => navigate('/dashboard')}>
                        <p>Dashboard</p>
                    </li>
                    <li className=' nav-items' onClick={() => navigate('/orders')}>
                        <p>Orders</p>
                    </li>
                    <li className=' nav-items' onClick={() => navigate('/holdings')}>
                        <p>Holdings</p>
                    </li>
                    <li className=' nav-items' onClick={() => navigate('/position')}>
                        <p>Position</p>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path='/dashboard' element={<DashBorad />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/holdings' element={<Holdings />} />
                <Route path='/position' element={<Position />} />

            </Routes>
        </div>
    )
}

export default RightContainer