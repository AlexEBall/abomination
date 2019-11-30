import React from 'react';

import { Card } from './styles';

const Component = ({ name, outcome, event, icon, roundMin, roundMax }) => (
  <Card>
    <p>{name}</p>
    <p>{`Event: ${roundMin} - ${roundMax}`}</p>
    <br />
    <p>{event}</p>
    <p>{outcome}</p>
  </Card>
);

export default Component;
