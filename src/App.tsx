import React from 'react';
import "./App.css";
import LeftContainer from './components/LeftContainer/LeftContainer';
import RightContainer from './components/RightContainer/RightContainer';

const App = () => {
  return (
    <div className='App'>
      <LeftContainer />
      <RightContainer />
    </div>
  )
}

export default App