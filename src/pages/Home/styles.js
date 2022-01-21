import styled from 'styled-components';

export const Main = styled.main`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

export const DivConfir = styled.div`
  margin: 6rem 0;
  a {
    max-width: 20rem;
    margin: 0 auto;
    padding: 1rem;
    border-radius: 3rem;
  }
`;
