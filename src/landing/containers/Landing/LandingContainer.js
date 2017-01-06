import React, { Component } from 'react';
import Landing from '../../../landing/components/Landing/Landing'
import Reasons from '../../../landing/components/Reasons/Reasons'
import Carriers from '../../../landing/components/Carriers/Carriers'
import FindQuotes from '../../../landing/components/FindQuotes/FindQuotes'

class LandingContainer extends Component {
  render () {
    return (
      <div className='text-center'>
        <Landing />
        <Reasons />
        <Carriers />
        <FindQuotes />
      </div>
    )
  }
}

export default LandingContainer;
