import React from 'react';
import loader from "../assests/loader.gif";
import '../styles/Loader.css';

const Loader = () => {
  return (
    <div className='loader-container'>
      <img className='loader-image' src={loader} alt="Loading.." />
    </div>
  );
}

export default Loader;

