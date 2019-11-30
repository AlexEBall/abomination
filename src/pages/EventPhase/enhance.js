import {
  compose,
  lifecycle,
  withHandlers,
  withProps,
  withState,
} from 'recompose';
import { connect } from 'react-redux';

import { loadWorkingEncounter, loadWorkingEvent } from '../../store/Gameplay';

const enhance = compose(
  connect(
    ({ Gameplay, Text }) => ({
      events: Text.get('events'),
      encounters: Text.get('encounters'),
      workingEncounter: Gameplay.get('workingEncounter'),
      workingEvent: Gameplay.get('workingEvent'),
      isSpeaking: Gameplay.get('isSpeaking'),
    }),
    { loadWorkingEncounter, loadWorkingEvent }
  ),
  withProps(props => ({
    selectOptions: props.events.toJS().map(e => e.name),
    encounterOptions: props.encounters.toJS().map(e => e.entry),
  })),
  withState('encounterTriggered', 'setEncounterTriggered', false),
  withHandlers({
    triggerEncounter: props => e => {
      props.setEncounterTriggered(!props.encounterTriggered);
    },
    handleEncounterChange: props => e => {
      const entry = e.target.value;

      console.log('hy');

      const encounter = props.encounters.toJS().filter(e => e.entry === entry);

      props.loadWorkingEncounter(encounter[0]);
    },
    handleChange: props => e => {
      const name = e.target.value;

      const event = props.events.toJS().filter(e => e.name === name);

      props.loadWorkingEvent(event[0]);
    },
  }),
  // withProps(console.log),
  lifecycle({
    componentDidMount() {
      const { props } = this;
    },
  })
);

export default enhance;
