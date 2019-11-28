import React from 'react';

import enhance from './enhance';
import { Container } from './styles';

const Component = ({ intro, yumm }) => (
  <Container>{`${intro} ${yumm}`}</Container>
);

export default enhance(Component);
