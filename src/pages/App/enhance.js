import { compose, lifecycle, withProps } from 'recompose';
import { connect } from 'react-redux';

const enhance = compose(
  connect(null, {}),
  withProps(props => ({
    hello: 'goodbye',
  })),
  lifecycle({
    componentDidMount() {},
  })
);

export default enhance;
