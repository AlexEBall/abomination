import { compose, lifecycle, withProps } from 'recompose';
import { connect } from 'react-redux';

import { initVoices } from '../../store/Voices';

const enhance = compose(
  connect(null, { initVoices }),
  lifecycle({
    async componentDidMount() {
      const { props } = this;

      // To preload all the voices so that we
      // can use them later on
      props.initVoices();
    },
  })
);

export default enhance;
