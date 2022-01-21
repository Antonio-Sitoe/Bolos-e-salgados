import React from 'react';
import IntroOnPage from '../../../components/IntroOnPage/IntroOnPage';

import BorderTitles from '../../../components/BorderTitles/BorderTitles';
import useFecth from '../../../hooks/useFecth';
import Loading from '../../../components/Helper/Loading';
import ErroMessage from '../../../components/Helper/ErroMessage';
import Card from '../../../components/Card/Card';

import Encomendas from '../../../Assets/encomendas.jpg';
import { ProdutoStyle } from '../styles';
import { Container } from '../../../styles/styles';
import { Main } from '../../Home/styles';
import { GET_ALL_PRODUCTS } from '../../../services/Api';

import { GlobalContext } from '../../../Context/GlobalFuntions';

const DefaultProduts = () => {
  const { data, error, loading, request } = useFecth();
  const { filterProduts } = React.useContext(GlobalContext);
  const [Sweet, setSweet] = React.useState([]);
  const [Savory, setSavory] = React.useState([]);

  React.useEffect(() => {
    async function getProduts() {
      const { url, options } = GET_ALL_PRODUCTS();
      await request(url, options);
    }
    getProduts();
  }, [request]);

  React.useEffect(() => {
    if (data) {
      let SweetFiltered = filterProduts(data.data, 'doces');
      let SavoryFiltered = filterProduts(data.data, 'salgados');
      setSweet(SweetFiltered);
      setSavory(SavoryFiltered);
    }
  }, [data, filterProduts]);

  if (loading) return <Loading />;
  if (error) return <ErroMessage error={error} />;
  if (data)
    return (
      <ProdutoStyle>
        <IntroOnPage text='Bolos e Salgados' Bg={Encomendas} />
        <BorderTitles text='Bolos' />
        <Container>
          <Main>
            {Sweet.map((item) => (
              <Card attributes={item} key={item.id} />
            ))}
          </Main>
        </Container>
        <BorderTitles text='Salgados' />
        <Container>
          <Main>
            {Savory.map((item) => (
              <Card attributes={item} key={item.id} />
            ))}
          </Main>
        </Container>
      </ProdutoStyle>
    );
  return null;
};

export default DefaultProduts;
