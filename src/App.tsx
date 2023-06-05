import React from 'react';
import "./App.css";
import LeftContainer from './containers/LeftContainer/LeftContainer';
import RightContainer from './containers/RightContainer/RightContainer';

const App = () => {
  return (
    <div className='App'>
      <LeftContainer />
      <RightContainer />
    </div>
  )
}

export default App