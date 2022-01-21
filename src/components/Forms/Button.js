import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 297.08px;
  height: 49px;
  background: ${theme.colors.black};
  border-radius: 4px;
  color: ${theme.colors.white};
  border: none;
  cursor: pointer;

  svg {
    margin-right: 0.6rem;
  }

  &:hover,
  &:focus {
    background: ${theme.colors.blackHover};
  }
  &:disabled {
    background: ${theme.colors.blackHover};
    cursor: wait;
    opacity: 0.7;
  }
`;

const Button = ({ children, loading, ...rest }) => (
  <ButtonStyle {...rest} disabled={loading}>
    {children}
  </ButtonStyle>
);

export default Button;
