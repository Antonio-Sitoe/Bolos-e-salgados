import React from 'react';
import Card from '../../components/Card/Card';
import Sumary from '../../components/Sumary/Sumary';
import ErroMessage from '../../components/Helper/ErroMessage';
import CupCakeCard from './components/CupCakeCard';
import useFecth from '../../hooks/useFecth';
import Banner from './components/banner';
import Loading from '../../components/Helper/Loading';
import { Kit } from './components/Kit';
import { Container, Links } from '../../styles/styles';
import { DivConfir, Main } from './styles';
import { GET_ALL_PRODUCTS } from '../../services/Api';
import { GlobalContext } from '../../Context/GlobalFuntions';

const Home = () => {
  const { data, error, loading, request } = useFecth();
  const { filterProduts } = React.useContext(GlobalContext);
  const [sweet, setSweet] = React.useState([]);
  const [savory, setSavory] = React.useState([]);
  const [kit, setKIt] = React.useState([]);
  const [cupcake, setCupCake] = React.useState([]);

  React.useEffect(() => {
    async function fetchHome() {
      const { url, options } = GET_ALL_PRODUCTS();
      await request(url, options);
    }
    fetchHome();
  }, [request]);

  React.useEffect(() => {
    if (data) {
      let sweet = filterProduts(data.data, 'doces');
      let savory = filterProduts(data.data, 'salgados');
      let kit = filterProduts(data.data, 'kit');
      let cupcake = filterProduts(data.data, 'cupcakes');
      setSweet(sweet);
      setSavory(savory);
      setKIt(kit);
      setCupCake(cupcake);
    }
  }, [data, filterProduts]);

  if (error) return <ErroMessage error={error} />;
  if (loading) return <Loading />;
  console.log(data);

  if (data)
    return (
      <>
        <Banner />
        <Container>
          <Sumary
            title='OS DOCES EM DESTAQUES'
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
          />
          <Main>
            {sweet.map((item) => {
              return <Card key={item.id} attributes={item} />;
            })}
          </Main>
          <DivConfir>
            <Links to='product'>Confira Todos</Links>
          </DivConfir>
        </Container>
        <Container>
          <Sumary
            title='SALGADOS EM DESTAQUE'
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
          />
          <Main>
            {savory.map((item) => {
              return <Card key={item.id} attributes={item} />;
            })}
          </Main>
          <DivConfir>
            <Links to='product'>Confira Todos</Links>
          </DivConfir>
        </Container>
        <Kit kit={kit} />
        <CupCakeCard cupcakes={cupcake} />
      </>
    );
  return null;
};

export default Home;
