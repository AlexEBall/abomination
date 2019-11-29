import { compose, lifecycle, withHandlers, withProps } from 'recompose';
import { connect } from 'react-redux';

// import { fetchQuestions } from '../../store/Questions';

const enhance = compose(
  connect(null, {}),
  withProps(props => ({
    yumm: 'tumm',
  })),
  lifecycle({
    componentDidMount() {},
  })
);

export default enhance;
