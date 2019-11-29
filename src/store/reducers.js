import { combineReducers } from 'redux';

import Text from './Text';
import Voices from './Voices';

const appReducers = {
  Text,
  Voices,
};

const rootReducers = combineReducers({
  ...appReducers,
});

export default (state, action) => rootReducers(state, action);
