import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

interface ButtonProps {
  disabled?: Boolean;
  children: string;
  onClick?: () => void;
}

const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 20rem;
  height: 49px;
  background: ${theme.colors.base};
  border-radius: 4px;
  color: ${theme.colors.white};
  border: none;
  cursor: pointer;

  svg {
    margin-right: 0.6rem;
  }

  &:hover,
  &:focus {
    /* background: ${theme.colors.baseSmooth}; */
    /* color: ${theme.colors.black}; */
    box-shadow: 0 0 0 3px ${theme.colors.baseSmooth},
      0 0 0 4px ${theme.colors.base};
  }
  &:disabled {
    background: ${theme.colors.grey};
    cursor: wait;
    opacity: 0.7;
  }
`;

const Button = ({ children, disabled, ...rest }: ButtonProps) => (
  <ButtonStyle {...rest}>{children}</ButtonStyle>
);

export default Button;
