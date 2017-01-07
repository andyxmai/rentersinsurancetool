import React from 'react';
import './styles.css';

function PolicyDetail ({name, amount}) {
  return (
    <div className='policy-detail text-center'>
      <div className='coverage-name'>
        {name}
      </div>
      <div className='coverage-amount'>
        {amount}
      </div>
    </div>
  )
}

export default PolicyDetail;
