import React from 'react';
import './styles.css';

function KeyTerm ({word, explanation}) {
  return (
    <div className="term-container">
      <div className="term">{word}</div>
      <div>{explanation}</div>
    </div>
  )
}

export default KeyTerm;
