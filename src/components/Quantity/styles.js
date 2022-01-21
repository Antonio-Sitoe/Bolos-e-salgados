import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const QuantityStyle = styled.main`
  margin: 1rem 0;
  display: flex;
  align-items: center;

  button {
    cursor: pointer;
  }

  span {
    font-weight: bold;
    background: ${theme.colors.grey};
    display: flex;
    align-items: center;
    justify-content: center;
   
  }

  span,
  button {
    border: none;
    width: 3rem;
    height: 2.5rem;

    &:nth-child(2) {
      color: ${theme.colors.black};
      background: #b2adad;

    }
    &:last-child {
      background: ${theme.colors.black};
      color: ${theme.colors.white};

      &:hover {
        background: ${theme.colors.blackHover};
      }
    }
  }
`;
