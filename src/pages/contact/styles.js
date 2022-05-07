import styled from "styled-components";
import {AnimeIntro} from '../../styles/styles'

export const Contato = styled.section`
  margin: 3rem 0;
`;

export const Grid = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  animation: ${AnimeIntro} 0.3s;
  margin: 3rem 0;
`;

export const Child = styled.div`
  text-align: center;
  img {
    width: 100px;
    height: 110px;
    margin: 1rem auto;
  }
  h3 {
    font-weight: bold;
    font-size: 1rem;
    margin: 1rem 0;
  }

  ul {
    li {
      margin: 1rem 0;
    }
  }
`;

export const ChildWhatsapp = styled.div`
  gap: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  h1 {
    max-width: 300px;
    text-align: center;
    margin: 0 auto;
  }

  div {
    margin: 1rem auto;
  }
`;

export const BtnWhatsap = styled.a`
  padding: 1rem 2rem;
  color: whitesmoke;
  background: #2ab562;
  box-shadow: 0px 16px 24px rgba(42, 181, 98, 0.2),
    0px 2px 6px rgba(42, 181, 98, 0.12), 0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 39.5px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  &:hover,
  &:focus {
    background: #3eda7c;
    transition: 0.3s;
  }
`;
