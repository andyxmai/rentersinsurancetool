import React, {Component} from 'react';
import Landing from '../../../landing/components/Landing/Landing'
import Reasons from '../../../landing/components/Reasons/Reasons'
import Carriers from '../../../landing/components/Carriers/Carriers'
import FindQuotes from '../../../landing/components/FindQuotes/FindQuotes'
import quotesDB from '../../../quotes_db.json'

class LandingContainer extends Component {
  constructor() {
    super()
    this.state = {
      zipcode: ''
    }
  }

  hasZipcodeInDB (zipcode) {
    const key = `${zipcode}-1`;
    if (key in quotesDB) {
      return true;
    }

    return false;
  }

  handleSubmitZipcode (e) {
    e.preventDefault();
    const { zipcode } = this.state;

    var eventProperties = {
      'zipcode': zipcode,
    };

    if (!this.hasZipcodeInDB(zipcode)) {
      alert("Oh no! We don't have your zipcode in our database. Email us and we'll send you a quote.");
      window.amplitude.getInstance().logEvent('landing_zipcode_not_in_database', eventProperties);

      return;
    }

    this.context.router.push({
      pathname: '/quotes',
      query: {
        zipcode,
      }
    })

    window.amplitude.getInstance().logEvent('landing_zipcode_submit', eventProperties);
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
        <FindQuotes
          onSubmitZipcode={(e) => this.handleSubmitZipcode(e)}
          onUpdateZipcdoe={(e) => this.handleUpdateZipcode(e)}
          zipcode={this.state.zipcode}
        />
      </div>
    )
  }
}

LandingContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default LandingContainer;
