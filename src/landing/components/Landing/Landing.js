import React from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap'
import './styles.css';

function Landing (props) {
  return (
    <div className='hero'>
      <div className='container section'>
        <h1 className='hero-title'>Start and end your renters insurance research here</h1>
        <br/>
        <h4 className='subtitle'>Stop the guesswork and complacency of finding your renters insurance.</h4>
        <h4 className='subtitle'>Instantly compare quotes from 10+ insurance companies to find your best policy.</h4>
        <br/><br/><br/>
        <div className="zipcode-form">
          <Form inline onSubmit={props.onSubmitZipcode}>
            <FormGroup controlId="formInlineZipcode" bsSize="large" className='zipcode-formgroup'>
              <FormControl
                type="text"
                placeholder="zipcode"
                onChange={props.onUpdateZipcdoe}
                value={props.zipcode} />
            </FormGroup>
            <Button type="submit" bsSize="large" bsStyle="primary">
              Get quotes
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Landing;
