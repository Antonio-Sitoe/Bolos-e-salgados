import styled from 'styled-components';
import { AnimeIntro } from '../../styles/styles';
import { theme } from '../../styles/theme';

export const CheckoutStyle = styled.main`
  margin: 3rem 0;
`;

export const Main = styled.main`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Shypings = styled.main`
  gap: 1rem;
  div {
    gap: 1rem;
    display: flex;
    align-items: center;
    span {
      svg {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        color: ${theme.colors.buyBtn};
      }
    }
    h1 {
      font-weight: bold;
      font-size: 1rem;
    }
  }

  section {
    margin: 2rem 0;
    div {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
`;

export const EmailStyle = styled.form`
  animation: 0.3s ${AnimeIntro} ease-in;
  display: grid;
  gap: 1rem;
  margin: 1rem 0;

  p {
    a {
      color: ${theme.colors.base};
    }
  }
`;

export const DataStyle = styled.form`
  animation: 0.3s ${AnimeIntro};
  margin: 1rem 0;
  display: grid;
  gap: 1rem;

  select,
  textarea {
    background: #ffffff;
    border: 3px solid #e0dfdf;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 1rem;
    width: 100%;
    outline: none;
    font-family: 'Lato', sans-serif;
    &:hover,
    &:focus {
      border: 3px solid ${theme.colors.blackHover};
    }
  }
`;

export const PaymentsStyle = styled.section`
  animation: 0.3s ${AnimeIntro};
  display: grid;
  margin-top: 0.6rem;
  gap: 0.6rem;
  a {
    display: block;
    padding: 1rem;
    background: #2ab562;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    font-family: 'Lato';
    color: ${theme.colors.white};
    text-align: center;
    border-radius: 4px;
  }
`;

export const Order = styled.div`
  padding: 1rem;

  div {
    background: #f5f5f5;
    padding: 1rem;
  }
`;

export const ButtonEdit = styled.button`
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.baseSmooth};
  }
`;
