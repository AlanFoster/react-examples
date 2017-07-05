import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './features/home';
import YodaStateExample from './features/yoda-state-example/containers';

const Routes = () =>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/yoda-state-example" component={YodaStateExample} />
    <Route path="*" component={Home} />
  </Switch>;

export default Routes;
