import React from 'react';
import QuotesForm from '../components/QuotesForm';
import Quotes from '../components/Quotes';

const QuotesContainer = React.createClass({
  render () {
    return (
      <div className="container">
        <QuotesForm />
        <br /><br />
        <Quotes />
      </div>
    )
  }
})

export default QuotesContainer;
