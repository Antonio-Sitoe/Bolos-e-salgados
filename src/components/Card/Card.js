import Image from 'next/image';
import React from 'react';
import { Links } from '../../styles/styles';
import { CardStyle } from './styles';

const Card = ({ attributes }, key) => {
  return (
    <CardStyle key={key}>
      <Image
        src={attributes.image.url}
        alt={attributes.name}
        width='400'
        height='200'
      />

      <h3>{attributes.name}</h3>
      <p>{attributes.price}</p>
      <Links href=''>Comprar</Links>
    </CardStyle>
  );
};

export default Card;
