import React from 'react';
import styled from 'styled-components';
import { Quantity } from '../Quantity/Quantity';


const Main = styled.main`
  justify-content: space-between;
  display: flex;
  align-items: center;
  p {
    font-weight: bold;
  }
`;

const Count = ({ count, setCount }) => {
  return (
    <Main>
      <p>Quantidade</p>
      <Quantity count={count} setCount={setCount} />
    </Main>
  );
};

export default React.memo(Count);
