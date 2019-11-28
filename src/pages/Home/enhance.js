import { compose, lifecycle, withHandlers, withProps } from 'recompose';
import { connect } from 'react-redux';

// import { fetchQuestions } from '../../store/Questions';

const enhance = compose(
  connect(null, {}),
  withProps(props => ({
    yumm: 'tumm',
  })),
  withProps(console.log),
  //   withHandlers({
  //     fetchQuestions: props => events => props.fetchQuestions(),
  //   }),
  lifecycle({
    async componentDidMount() {
      const { props } = this;

      console.log('ds sdaf ey');
      //   props.fetchQuestions()
    },
  })
);

export default enhance;
