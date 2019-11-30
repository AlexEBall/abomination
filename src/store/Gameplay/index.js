import { fromJS } from 'immutable';

export const types = {
  ROUND: 'gameplay/ROUND',
  INCREASE_ROUND: 'gameplay/INCREASE_ROUND',
  LOAD_EVENT: 'gameplay/LOAD_EVENT',
  LOAD_ENCOUNTER: 'gameplay/LOAD_ENCOUNTER',
  UPDATE_SPEAKING: 'gameplay/UPDATE_SPEAKING',
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

export const loadWorkingEncounter = event => ({
  type: types.LOAD_ENCOUNTER,
  payload: event,
});

export const updateIsSpeaking = () => ({ type: types.UPDATE_SPEAKING });

export const initalState = fromJS({
  round: 1,
  workingEncounter: {},
  workingEvent: {},
  isSpeaking: false,
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

      return state.set('round', fromJS(round));
    }

    case types.LOAD_EVENT: {
      return state.set('workingEvent', fromJS(payload));
    }

    case types.LOAD_ENCOUNTER: {
      return state.set('workingEncounter', fromJS(payload));
    }

    case types.UPDATE_SPEAKING: {
      return state.set('isSpeaking', fromJS(!state.get('isSpeaking')));
    }

    default:
      return state;
  }
};
