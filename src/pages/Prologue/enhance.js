import { compose, lifecycle, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { getPrologueText } from '../../store/Text';

const enhance = compose(
  connect(
    ({ Text, Voices }) => ({
      voices: Voices.get('voicesMap'),
      prologue: Text.getIn(['prologue', 'text']),
      encounter: Text.getIn(['encounters', 'text']),
    }),
    { getPrologueText }
  ),
  withHandlers({
    say: props => ({ name, text }) => e => {
      console.log(props);
      e.preventDefault();

      // This can all be extractd into its own util and maybe HOC
      const utterance = new SpeechSynthesisUtterance(text);
      let voices = [];

      voices = window.speechSynthesis.getVoices();

      for (let i = 0; i < voices.length; i++) {
        // console.log(voices[i]);
        // Have to do some mapping for voice characters
        // possibly also button fade in stuff to give voice API time
        if (voices[i].name === name) {
          utterance.voice = voices[i];
        }
      }

      window.speechSynthesis.speak(utterance);
    },
  }),
  lifecycle({
    componentDidMount() {
      const { props } = this;
      // props.getPrologueText();
    },
  })
);

export default enhance;
