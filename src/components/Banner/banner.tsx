import { AnimeIntro, Container, Links, Title } from '../../styles/styles';
import { BsFillTelephoneFill } from 'react-icons/bs';


import Image from '../Image/Image';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import Link from 'next/link';

export const BannerStyle = styled.div`
  display: grid;
  animation: 0.3s ${AnimeIntro};
  img {
    grid-area: 1/1;
    @media (max-width: 500px) {
      height: 20rem;
    }

    @media (min-width: 1200px) {
      height: 35rem;
    }
  }
  div {
    grid-area: 1/1;
    main {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h1 {
        color: ${theme.colors.white};
        max-width: 600px;
        margin: 2rem;
        line-height: 1;
        text-transform: uppercase;
        text-align: center;
      }
      a {
        padding: 1rem;
        margin: 1rem 0;
        svg {
          margin-right: 1rem;
        }
      }
    }
  }
`;


const Banner = () => {
  return (
    <BannerStyle>
      <Image src="/banner.jpg" alt='background image'/>
      <Container>
        <main>
          <Title>Os melhores bolos você encontra aqui.</Title>
          <Link href="produt">
            <Links>
              <BsFillTelephoneFill />
              Encomendar
            </Links>
          </Link>
        </main>
      </Container>
    </BannerStyle>
  );
};
export default Banner;
