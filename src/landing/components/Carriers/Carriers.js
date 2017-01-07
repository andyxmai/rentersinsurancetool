import React from 'react';
import './styles.css';
import statefarm from './statefarm.jpg';
import geico from './geico.jpg';
import progressive from './progressive.png';
import allstate from './allstate.png';

function Carriers () {
  return (
    <div className='container section'>
      <div className='header-block'>
        <h1 className='title dark-gray'>Top insurance companies</h1>
        <h4 className='subtitle light-gray'>All the insurers we show are J.D. Power rated.</h4>
        <h4 className='subtitle light-gray'>Below are a few that we research.</h4>
      </div>
      <div className='carrier-images'>
        <img src={statefarm} className="img-responsive" alt="StateFarm" />
        <img src={allstate} className="img-responsive" alt="Allstate" />
        <img src={geico} className="img-responsive" alt="GEICO" />
        <img src={progressive} className="img-responsive" alt="Progressive" />
      </div>
    </div>
  )
}

export default Carriers;
