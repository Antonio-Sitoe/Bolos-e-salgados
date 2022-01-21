import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  border-radius: 4px;
  input {
    border: none;
    background: ${theme.colors.grey};
    padding: 0.6rem .8rem;
    outline: none;
  }

  a {
    padding: 0 1rem;
    border-radius: 0 4px 4px 0;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;