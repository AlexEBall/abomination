import React from 'react';

import enhance from './enhance';
import { Button, Prologue } from './styles';

const Component = ({ encounter, prologue, say, voices }) => (
  <Prologue>
    <Button onClick={say({ name: voices.get('prologue'), text: prologue })}>
      Say
    </Button>
    <Button
      second
      onClick={say({ name: voices.get('encounters'), text: encounter })}
    >
      Say
    </Button>
  </Prologue>
);

export default enhance(Component);
