import React from 'react';
import "./LeftContainer.scss";


const LeftContainer = () => {
    return (
        <div className='left-container'>
            <nav className='left-nav'>
                <div className='left-nav-item'>
                    <h5>NIFTY 50 <span>180000</span></h5>
                    <h5>BANKNIFTY <span>450000</span></h5>
                </div>
                <input
                    type="text"
                    placeholder='Eg: NIFTY 50,Tata Steel'
                    className='left-nav-input'
                />
            </nav>
            <ul className='left-main'>
                <li className='left-main-grp'>
                        <p>NIFTY 50</p>
                        <p>18000</p>      
                </li>
                <li className='left-main-grp'>
                        <p>INDIA VIX</p>
                        <p >12</p>         
                </li>
                <li className='left-main-grp'>          
                        <p>TATA STEEL</p>
                        <p>18000</p>
                </li>
            </ul>
        </div>
    )
}

export default LeftContainer