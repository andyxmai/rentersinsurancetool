import React from 'react';
import './styles.css';
import Quote from './Quote';
import PolicyDetail from './PolicyDetail'
import { Grid, Row, Col } from 'react-bootstrap';

function Quotes (props) {
  return props.quotes.length ?
    <div className='quotes container'>
      <div className='header-block'>
        <h2>Your quotes</h2>
        <p className='subtitle light-gray'>We present the five lowest quotes. All quotes assume no prior history of claims. See bottom for plan details</p>
      </div>
      <div>
        <div className='lowest-quotes'>
          <h4 className='dark-gray'>Lowest quote</h4>
          <Quote
            name={props.firstQuote.name}
            price={props.firstQuote.price}
            link={props.firstQuote.link}
            image={props.firstQuote.image}
          />
        </div>
        <div className='more-quotes'>
          <h4 className='dark-gray'>More quotes</h4>
          {props.moreQuotes.map((quote, i) => (
            <Quote
              key={i}
              name={quote.name}
              price={quote.price}
              image={quote.image}
              link={quote.link}
            />
          ))}
        </div>
        <br />
        <div className='policy-details'>
          <h4 className='dark-gray'>Policy details</h4>
          <p className='light-gray'>We think this standard package will fit your needs the best. If not, let us know and we’ll work together. <a href="/rentersinsurance101">Check out the definitions for these coverages here</a></p>
          <Grid>
            <Row className="show-grid">
              <Col sm={4}><PolicyDetail name='Property coverage' amount='$15,000'/></Col>
              <Col sm={4}><PolicyDetail name='Liability coverage' amount='$100,000'/></Col>
              <Col sm={4}><PolicyDetail name='Deductible' amount='$500'/></Col>
            </Row>
            <Row className="show-grid">
              <Col sm={4}><PolicyDetail name='Medical coverage' amount='$1,000'/></Col>
              <Col sm={4}><PolicyDetail name='Loss of use' amount='$3,000'/></Col>
            </Row>
          </Grid>
        </div>
      </div>
    </div>
    : null
}

export default Quotes;
