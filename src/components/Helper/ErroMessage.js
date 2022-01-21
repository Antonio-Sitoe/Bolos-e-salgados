import React from 'react';
import { Container } from '../../styles/styles';
import { ErrorStyle } from './styles';

const ErroMessage = ({ error }) => {
  return (
    <Container>
      <ErrorStyle>
        <h2>{error}</h2>
        <p>Verifique a sua ligacao a internet</p>
      </ErrorStyle>
    </Container>
  );
};

export default ErroMessage;
