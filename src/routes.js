import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './features/home';
import ApiCalls from './features/api-calls/containers';

const Routes = () =>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/api-calls" component={ApiCalls} />
    <Route path="*" component={Home} />
  </Switch>;

export default Routes;
