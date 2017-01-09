import React, {Component} from 'react';
import QuotesForm from '../components/QuotesForm';
import Quotes from '../components/Quotes';
import farmers from '../components/images/farmers.jpg';

class QuotesContainer extends Component {
  constructor () {
    super()
    this.state = {
      zipcode: '',
      buildingType: 'apartment',
      numUnits: '1',
      hasPets: true,
      email: '',
      quotes: []
    }
  }

  componentDidMount () {
    const { query } = this.props.location;
    this.setState({
      zipcode: query.zipcode
    })
  }

  handleUpdateBuildingType (e) {
    this.setState({
      buildingType: e.target.value
    });
  }

  handleUpdateNumUnits (e) {
    this.setState({
      numUnits: e.target.value
    });
  }

  handleUpdateHasPets (e) {
    this.setState({
      hasPets: !this.state.hasPets
    })
  }

  handleUpdateEmail (e) {
    this.setState({
      email: e.target.value
    })
  }

  handleSubmitQuote (e) {
    e.preventDefault();
    console.log(this.state);
    const { zipcode, buildingType, numUnits, hasPets, email } = this.state;
    // get quotes
    var quotes = [
      {
        name: 'State Farm',
        price: '12.25',
        link: 'http://www.statefarm.com',
        image: farmers
      },
      {
        name: 'Allstate',
        price: '14.00',
        link: 'http://www.statefarm.com',
        image: farmers
      },
    ];

    this.setState({
      quotes: quotes
    })
  }

  render () {
    return (
      <div className="container">
        <QuotesForm
          zipcode={this.state.zipcode}
          buildingType={this.state.buildingType}
          numUnits={this.state.numUnits}
          hasPets={this.state.hasPets}
          email={this.state.email}
          onUpdateBuildingType={(e) => this.handleUpdateBuildingType(e)}
          onUpdateNumUnits={(e) => this.handleUpdateNumUnits(e)}
          onUpdateHasPets={(e) => this.handleUpdateHasPets(e)}
          onUpdateEmail={(e) => this.handleUpdateEmail(e)}
          onSubmitQuote={(e) => this.handleSubmitQuote(e)}
        />
        <Quotes quotes={this.state.quotes}/>
        <br /><br />
      </div>
    )
  }
}

export default QuotesContainer;
