import { combineReducers } from 'redux';

import Gameplay from './Gameplay';
import Text from './Text';
import Voices from './Voices';

const appReducers = {
  Gameplay,
  Text,
  Voices,
};

const rootReducers = combineReducers({
  ...appReducers,
});

export default (state, action) => rootReducers(state, action);
