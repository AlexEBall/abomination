import { compose, lifecycle, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { updateIsSpeaking } from '../../store/Gameplay';
import { speakConfig } from '../../utils';

const enhance = compose(
  connect(
    ({ Voices }) => ({
      voices: Voices.get('voicesMap'),
    }),
    { updateIsSpeaking }
  ),
  lifecycle({
    componentDidMount() {
      const { props } = this;

      console.log('heelj sljfa');

      const utterance = speakConfig({
        text: props.text,
        voice: 'Amelie',
        action: props.updateIsSpeaking,
      });
      window.speechSynthesis.speak(utterance);
    },
    componentDidUpdate(prevProps) {
      const { props } = this;
      if (props.entry !== prevProps.entry) {
        const utterance = speakConfig({
          text: props.text,
          voice: 'Amelie',
          action: props.updateIsSpeaking,
        });
        window.speechSynthesis.speak(utterance);
      }
    },
  })
);

export default enhance;
