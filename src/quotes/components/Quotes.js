import React from 'react';
import './styles.css';
import Quote from './Quote'

function Quotes () {
  return (
    <div className='quotes'>
      <div className='header-block'>
        <h2>Your quotes</h2>
        <p className='subtitle light-gray'>We present the five lowest quotes. See bottom for plan details</p>
      </div>
      <div>
        <div className='lowest-quotes'>
          <h4>Lowest Quote</h4>
          <Quote />
        </div>
        <div className='more-quotes'>
          <h4>More quotes</h4>
          <Quote />
          <Quote />
          <Quote />
          <Quote />
        </div>
      </div>
    </div>
  )
}

export default Quotes;
