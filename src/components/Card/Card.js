import React from 'react';
import Image from '../Image/Image';
import { Links } from '../../styles/styles';
import { CardStyle } from './styles';

const Card = ({ attributes }, key) => {
  const pathname = window.location.pathname.includes('/product');
  return (
    <CardStyle key={key}>
      <Image src={attributes.image.url} alt={attributes.name} />
      <h3>{attributes.name}</h3>
      <p>{attributes.price.formatted_with_code}</p>
      <Links
        to={pathname ? `/product/${attributes.id}` : `product/${attributes.id}`}
      >
        Comprar
      </Links>
    </CardStyle>
  );
};

export default Card;
