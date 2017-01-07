import React from 'react';
import { Router, Route, IndexRoute } from 'react-router'

import MainContainer from './main/MainContainer'
import LandingContainer from './landing/containers/Landing/LandingContainer';
import QuotesContainer from './quotes/containers/QuotesContainer'

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={MainContainer} >
      <IndexRoute component={LandingContainer} />
      <Route path="/quotes" component={QuotesContainer} />
    </Route>
  </Router>
);

export default Routes;
