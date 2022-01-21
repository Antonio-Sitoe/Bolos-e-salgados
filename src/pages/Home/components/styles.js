import styled from 'styled-components';
import Bg from '../../../Assets/kitBg.svg';
import { AnimeIntro } from '../../../styles/styles';
import { theme } from '../../../styles/theme';

export const KitsForParty = styled.section`
  background: url(${Bg}) no-repeat;
  background-size: cover;
  background-position: center;
  margin: 0 0 2rem 0;
  padding: 14rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: 0.3s ${AnimeIntro};

  > div {
    width: 100%;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.6rem;

    div {
      width: 100%;
      img {
        max-width: 300px;
        margin: 0 auto;
      }
    }

    section {
      max-width: 20rem;
      margin: 0 auto;
      h1,
      p {
        margin: 2rem 0;
      }

      h1 {
        &::after {
          content: '';
          width: 2rem;
          height: 2px;
          background: #252525;
          display: block;
          margin: 0.6rem 0;
        }
      }

      button {
        background: #a86b3c;
        opacity: 0.5;
        border: none;
        border-radius: 1rem;
        padding: 0.6rem 3rem;
        color: whitesmoke;
        cursor: pointer;
        z-index: 1;
      }

      @media (max-width: 600px) {
        text-align: center;
        h1,
        p {
          margin: 1rem 0;
        }
        h1 {
          &::after {
            content: '';
            width: 2rem;
            height: 2px;
            background: #252525;
            display: block;
            margin: 0.6rem auto;
          }
        }
      }
    }
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }
`;
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

export const CupCakeStyle = styled.section`
  margin: 6rem 0;
  animation: 0.3s ${AnimeIntro};
  h1 {
    text-align: center;
  }
`;

export const MainCard = styled.div`
  margin: 2rem 0 6rem 0;
  animation: 0.3s ${AnimeIntro};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  @media (max-width: 800px) {
    gap: 1rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  animation: 0.3s ${AnimeIntro};
  background: ${theme.colors.baseSmooth};
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  gap: 1rem;
  border-radius: 4px;

  main {
    display: grid;
    text-align: center;
    padding: 1.5rem;
    grid-template-rows: 1fr 1fr 2.5rem;

    h1 {
      text-transform: uppercase;
      line-height: 1.5;
    }
    h4 {
      font-size: 1rem;
      font-weight: bold;
    }
    a {
      &:hover {
        background: #252525 !important;
        color: whitesmoke;
      }
    }
    @media (max-width: 800px) {
      padding: 1rem;
    }
    @media (max-width: 600px) {
      gap: 1rem;
    }
  }
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;
