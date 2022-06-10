import Image from 'next/image';
import { Container, Links, Title } from '../../styles/styles';
import { Card, CupCakeStyle, MainCard } from './styles';

const CupCakeSession = ({ cupCakeData }) => {
  return (
    <Container>
      <CupCakeStyle>
        <Title>CupCAKES PARA a sua festa</Title>
        <MainCard>
          {cupCakeData.map(({ id, attributes }) => {
            return (
              <Card key={id}>
                <Image alt={attributes.name} src={attributes.image.data[0].attributes.url} height={280} width={320} />
                <main>
                  <h1>{attributes.name}</h1>
                  <h4>{attributes.price}</h4>
                  <Links href='/'>Comprar</Links>
                </main>
              </Card>
            );
          })}
        </MainCard>
      </CupCakeStyle>
    </Container>
  );
};
export default CupCakeSession;
