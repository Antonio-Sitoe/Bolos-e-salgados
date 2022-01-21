import styled, { keyframes } from "styled-components";

const Skeleton = keyframes`
  from {
    background-position: 0px;
  }
  to {
    background-position: -200px;
  }
`;

export const ImageWrapper = styled.div`
  display: grid;

  div {
    grid-area: 1/1;
    height: 100%;
    background-image: linear-gradient(90deg, #eee, 0px, #fff 50%, #eee 100%);
    background-color: #eee;
    background-size: 200%;
    animation: ${Skeleton} 1.5s infinite linear;
  }

  img {
    display: block;
    max-width: 100%;
    grid-area: 1/1;
    opacity: 0;
    transition: 0.2s;
  }
`;
