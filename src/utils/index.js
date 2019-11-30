export const speakConfig = ({ text, voice, action }) => {
  const utterance = new SpeechSynthesisUtterance(text);

  let voices = [];
  utterance.rate = 6.5;
  voices = window.speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === voice) {
      utterance.voice = voices[i];
    }
  }

  utterance.onstart = () => action();
  utterance.onend = () => action();

  return utterance;
};
