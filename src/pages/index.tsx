import styled from 'styled-components';
import Card from '../components/Card/Card';
import Banner from '../components/Banner/banner';
import Sumary from '../components/Sumary/Sumary';
import useFecth from '../hooks/useFecth';

import { Kit } from '../components/Pages/Home/Kit';
import { Container, Links } from '../styles/styles';

import { GET_ALL_PRODUCTS } from '../../services/Api';

import Loading from '../../components/Helper/Loading';
import ErroMessage from '../../components/Helper/ErroMessage';
import CupCakeCard from '../components/Pages/Home/CupCakeCard';

export const Main = styled.main`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

export const DivConfir = styled.div`
  margin: 6rem 0;
  a {
    max-width: 20rem;
    margin: 0 auto;
    padding: 1rem;
    border-radius: 3rem;
  }
`;


const content = [
  {
    id: Math.floor(Math.random() * 100),
    name: 'Bolo de chocolate',
    price: 1500,
    image: {
      url: '/card.svg',
    },
  },
  {
    id: Math.floor(Math.random() * 100),
    name: 'Bolo de chocolate',
    price: 1500,
    image: {
      url: '/card.svg',
    },
  },
  {
    id: Math.floor(Math.random() * 100),
    name: 'Bolo de chocolate',
    price: 1500,
    image: {
      url: '/card.svg',
    },
  },
  {
    id: Math.floor(Math.random() * 100),
    name: 'Bolo de chocolate',
    price: 1500,
    image: {
      url: '/card.svg',
    },
  },
];

const subtitles = [
  {
    title: 'OS DOCES EM DESTAQUES',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'SALGADOS EM DESTAQUE',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const Home = () => {
  const { data, error, loading, request } = useFecth();



  // if (error) return <ErroMessage error={error} />;
  // if (loading) return <Loading />;

  // if (data)
  return (
    <>      <Banner />
      <Container>
        {subtitles.map(({ title, description }) => {
          return (
            <>
              <Sumary
                title='OS DOCES EM DESTAQUES'
                description={
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                }
              />
              <Main>
                {content.map((item) => {
                  return <Card key={item.id} attributes={item} />;
                })}
              </Main>
              <DivConfir>
                <Links href='product'>Confira Todos</Links>
              </DivConfir>
            </>
          );
        })}
      </Container>
      <Kit />
      <CupCakeCard />

    </>
  );
  return null;
};

export default Home;
