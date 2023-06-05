import React,{useState} from 'react';
import './RightContainer.scss';
import { MdOutlineCandlestickChart } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import DashBorad from '../../Pages/DashBoard/DashBorad';
import Orders from '../../Pages/Orders/Orders';
import Holdings from '../../Pages/Holdings/Holdings';
import Position from '../../Pages/Position/Position';
import { AiOutlineBell } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import NotificationOverlay from '../../components/NotificationOverlay/NotificationOverlay';

const RightContainer = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState('dashboard');
    return (
        <div className='right-container'>
            <nav className='right-nav'>
                <MdOutlineCandlestickChart size={30} />
                <ul className='right-nav-list'>
                    <li className=' nav-items active' onClick={() => navigate('/dashboard')}>
                        <p >Dashboard</p>
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
                    <li className='nav-items notification-bell'>
                        <AiOutlineBell size={20} />
                        <NotificationOverlay />
                    </li>
                    <li className='nav-items'>
                        <BiUserCircle size={20} />
                        <p>KM24535</p>
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