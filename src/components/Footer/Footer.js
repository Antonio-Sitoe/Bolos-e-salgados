import { Link } from 'react-router-dom';
import { Container, Title } from '../../styles/styles';
import { CopyRight, FirstSection, Wrapper } from './styles';


const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <FirstSection>
          <div>
            <ul>
              <li>
                {' '}
                <Link to='product'>Produto</Link>{' '}
              </li>
              <li>
                {' '}
                <Link to='about'>Quem somos</Link>{' '}
              </li>
            </ul>
            <main>
              <Link to=''>
                <Title>Mila Delicious</Title>
              </Link>
            </main>
            <ul>
              <li>
                <Link to='contact'>Contato</Link>
              </li>
              <li>
                <Link to='faq'>Como Encomendar</Link>
              </li>
            </ul>
          </div>
        </FirstSection>
        <CopyRight>
          <li>{new Date().getFullYear()}</li>
          <li> | </li>
          <li>Todos direitos reservados </li>
          <li> | </li>
          <li>NobleStack</li>
        </CopyRight>
      </Container>
    </Wrapper>
  );
};

export default Footer;
