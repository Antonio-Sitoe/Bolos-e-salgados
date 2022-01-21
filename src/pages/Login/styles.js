import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { animeLeft } from '../About/component/styles';

export const LoginGet = styled.form`
  display: grid;
  gap: 0.6rem;
  max-width: 600px;
  width: 100%;
  animation: ${animeLeft} 0.3s;

  select {
    background: #ffffff;
    border: 3px solid #e0dfdf;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 1rem;
    width: 100%;
    outline: none;
    &:hover,
    &:focus {
      border: 3px solid ${theme.colors.blackHover};
    }
  }

  h1 {
    margin-bottom: 2rem;
  }

  a {
    padding: 0.6rem 0;
    color: ${theme.colors.link};
  }
  p {
    a {
      color: ${theme.colors.tomato};
    }
  }
`;
export const LoginContainer = styled.main`
  margin: 8rem 0;
`;
