import React from 'react';

import enhance from './enhance';
import { Container, Nav, Backstory, CityPhase, Footer } from './styles';
import Prologue from '../Prologue';
import EventPhase from '../EventPhase';

const Component = ({ intro, yumm }) => (
  <Container>
    <Nav />
    <EventPhase />
    <Prologue />
    <Backstory />
    <CityPhase />
    <Footer />
  </Container>
);

export default enhance(Component);
