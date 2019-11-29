import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 18px;
  overflow-y: scroll;
`;

export const Nav = styled.nav`
  background: purple;
  height: 6rem;
`;

export const Backstory = styled.section`
  background: orange;
  height: 50rem;
`;

export const EventPhase = styled.section`
  background: magenta;
  height: 50rem;
`;

export const CityPhase = styled.section`
  background: grey;
  height: 50rem;
`;

export const Footer = styled.footer`
  background: blue;
  height: 20rem;
`;
