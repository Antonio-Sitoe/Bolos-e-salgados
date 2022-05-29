import React from 'react';
import { Title } from '../../styles/styles';
import { KitsForParty } from './styles';

import { toast } from 'react-toastify';
import Image from 'next/image';
import Button from '../../components/Forms/Button';

const PartykitSession = ({ kit: { kitImage, kitTitle, kitDescription } }) => {
  const notify = () =>
    toast.warn('KIT ainda nao esta disponivel', {
      icon: '🚀',
    });

  return (
    <KitsForParty>
      <main>
        <div>
          <Image src={kitImage.url} alt={kitTitle} width={300} height={300} />
        </div>
        <section>
          <Title>Bolo de chocolate</Title>
          <p>{kitDescription.text}</p>
          <Button loading={false} onClick={notify}>Ver maisVer mais</Button>
        </section>
      </main>
    </KitsForParty>
  );
};
export default PartykitSession;
