import { fromJS } from 'immutable';

export const types = {
  FETCH_ENCOUNTERS: 'encounters/FETCH_ENCOUNTERS',
};

console.log(types);

export const initalState = fromJS({
  encounters: {
    busy: false,
    error: '',
    entities: {},
  },
});

export default (state = initalState, { type, payload = {}, meta = {} }) => {
  switch (type) {
    case types.FETCH_ENCOUNTERS: {
      console.log(payload);
      return state
        .setIn(['encounters, busy'], false)
        .setIn(['encounters, entities'], fromJS(payload));
    }

    default:
      return state;
  }
};
