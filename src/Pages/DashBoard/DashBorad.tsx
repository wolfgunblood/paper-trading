import React from 'react';
import "./DashBorad.scss"

const DashBorad = () => {
  return (
    <div className='dashboard-container'>
      <h3 className='dashboard-name' >Hi , Jalaj</h3>
      <div className='dashboard-content'>
        <div className='equity-container'>
          <h5 className='header-name'>Equity</h5>
          <div className='margin-container'>
            <div className='margin-container-1'>
              <h2>7L</h2>
              <p>Margin Available</p>
            </div>
            <div className='margin-container-2'>
              <p>Margin Used <span>0</span></p>
              <p>Opening Balance <span>6.5L</span></p>
            </div>
          </div>
        </div>
        <div className='commodity-container'>
          <h5 className='header-name'>Commodity</h5>
          <div className='margin-container'>
            <div className='margin-container-1'>
              <h2>0</h2>
              <p>Margin Available</p>
            </div>
            <div className='margin-container-2'>
              <p>Margin Used <span>0</span></p>
              <p>Opening Balance <span>0</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashBorad