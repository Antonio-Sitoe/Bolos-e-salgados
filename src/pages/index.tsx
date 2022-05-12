import styled from 'styled-components';
import Card from '../components/Card/Card';
import Banner from '../components/Banner/banner';
import Sumary from '../components/Sumary/Sumary';
import { Kit } from './Home/Kit';
import { Container, Links } from '../styles/styles';

import CupCakeCard from './Home/CupCakeCard';

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
export const content = [
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

type Subtitles = Array<{ title: string, description: string }>
export const subtitles: Subtitles = [
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

  return (
    <> 
    <Banner />
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
              <DivConfir>
                <Links href='/product'>Confira Todos</Links>
              </DivConfir>
            </div>
          );
        })}
      </Container>
      <Kit />
      <CupCakeCard />
    </>
  );
};

export default Home;
