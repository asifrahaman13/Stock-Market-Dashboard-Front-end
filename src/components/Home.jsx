import React from 'react';
import "./Home.css"
import Left from './Left/Left';
import Right from './Right/Right';

const Home = () => {
  return (
    <>
    <div className="main-div">
      <div className="main-left">
          <Left/>
      </div>
      <div className="main-right">
        <Right/>
      </div>
    </div>
    </>
  )
}

export default Home