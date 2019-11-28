import { compose, lifecycle, withProps } from 'recompose';
import { connect } from 'react-redux';

const enhance = compose(
  connect(null, {}),
  withProps(props => ({
    hello: 'goodbye',
  })),
  //   withProps(console.log),
  lifecycle({
    async componentDidMount() {
      const { props } = this;

      console.log('yo you yo');
    },
  })
);

export default enhance;
