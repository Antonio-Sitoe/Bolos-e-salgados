import React from 'react';
import { ImageWrapper } from './styles';

const Image = ({ src, alt, ...rest }) => {
  const [skeleton, setSkeleton] = React.useState(true);
  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }
  return (
    <ImageWrapper>
      {skeleton && <div />}
      <img {...rest} onLoad={handleLoad} src={src} alt={alt} />
    </ImageWrapper>
  );
};

export default Image;
