import React from 'react'
import Header from '../header/components/Header'
import Footer from '../footer/components/Footer'

const MainContainer = React.createClass ({
  render () {
    return (
      <div>
        <Header />
        <div>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
})

export default MainContainer;
