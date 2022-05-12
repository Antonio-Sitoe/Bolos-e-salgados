import { AnimeIntro, Container, Links, Title } from '../../styles/styles';
import { BsFillTelephoneFill } from 'react-icons/bs';
import Image from 'next/image';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import Link from 'next/link';

export const BannerStyle = styled.div`
  display: grid;
  animation: 0.3s ${AnimeIntro};

    main {
      grid-area: 1/1;
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
        text-align: center;
        font-size: 2rem;
        font-family: 'Lobster', cursive;

        /* font-family: ${theme.fonts.OleoScript}; */
      }
      a {
        padding: 1rem;
        margin: 1rem 0;
        svg {
          margin-right: 1rem;
        }
      }
    }
`;

export const BannerBackgroundImage = styled.div`
   grid-area: 1/1;
   background: url('/banner.jpg') no-repeat center center;
   background-size:cover ;
      height: 20rem;
    @media (max-width: 500px) {
      height: 15rem;
    }

    @media (min-width: 1200px) {
      height: 35rem;
    }
`


const Banner = () => {
  return (
    <BannerStyle>
      <BannerBackgroundImage />
      {/* <Image src="/banner.jpg" alt='background image' width={1200} height={600} /> */}

      <main>
        <h1>Os melhores bolos você encontra aqui.</h1>
        <Link href="produt">
          <Links>
            <BsFillTelephoneFill />
            Encomendar
          </Links>
        </Link>
      </main>

    </BannerStyle>
  );
};
export default Banner;
