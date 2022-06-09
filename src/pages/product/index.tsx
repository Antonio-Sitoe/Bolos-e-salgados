import { Main, ProdutoStyle } from './styles'
import IntroOnPage from '../../components/IntroOnPage/IntroOnPage'
import { Container } from '../../styles/styles';
import { content, subtitles } from '../home/FeaturedProductSession'
import Card from '../../components/Card/Card';
import Sumary from '../../components/Sumary/Sumary';
import CupCakeSession from '../../components/CupCakeSession/CupCakeSession';

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
      <CupCakeSession />
    </ProdutoStyle>

  );
}

export default product;
