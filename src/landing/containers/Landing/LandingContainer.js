import React, {Component} from 'react';
import Landing from '../../../landing/components/Landing/Landing'
import Reasons from '../../../landing/components/Reasons/Reasons'
import Carriers from '../../../landing/components/Carriers/Carriers'
import FindQuotes from '../../../landing/components/FindQuotes/FindQuotes'

class LandingContainer extends Component {
  constructor() {
    super()
    this.state = {
      zipcode: ''
    }
  }

  handleSubmitZipcode (e) {
    e.preventDefault();
    const { zipcode } = this.state;
    this.context.router.push({
      pathname: '/quotes',
      query: {
        zipcode,
      }
    })
  }

  handleUpdateZipcode (e) {
    this.setState({
      zipcode: e.target.value
    });
  }

  render () {
    return (
      <div className='text-center'>
        <Landing
          onSubmitZipcode={(e) => this.handleSubmitZipcode(e)}
          onUpdateZipcdoe={(e) => this.handleUpdateZipcode(e)}
          zipcode={this.state.zipcode}
        />
        <Reasons />
        <Carriers />
        <FindQuotes />
      </div>
    )
  }
}

LandingContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default LandingContainer;
