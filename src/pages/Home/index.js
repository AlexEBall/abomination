import React from 'react';

import enhance from './enhance';
import {
  Container,
  Nav,
  Backstory,
  EventPhase,
  CityPhase,
  Footer,
} from './styles';
import Prologue from '../Prologue';

const Component = ({ intro, yumm }) => (
  <Container>
    <Nav />
    <Prologue />
    <Backstory />
    <EventPhase />
    <CityPhase />
    <Footer />
  </Container>
);

export default enhance(Component);
