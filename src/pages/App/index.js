import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import enhance from './enhance';
import { App } from './styles';

import Home from '../Home';

const Component = ({ hello }) => (
  <App>
    <Switch>
      <Route path='/' render={props => <Home {...props} intro={hello} />} />
    </Switch>
  </App>
);

export default enhance(Component);
