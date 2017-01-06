import React, { Component } from 'react';
import './App.css';
import LandingContainer from './landing/containers/Landing/LandingContainer';
import Header from './header/components/Header'
import Footer from './footer/components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LandingContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
