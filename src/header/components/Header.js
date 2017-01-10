import React from 'react';
import './styles.css';

function Header () {
  return (
    <div className='header'>
      <nav className="header-navbar navbar navbar-default navbar-fixed-top">
        <div className="header-container container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand brand" href="/">RentersInsuranceTool</a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right links">
              <li><a href="rentersinsurance101">Renters Insurance 101</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;
