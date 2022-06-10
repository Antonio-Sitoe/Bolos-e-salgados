import React from 'react';
import Image from 'next/image';
import { Links } from '../../styles/styles';
import { CardStyle } from './styles';

const Card = ({ attributes, id }, key) => {
  return (
    <CardStyle key={key}>
      <Image
        src={attributes.image.data[0].attributes.url}
        alt={attributes.image.data[0].attributes.name}
        height={320}
        width={600}
      />
      <h3>{attributes.name}</h3>
      <p>{attributes.price}</p>
      <Links href={`product/${id}`}>Comprar</Links>
    </CardStyle>
  );
};

export default Card;
