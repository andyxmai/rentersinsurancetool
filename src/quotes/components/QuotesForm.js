import React from 'react';
import './styles.css';
import { Form, Col, FormControl, FormGroup, Button, ControlLabel, Checkbox, HelpBlock } from 'react-bootstrap';

function QuotesForm (props) {
  return (
    <div className='quotes-form container section'>
      <div className='header-block'>
        <h2>Just one more step</h2>
        <p className='subtitle light-gray'>Tell us a little more about your living situation</p>
      </div>
      <div>
        <Form horizontal onSubmit={props.onSubmitQuote}>
          <FormGroup controlId="formHorizontalEmail" bsSize="large">
            <Col componentClass={ControlLabel} sm={2}>
              Zipcode
            </Col>
            <Col sm={1}>
            <FormControl.Static>
              {props.zipcode}
            </FormControl.Static>
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail" bsSize="large">
            <Col componentClass={ControlLabel} sm={2}>
              Type of building
            </Col>
            <Col sm={2}>
              <FormControl componentClass="select" onChange={props.onUpdateBuildingType} value={props.buildingType} placeholder="select">
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
                <option value="townhouse">Townhouse</option>
                <option value="house">Single House</option>
              </FormControl>
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail" bsSize="large">
            <Col componentClass={ControlLabel} sm={2}>
              Number of units
            </Col>
            <Col sm={1}>
              <FormControl componentClass="select" onChange={props.onUpdateNumUnits} value={props.numUnits} placeholder="select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5+</option>
              </FormControl>
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail" bsSize="large">
            <Col componentClass={ControlLabel} sm={2}>
              Has pets?
            </Col>
            <Col sm={1}>
              <Checkbox checked={props.hasPets} onChange={props.onUpdateHasPets}>Yes</Checkbox>
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail" bsSize="large">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={4}>
              <FormControl type="email" onChange={props.onUpdateEmail} value={props.email} placeholder="Email" />
              <HelpBlock>To help us retrieve your quote easier.</HelpBlock>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit" bsSize="lg" bsStyle="danger" disabled={!props.email || !props.zipcode}>
                Done!
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    </div>
  )
}

export default QuotesForm;
