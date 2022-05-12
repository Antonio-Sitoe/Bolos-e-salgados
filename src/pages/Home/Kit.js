import React from 'react';
import { Container, Title } from '../../styles/styles';
import { KitsForParty } from './styles';
import Image from 'next/image';
import { toast } from 'react-toastify';

export const Kit = () => {
  const notify = () =>
    toast.warn('KIT ainda nao esta disponivel', {
      icon: '🚀',
    });

  return (
    <KitsForParty>
      <Container>
        <Image src='/image-encomendas.png' alt='' width={250} height={600} />
        <section>
          <Title>Bolo de chocolate</Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            ipsam, enim veniam ex temporibus aut quo et sapiente repudiandae
            dolorem animi magni! Architecto obcaecati nesciunt porro temporibus
            facere ut magni!
          </p>

          <button onClick={notify}>Aderir ao kit</button>
        </section>
      </Container>
    </KitsForParty>
  );
};
