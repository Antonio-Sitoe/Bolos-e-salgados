import React from 'react';
import Image from '../Image/Image';
import { ContainerSlides, Content, Nav } from './style';
import { FcNext, FcPrevious } from 'react-icons/fc';

const Slide = ({ slide }) => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function slidePrev() {
    if (active > 0) setActive(active - 1);
  }

  function slideNext() {
    if (active < slide.length - 1) setActive(active + 1);
  }
  return (
    <ContainerSlides>
      <Content
        ref={contentRef}
        style={{ transform: `translateX(${position}px)` }}
      >
        {slide.map((slide) => {
          return (
            <Image key={slide.id} src={slide.url} alt={slide.alternativeText} />
          );
        })}
      </Content>
      <Nav>
        <button onClick={slidePrev}>
          <FcPrevious />
        </button>
        <button onClick={slideNext}>
          <FcNext />
        </button>
      </Nav>
    </ContainerSlides>
  );
};

export default Slide;
