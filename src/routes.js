import React from 'react';
import { Router, Route, IndexRoute } from 'react-router'

import MainContainer from './main/MainContainer'
import LandingContainer from './landing/containers/Landing/LandingContainer';
import QuotesContainer from './quotes/containers/QuotesContainer'
import RI101Container from './rentersinsurance101/containers/RentersInsurance101Container';
import NotFound from './NotFound/components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={MainContainer} >
      <IndexRoute component={LandingContainer} />
      <Route path="quotes" component={QuotesContainer} />
      <Route path="rentersinsurance101" component={RI101Container} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
