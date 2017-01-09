import React, {Component} from 'react';
import QuotesForm from '../components/QuotesForm';
import Quotes from '../components/Quotes';
import farmers from '../components/images/farmers.jpg';
import allstate from '../components/images/allstate.png';
import progressive from '../components/images/progressive.png';
import liberty from '../components/images/liberty.png';
import statefarm from '../components/images/statefarm.jpg';
import quotesDB from '../../quotes_db.json'

class QuotesContainer extends Component {
  constructor () {
    super()
    this.state = {
      zipcode: '',
      buildingType: 'apartment',
      numUnits: '1',
      hasPets: false,
      email: '',
      quotes: [],
      firstQuote: {},
      moreQuotes: []
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

  createQuoteObject (quote) {
    const name = quote.name;
    if (name === 'statefarm') {
      return {
        name: 'State Farm',
        price: quote.price,
        link: 'https://www.statefarm.com/insurance/home-and-property/renters',
        image: statefarm
      }
    } else if (name === 'allstate') {
      return {
        name: 'Allstate',
        price: quote.price,
        link: 'https://purchase.allstate.com/onlinesalesweb/app/renters/?Product=Re&intcid=renters-insurance.asp&_ga=1.44089188.1931193883.1478490134',
        image: allstate
      }
    } else if (name === 'farmers') {
      return {
        name: 'Farmers Insurance',
        price: quote.price,
        link: 'https://www.farmers.com/renters/',
        image: farmers
      }
    } else if (name === 'libertymutual') {
      return {
        name: 'Liberty Mutual',
        price: quote.price,
        link: 'https://www.libertymutual.com/renters-insurance',
        image: liberty
      }
    } else if (name === 'progressive') {
      return {
        name: 'Progressive',
        price: quote.price,
        link: 'https://www.progressive.com/renters/',
        image: progressive
      }
    }
  }

  createQuoteObjects (quotes) {
    var quoteObjects = []
    for (var i = 0; i < quotes.length; i++) {
      quoteObjects.push(this.createQuoteObject(quotes[i]))
    }

    return quoteObjects;
  }

  createQuoteKey (zipcode, numUnits, hasPets) {
    var petsKey = 'hasPets'
    if (!hasPets) {
      petsKey = 'hasNoPets'
    }

    return `${zipcode}-${numUnits}-${petsKey}`
  }

  handleSubmitQuote (e) {
    e.preventDefault();
    console.log(this.state);
    const { zipcode, buildingType, numUnits, hasPets, email } = this.state;
    // get quotes
    const key = this.createQuoteKey(zipcode, numUnits, hasPets);
    console.log(key);
    const quotes = quotesDB[key];
    var quoteObjects = this.createQuoteObjects(quotes);

    this.setState({
      quotes: quoteObjects,
      firstQuote: quoteObjects[0],
    });

    quoteObjects.shift()
    this.setState({
      moreQuotes: quoteObjects
    });
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
        <Quotes
          quotes={this.state.quotes}
          firstQuote={this.state.firstQuote}
          moreQuotes={this.state.moreQuotes}
        />
        <br /><br />
      </div>
    )
  }
}

export default QuotesContainer;
