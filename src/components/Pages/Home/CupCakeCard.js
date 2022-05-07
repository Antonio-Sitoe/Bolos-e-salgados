import { Card, CupCakeStyle, MainCard } from './styles';
import { Title, Container, Links } from '../../../styles/styles';
import Image from 'next/image';

const cupcakes = [
  {
    id: Math.random() * 50,
    name: 'Bolo de chocolate',
    price: 1500,
  },
  {
    id: Math.random() * 50,
    name: 'Bolo de chocolate',
    price: 1500,
  },
];
const CupCakeCard = () => {
  return (
    <Container>
      <CupCakeStyle>
        <Title>CupCAKES PARA a sua festa</Title>
        <MainCard>
          {cupcakes.map((item) => {
            return (
              <Card key={item.id}>
                <Image alt={item.name} src='/card.svg' width={200} height={250} />
                <main>
                  <h1>{item.name}</h1>
                  <h4>{item.price}</h4>
                  <Links to={`product/${item.id}`}>Comprar</Links>
                </main>
              </Card>
            );
          })}
        </MainCard>
      </CupCakeStyle>
    </Container>
  );
};
export default CupCakeCard;
