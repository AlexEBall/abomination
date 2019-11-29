import { compose, lifecycle, withHandlers, withProps } from 'recompose';
import { connect } from 'react-redux';

import { getPrologueText } from '../../store/Text';

const enhance = compose(
  connect(
    ({ Text }) => ({
      prologue: Text.getIn(['prologue', 'text']),
    }),
    { getPrologueText }
  ),
  withHandlers({
    say: props => e => {
      e.preventDefault();

      const utterance = new SpeechSynthesisUtterance(props.prologue);
      let voices = [];

      voices = window.speechSynthesis.getVoices();

      for (let i = 0; i < voices.length; i++) {
        // Have to do some mapping for voice characters
        // possibly also button fade in stuff to give voice API time
        if (voices[i].name === 'Thomas') {
          utterance.voice = voices[i];
        }
      }

      window.speechSynthesis.speak(utterance);
    },
  }),
  lifecycle({
    componentDidMount() {
      const { props } = this;
      props.getPrologueText();
    },
  })
);

export default enhance;
