import { fromJS } from 'immutable';

export const types = {
  FETCH_VOICES: 'encounters/FETCH_VOICES',
};

export const fetchVoices = () => {
  let voices = [];
  const voiceschanged = () => {
    window.speechSynthesis.getVoices().forEach(voice => {
      voices.push(voice);
    });
  };

  console.log(voices);
  window.speechSynthesis.onvoiceschanged = voiceschanged;
  return {
    type: types.FETCH_VOICES,
    payload: voices,
  };
};

export const initalState = fromJS({
  voices: {
    busy: false,
    error: '',
    entities: {},
  },
});

export default (state = initalState, { type, payload = {}, meta = {} }) => {
  switch (type) {
    case types.FETCH_VOICES: {
      console.log(payload);
      return state
        .setIn(['encounters, busy'], false)
        .setIn(['encounters, entities'], fromJS(payload));
    }

    default:
      return state;
  }
};
