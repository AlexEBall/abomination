import styled from 'styled-components';

export const Prologue = styled.section`
  background: green;
  height: 50rem;
  padding: 4rem;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 5.2rem;
  height: 2rem;
  border-radius: 0.4rem;
  background: ${p => (p.second ? 'pink' : 'lightgreen')};
`;
