import React from 'react';

import enhance from './enhance';
import { Button, Prologue } from './styles';

const Component = ({ say }) => (
  <Prologue>
    <Button onClick={say}>Say</Button>
  </Prologue>
);

export default enhance(Component);
