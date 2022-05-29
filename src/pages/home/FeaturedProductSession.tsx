import { Main } from './styles';
import Card from '../../components/Card/Card';
import Sumary from '../../components/Sumary/Sumary';
import { Container, Links } from '../../styles/styles';
import { DivConfir } from './styles';

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

const FeaturedProductSession = () => {
  return (
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
  )
}

export default FeaturedProductSession