import { compose, lifecycle, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { updateIsSpeaking } from '../../store/Gameplay';

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
      console.log('hi');
      console.log(props);
      // This can all be extractd into its own util and maybe HOC
      const utterance = new SpeechSynthesisUtterance(props.event);
      let voices = [];

      console.log(utterance);
      utterance.rate = 6.5;
      //   utterance.pitch = 6;
      voices = window.speechSynthesis.getVoices();

      for (let i = 0; i < voices.length; i++) {
        // console.log(voices[i]);
        // Have to do some mapping for voice characters
        // possibly also button fade in stuff to give voice API time
        if (voices[i].name === 'Amelie') {
          utterance.voice = voices[i];
        }
      }
      utterance.onstart = () => props.updateIsSpeaking();
      utterance.onend = () => props.updateIsSpeaking();
      window.speechSynthesis.speak(utterance);
    },
    componentDidUpdate(prevProps) {
      const { props } = this;
      console.log('hey');
      console.log(props);
      console.log(prevProps);
      if (props.name !== prevProps.name) {
        const utterance = new SpeechSynthesisUtterance(props.event);
        let voices = [];

        console.log(utterance);
        utterance.rate = 6.5;
        //   utterance.pitch = 6;
        voices = window.speechSynthesis.getVoices();

        for (let i = 0; i < voices.length; i++) {
          // console.log(voices[i]);
          // Have to do some mapping for voice characters
          // possibly also button fade in stuff to give voice API time
          if (voices[i].name === 'Amelie') {
            utterance.voice = voices[i];
          }
        }

        utterance.onstart = () => props.updateIsSpeaking();
        utterance.onend = () => props.updateIsSpeaking();
        window.speechSynthesis.speak(utterance);
      }
    },
  })
);

export default enhance;
