import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { AnimeLeft } from '../about/styles';

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
      a {
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
      background: ${theme.colors.grey};
      text-align: center;
      padding: 0.6rem 1rem;
      border-radius: 4px;
      border: 3px solid #e0dfdf;
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
              display: grid;
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
