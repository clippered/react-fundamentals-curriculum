import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import Hello from '../components/hello'

var routes = (
  <Router>
    <Route path='/' component={Hello}>
      <IndexRoute component={Hello} />
    </Route>
  </Router>
);

export default routes;
