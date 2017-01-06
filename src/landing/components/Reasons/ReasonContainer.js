import React from 'react';
import { Panel } from 'react-bootstrap';
import './styles.css';

function ReasonContainer ({title, body}) {
  return (
    <div>
      <Panel className='reason'>
        <div className='reason-title'>
          {title}
        </div>
        <br />
        <div className='reason-body'>
          {body}
        </div>
      </Panel>
    </div>
  )
}

export default ReasonContainer
