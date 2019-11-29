import { fromJS } from 'immutable';

export const types = {
  FETCH_ENCOUNTERS: 'encounters/FETCH_ENCOUNTERS',
  GET_PROLOGUE: 'prologue/GET_PROLOGUE',
};

export const getPrologueText = () => ({
  type: types.GET_PROLOGUE,
  payload: 'This is the prologue',
});

export const initalState = fromJS({
  encounters: {
    text: 'Encounters baby!',
  },
  prologue: {
    text: 'This is the prologue',
  },
});

// not really changing state

export default (state = initalState, { type, payload = {}, meta = {} }) => {
  switch (type) {
    case types.FETCH_ENCOUNTERS: {
      console.log(payload);
      return state
        .setIn(['encounters, busy'], false)
        .setIn(['encounters, entities'], fromJS(payload));
    }

    case types.GET_PROLOGUE: {
      return state.setIn(['prologue', 'text'], fromJS(payload));
    }

    default:
      return state;
  }
};
