import React from 'react';
import { Container, Links, Title } from '../../styles/styles';
import { KitsForParty } from './styles';

import { toast } from 'react-toastify';
import Image from '../../components/Image/Image';
import Button from '../../components/Forms/Button';
import Link from 'next/link';

const PartykitSession = ({ kit: { kitImage, kitTitle, kitDescription } }) => {
  const notify = () =>
    toast.warn('KIT ainda nao esta disponivel', {
      icon: '🚀',
    });


  return (
    <KitsForParty>
      <main>
        <Image src={kitImage.url} alt={kitTitle} />
        <section>
          <Title>Bolo de chocolate</Title>
          <p>{kitDescription.text}</p>
          <Link href="/product" passHref>
            <Links>Ver mais</Links>
          </Link>
        </section>
      </main>
    </KitsForParty>
  );
};
export default PartykitSession;
