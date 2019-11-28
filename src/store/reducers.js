import { combineReducers } from 'redux';

import Text from './Text';

const appReducers = {
  Text,
};

const rootReducers = combineReducers({
  ...appReducers,
});

export default (state, action) => rootReducers(state, action);
