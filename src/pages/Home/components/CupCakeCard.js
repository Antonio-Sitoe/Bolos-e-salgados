import { Card, CupCakeStyle, MainCard } from './styles';
import { Title, Container, Links } from '../../../styles/styles';
import Image from '../../../components/Image/Image';
const CupCakeCard = ({ cupcakes }) => {
  if (cupcakes)
    return (
      <Container>
        <CupCakeStyle>
          <Title>CupCAKES PARA a sua festa</Title>
          <MainCard>
            {cupcakes.map((item) => {
              console.log(item);
              return (
                <Card key={item.id}>
                  <Image
                    alt={item.name}
                    src={
                      'https://cdn.chec.io/merchants/37782/assets/0Ae8crLdmY76QtOQ|cupcake2.jpg'
                    }
                  />
                  <main>
                    <h1>{item.name}</h1>
                    <h4>{item.price.formatted_with_code}</h4>
                    <Links to={`product/${item.id}`}>Comprar</Links>
                  </main>
                </Card>
              );
            })}
          </MainCard>
        </CupCakeStyle>
      </Container>
    );
  return null;
};
export default CupCakeCard;
