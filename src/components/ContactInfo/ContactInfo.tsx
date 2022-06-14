import styled from 'styled-components';
import { Title } from '../../styles/styles';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { theme } from '../../styles/theme';

export const ContactInforStyle = styled.section`
  padding: 3rem;

  h2 {
    margin-bottom: 3rem;
  }
  div {
    display: flex;
    gap: 0.6rem;
    margin: 3rem 0;

    svg {
      fill: ${theme.colors.base};
      width: 24px;
      height: 24px;
    }
    ul {
      display: grid;
      gap: 1rem;

      li {
        a {
          &:hover {
            color: ${theme.colors.base};
          }
        }
      }
    }
  }
  @media (max-width: 500px) {
    padding: 1rem;
  }
`;

export default function ContactInfo() {
  return (
    <ContactInforStyle>
      <Title>Loja Online</Title>
      <div>
        <MdLocationOn />
        <ul>
          <li>Rua Ali Perto, 35</li>
          <li>Inhambane - IB</li>
          <li>Mocambique - Terra - Vita Láctea</li>
        </ul>
      </div>
      <div>
        <MdEmail />
        <ul>
          <li>
            <a href='antoniositoehl@gmail.com'>antoniositoehl@gmail.com</a>
          </li>
          <li>
            <a href='https://github.com/Antonio-Sitoe'>Portifolio</a>
          </li>
        </ul>
      </div>
    </ContactInforStyle>
  );
}
