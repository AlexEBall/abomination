import { fromJS } from 'immutable';

export const types = {
  ROUND: 'gameplay/ROUND',
  INCREASE_ROUND: 'gameplay/INCREASE_ROUND',
  LOAD_EVENT: 'gameplay/LOAD_EVENT',
};

export const round = () => ({
  type: types.ROUND,
});

export const nextRound = () => ({
  type: types.INCREASE_ROUND,
});

export const loadWorkingEvent = event => ({
  type: types.LOAD_EVENT,
  payload: event,
});

export const initalState = fromJS({
  round: 1,
  workingEvent: {},
});

export default (state = initalState, { type, payload = {}, meta = {} }) => {
  switch (type) {
    case types.ROUND: {
      return state.get('round');
    }

    case types.INCREASE_ROUND: {
      const round = state.get('round');
      console.log(round);
      if (round < 12) {
        round++;
      }

      return state.set('round', round);
    }

    case types.LOAD_EVENT: {
      console.log(payload);

      return state.set('workingEvent', fromJS(payload));
    }

    default:
      return state;
  }
};
