import { fromJS } from 'immutable';

export const types = {
  INIT_VOICES: 'voices/INIT_VOICES',
  GET_CHARACTER_TO_VOICE_MAP: 'voices/GET_CHARACTER_TO_VOICE_MAP',
};

export const initVoices = () => {
  window.speechSynthesis.getVoices();
  return { type: types.INIT_VOICES, payload: true };
};

export const getVoicesMap = () => {
  return { type: types.GET_CHARACTER_TO_VOICE_MAP };
};

export const initalState = fromJS({
  voiceAPI: {
    init: false,
  },
  voicesMap: {
    encounters: 'Thomas',
    prologue: 'Amelie',
  },
});

export default (state = initalState, { type, payload = {}, meta = {} }) => {
  switch (type) {
    case types.INIT_VOICES: {
      return state.set('voiceAPI', fromJS(payload));
    }
    case types.GET_CHARACTER_TO_VOICE_MAP: {
      return state.voicesMap;
    }

    default:
      return state;
  }
};
