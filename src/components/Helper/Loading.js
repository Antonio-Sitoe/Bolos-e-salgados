import React from 'react';
import { Container } from '../../styles/styles';
import { Balls } from './styles';

const Loading = () => {
  return (
    <Container>
      <Balls>
        <section>
          <div></div>
          <div></div>
          <div></div>
        </section>
      </Balls>
    </Container>
  );
};

export default Loading;
