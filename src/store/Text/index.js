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
  encounters: [
    {
      number: 29,
      roundMin: 1,
      roundMax: 5,
      entry: 'C10',
      text:
        'The last light of the sun fades from the sky, and a deep chill settles in , replacing what little warmth is left in your aching bones. Huddling in your coat, you make your way across the cold, damp earth to the fresh grave of a woman who is a recent victim of consumption, or so you were told by the boy who took your money. As you near the area, you stop short in surprise. A pile of dirt about a meter hight surrounds the grave site. The woman has either been removed, or she had yet to be buried . Cursing under your breath, you vow to track down that treacherous little urchin and make him answer for his lies.',
      choice: 'Approach the grave?',
      yes: 'A29',
      no: 'B29',
      outcome: null,
    },
    {
      number: 0,
      roundMin: 1,
      roundMax: 5,
      entry: 'A29',
      text:
        'The hairs on the back of your neck rise up as you realize someone or something, is watching you from the darkness. Finding your courage, you stalk to the edge of the grave and raise your lantern to peer down. As light illuminates the dark depths of the hole, you are shocked to see the exposed body of the woman you had hoped to find, along with two additional bodies, both appearing alarmingly fresh.',
      choice: null,
      yes: null,
      no: null,
      outcome:
        'When you draw cards this turn, you may redraw any cards that are only bones. Treat the materials as stage 1. If you resolve any 1 or more cadavers, recieve 1 humanity but ignore additional humanity.',
    },
  ],
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
