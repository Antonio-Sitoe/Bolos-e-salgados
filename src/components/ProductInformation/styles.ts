import styled from 'styled-components';
export const ShowInformation = styled.section`
  margin: 0.6rem 0;
  padding: 0 3rem;
  @media (max-width: 800px) {
    padding: 0;
  }
  button {
    margin: 1rem 0;
  }
  h1 {
    margin-bottom: 2rem;
    line-height: 1.5;
  }
  h2,
  h3 {
    font-weight: bold;
    font-size: 1rem;
    width: 100%;
    margin: 1rem 0;
  }

  h3 {
    text-transform: uppercase;
  }
`;
