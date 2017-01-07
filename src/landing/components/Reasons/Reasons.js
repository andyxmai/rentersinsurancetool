import React from 'react';
import './styles.css';
import ReasonContainer from './ReasonContainer'

function Reasons () {
  return (
    <div className='container section'>
      <div className='header-block'>
        <h1 className='title dark-gray'>How we help you</h1>
        <h4 className='subtitle light-gray'>We do the legwork of compiling all info in one place.</h4>
      </div>
      <br />
      <div className='reasons'>
        <ReasonContainer
          title='Instant Quotes'
          body='Get quotes from multiple insurance companies and save time from filling out redundant forms.'
        />
        <ReasonContainer
          title='Protect your Privacy'
          body='Avoid getting out your contact info to insurance agents and have them spam you.'
        />
        <ReasonContainer
          title='Confident Choice'
          body='Key concepts are explained so you know you are getting the right renters insurance policy.'
        />
      </div>
    </div>
  )
}

export default Reasons;
