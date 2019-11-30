import React from 'react';

import enhance from './enhance';
import { Card } from './styles';

const Component = ({ outcome, text, roundMin, roundMax }) => {
  console.log('hey');
  return (
    <Card>
      <p>{`Event: ${roundMin} - ${roundMax}`}</p>
      <br />
      <p>{text}</p>
    </Card>
  );
};

export default enhance(Component);
