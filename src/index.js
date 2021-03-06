import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';

import store from './store';
import history from './history';

import App from './pages/App';
import * as serviceWorker from './serviceWorker';

export const Wrap = ({ children, store }) => (
  <Provider store={store}>
    <Router history={history}>{children}</Router>
  </Provider>
);

ReactDOM.render(
  <Wrap store={store}>
    <Switch>
      <App />
    </Switch>
  </Wrap>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
