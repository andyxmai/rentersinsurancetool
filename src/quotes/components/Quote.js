import React from 'react';
import './styles.css';
import { Button } from 'react-bootstrap';

function Quote (props) {
  return (
    <div className='quote'>
      <div className='inner-quote'>
        <div>
          <img src={props.image} className='img-responsive carrier-avatar' alt='avatar' />
        </div>
        <div className="carrier-name">
          {props.name}
        </div>
        <div className="carrier-price">
          <div className='price'>
            <span className='amount'>${props.price}</span> / month
          </div>
          <div className='text-center'>
            <Button bsStyle="primary" href={props.link} target="_blank">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quote;
