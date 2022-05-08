import styled, { keyframes } from 'styled-components';

const animeleft = keyframes`
  
  from {
opacity: 0;
transform: translate3d(0, -30px,0);
  }

  to {
opacity: 1;
transform: translate3d(0, 0,0);
  }
`;
export const ProdutoStyle = styled.div`
  margin: 2rem 0;
  animation: ${animeleft} 0.3s;
`;
export const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  align-items: start;
  padding: 6rem 0;
`;
export const ShowPhotos = styled.section``;

export const ShowInformation = styled.section`
  margin: 0.6rem 0;

  padding: 0 3rem;
  @media (max-width: 800px) {
    padding: 0;
  }

  p {
    font-size: 0.9rem;
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
    font-size: 1.5rem;
    width: 100%;
    margin: 1rem 0;
  }

  h3 {
    text-transform: uppercase;
  }
`;

