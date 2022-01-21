import React from 'react';
import { Container, Title } from '../../../styles/styles';
import { KitsForParty } from './styles';
import Image from '../../../components/Image/Image';
import { toast } from 'react-toastify';

export const Kit = ({ kit }) => {
  const notify = () =>
    toast.warn('KIT ainda nao esta disponivel', {
      icon: '🚀',
    });

  return (
    <KitsForParty>
      <Container>
        <Image src={kit[0].image.url} alt={kit[0].name} />
        <section>
          <Title>{kit[0].name}</Title>
          <div dangerouslySetInnerHTML={{ __html: kit[0].description }} />
          <button onClick={notify}>Aderir ao kit</button>
        </section>
      </Container>
    </KitsForParty>
  );
};
