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
  events: [
    {
      name: 'Cholera Epidemic',
      roundMin: 1,
      roundMax: 7,
      event:
        'The disease sweeps across the city, killing scores of peasants and nobles alike, keeping the gravediggers and hospitals busy.',
      outcome:
        'Place 2 extra cadaver cards on top of the Hospital, gain 2 extra francs. When placing at the Cemetary or Morgue, draw 1 extra card.',
      icon: 'storm',
    },
    {
      name: 'The Lost Dogs',
      roundMin: 1,
      roundMax: 4,
      event:
        'Parisians are at a loss to explain a sharp decline of stray dogs in the city, though few are complaining.',
      outcome: 'Dog catchers at the Docks charge double francs',
      icon: 'execution',
    },
  ],
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
