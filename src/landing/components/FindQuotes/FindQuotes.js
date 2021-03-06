import React from 'react';
import './styles.css';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap'

function FindQuotes (props) {
  return (
    <div className='findquotes'>
      <div className='container section'>
        <div className='header-block'>
          <h1 className='title dark-gray'>Find your renters insurance now</h1>
        </div>
        <div className="zipcode-form">
          <Form inline onSubmit={props.onSubmitZipcode}>
            <FormGroup controlId="formInlineZipcode" bsSize="large" className='zipcode-formgroup'>
              <FormControl
                type="text"
                placeholder="zipcode"
                onChange={props.onUpdateZipcdoe}
                value={props.zipcode}
              />
            </FormGroup>
            <Button type="submit" bsSize="large" bsStyle="warning" disabled={props.zipcode.length !== 5}>
              Get quotes
            </Button>
          </Form>
        </div>
        <br/>
      </div>
    </div>
  )
}

export default FindQuotes;
