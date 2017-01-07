import React from 'react';
import './styles.css';
import KeyTerm from './KeyTerm'

function RI101 ({name, amount}) {
  return (
    <div className='section'>
      <div className='header-block'>
        <h2>Key Terms</h2>
      </div>
      <div className='terms'>
        <KeyTerm
        word="Property coverage"
        explanation="The maximum that you will get reimbursed when your property is lost. It’s an estimate of the total value of everything you own."
        />
        <KeyTerm
        word="Liability coverage"
        explanation="How much the insurance company will pay when someone sues you over bodily injury and property damage caused by your actions or negligence. This includes legal fees. A good rule of thumb to determine how much you need is to add up all your bank accounts. Typically $100,000 should be enough."
        />
        <KeyTerm
        word="Deductible"
        explanation="How much the insurance company pays for medical treatments when someone is injured on your property."
        />
        <KeyTerm
        word="Medical coverage"
        explanation="The amount you have to pay before your insurance companies pays for the rest of your claims for the year. The higher the deductible, the lower your premium will be."
        />
        <KeyTerm
        word="Loss of use"
        explanation="The amount you get reimbursed for hotels and food in the event that you cannot live in your rental home due to a peril."
        />
      </div>
    </div>
  )
}

export default RI101;
