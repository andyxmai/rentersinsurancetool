import React from 'react';
import './styles.css';
import farmers from './images/farmers.jpg';
import { Button } from 'react-bootstrap';

function Quote () {
  return (
    <div className='quote dark-border'>
      <div className='inner-quote'>
        <div>
          <img src={farmers} className='img-responsive carrier-avatar' alt='avatar' />
        </div>
        <div className="carrier-name">
          Farmers Insurance
        </div>
        <div className="carrier-price">
          <div className='price'>
            <span className='amount'>$10.83</span> / month
          </div>
          <div className='text-center'>
            <Button bsStyle="primary">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quote;
