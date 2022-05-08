import { ProdutoStyle } from './styles'
import IntroOnPage from '../../components/IntroOnPage/IntroOnPage'
import { Container } from '../../styles/styles';
import { content, Main, subtitles } from '../index'
import Card from '../../components/Card/Card';
import Sumary from '../../components/Sumary/Sumary';

function product() {
  return (

    <ProdutoStyle>
      <IntroOnPage text='Bolos e Salgados' Bg="/encomendas.jpg" />
      <Container>
        {subtitles.map(({ title, description }, i) => {
          return (
            <div key={i}>
              <Sumary

                title={title}
                description={description}
              />
              <Main>
                {content.map((item) => {
                  return <Card key={item.id} attributes={item} />;
                })}
              </Main>
            </div>
          );
        })}
      </Container>
    </ProdutoStyle>

  );
}

export default product;
