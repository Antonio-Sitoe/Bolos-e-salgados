import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { animeLeft, AnimeLeft } from '../about/styles';

export const UserAcountEditStyle = styled.form`
  display: grid;
  gap: 1rem;
  max-width: 450px;
  padding: 1rem;
  width: 100%;
  animation: ${animeLeft} 0.3s;

  select {
    background: ${theme.colors.white};
    border: 3px solid ${theme.colors.grey};
    box-sizing: border-box;
    border-radius: 4px;
    padding: 1rem;
    width: 100%;
    outline: none;
    &:hover,
    &:focus {
      border: 3px solid ${theme.colors.blackHover};
    }
  }

  h1 {
    margin-bottom: 2rem;
  }

  a {
    padding: 0.6rem 0;
    color: ${theme.colors.link};
  }
  p {
    a {
      color: ${theme.colors.tomato};
    }
  }
`;

export const UserPage = styled.main`
  margin: 6rem 0;
`;
export const UserIntro = styled.section`
  padding: 2rem 0;
  text-align: center;
`;
export const UserMain = styled.section`
  display: grid;
  grid-template-columns: 20rem 1fr;
  gap: 1rem;
  padding: 1rem 0;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
export const UserDash = styled.aside`
  border-radius: 4px;
  ul {
    display: grid;
    li {
      border-bottom: 1px solid #fae9de;
      cursor: pointer;
      display: flex;
      a,
      button {
        text-align: left;
        border: none;
        width: 100%;
        display: block;
        padding: 1rem;
        font-family: Lato;
        font-weight: bold;
        color: ${theme.colors.white};
        background: ${theme.colors.base};
        &:hover,
        &:focus {
          color: ${theme.colors.black};
          background: ${theme.colors.baseSmooth};
        }
        &.active {
          color: ${theme.colors.black};
          background: ${theme.colors.baseSmooth};
        }
      }
    }

    @media (max-width: 800px) {
      grid-template-columns: 1fr 1fr 1fr;
      li {
        a {
        }
      }
    }
  }
`;
export const UserContent = styled.section`
  padding: 0 3rem;

  @media (max-width: 800px) {
    padding: 0;
  }
`;
export const List = styled.section`
  animation: ${AnimeLeft} 0.3s;
  ul {
    display: grid;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  div {
    margin: 2rem 0;
    a {
      text-align: center;
      max-width: 10rem;
      padding: 1rem;
      border-radius: 4px;
    }
  }
`;
export const Subtitle = styled.h2`
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
  margin-bottom: 1rem;

  &::after {
    content: '';
    width: 2rem;
    height: 2px;
    display: block;
    margin: 0.4rem 0;
    background: ${theme.colors.blackHover};
  }
`;
export const Order = styled.main`
  animation: ${AnimeLeft} 0.3s;
  padding: 0 3rem;
  div {
    display: flex;
    position: relative;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    table {
      border: 1px solid whitesmoke;
      border-radius: 4px;
      width: 100%;
      thead {
        background: ${theme.colors.baseSmooth};
        tr {
          th {
            font-weight: bold;
          }
        }
      }
      th,
      td {
        padding: 1rem;
        border: 1px solid whitesmoke;
        text-align: center;
      }
      tbody {
        tr {
          td {
            a {
              width: 100%;
              padding: 1rem;
              display: flex;
              align-items: center;
              justify-content: center;
              background: ${theme.colors.base};
              color: ${theme.colors.baseSmooth};
              &:hover {
                background: ${theme.colors.baseSmooth};
                color: ${theme.colors.base};
              }
            }
            &:last-child {
              padding: 0;
            }
          }
        }
      }
    }

    @media (max-width: 80rem) {
      table {
        flex: 1 0 700px;
        th,
        td {
          padding: 1rem 0.3rem;
          border: 1px solid whitesmoke;
          text-align: center;
        }
        tbody {
          tr {
            td {
              a {
                padding: 1rem 0.3rem;
              }
            }
          }
        }
      }
    }
  }
`;
