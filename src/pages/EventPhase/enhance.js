import {
  compose,
  lifecycle,
  withHandlers,
  withProps,
  withState,
} from 'recompose';
// import { toJS } from 'immutable';
import { connect } from 'react-redux';

import { loadWorkingEvent } from '../../store/Gameplay';

const enhance = compose(
  connect(
    ({ Gameplay, Text }) => ({
      events: Text.get('events'),
      workingEvent: Gameplay.get('workingEvent'),
    }),
    { loadWorkingEvent }
  ),
  withProps(props => ({
    selectOptions: props.events.toJS().map(e => e.name),
  })),
  withState('isEventOn', 'setEventOn', false),
  withHandlers({
    chooseEventCard: props => e => {
      props.setEventOn(!props.isEventOn);
    },
    handleChange: props => e => {
      const name = e.target.value;

      const event = props.events.toJS().filter(e => e.name === name);

      props.loadWorkingEvent(event[0]);
    },
  }),
  withProps(console.log),
  lifecycle({
    componentDidMount() {
      const { props } = this;
    },
  })
);

export default enhance;
