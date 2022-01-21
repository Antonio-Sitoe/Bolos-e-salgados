import React from 'react';
import IntroOnPage from '../../components/IntroOnPage/IntroOnPage';
import Image from '../../components/Image/Image';
import { Container, Title } from '../../styles/styles';
import { Faqs, Faq as FaqStyle, FaqImage, FaqContent } from './style';

import whats from '../../Assets/whats-encomendas.svg';
import qt from '../../Assets/qtd.svg';
import comprar from '../../Assets/COMPRAR.svg';
import enc from '../../Assets/image-encomendas.png';

const encomendas = [
  {
    titulo: 'Escolha o seu produto',
    imagem: {
      url: enc,
      alt: 'encomendas',
    },
    descricao:
      'Cada mexida nas nossas panelas de doce é feita pensando no momento em que você dá aquela mordida grande, toma um gole de café e pensa: a vida é maravilhosa.Estamos de portas abertas esperando você para um cafezinho ou dois. Para um brigadeiro ou uma sobremesa tamanho família pra levar pra casa e comer depois.',
  },
  {
    titulo: 'Escolha a sua quantidade',
    imagem: {
      url: qt,
      alt: 'encomendas',
    },
    descricao:
      'Cada mexida nas nossas panelas de doce é feita pensando no momento em que você dá aquela mordida grande, toma um gole de café e pensa: a vida é maravilhosa.Estamos de portas abertas esperando você para um cafezinho ou dois. Para um brigadeiro ou uma sobremesa tamanho família pra levar pra casa e comer depois.',
  },
  {
    titulo: 'Clica em comprar',
    imagem: {
      url: comprar,
      alt: 'encomendas',
    },
    descricao:
      'Cada mexida nas nossas panelas de doce é feita pensando no momento em que você dá aquela mordida grande, toma um gole de café e pensa: a vida é maravilhosa.Estamos de portas abertas esperando você para um cafezinho ou dois. Para um brigadeiro ou uma sobremesa tamanho família pra levar pra casa e comer depois.',
  },
  {
    titulo: 'Combine pelo WhatsApp a hora e o local da entrega da encomenda',
    imagem: {
      url: whats,
      alt: 'encomendas',
    },
    descricao:
      'Cada mexida nas nossas panelas de doce é feita pensando no momento em que você dá aquela mordida grande, toma um gole de café e pensa: a vida é maravilhosa.Estamos de portas abertas esperando você para um cafezinho ou dois. Para um brigadeiro ou uma sobremesa tamanho família pra levar pra casa e comer depois.',
  },
];

const Faq = () => {
  return (
    <>
      <IntroOnPage text='Saiba como fazer encomendas conosco' />
      <Container>
        <Faqs>
          {encomendas.map(({ titulo, imagem, descricao }, id) => {
            return (
              <FaqStyle key={id}>
                <FaqImage>
                  <Image alt={imagem.alt} src={imagem.url} />
                </FaqImage>
                <FaqContent>
                  <Title>{titulo}</Title>
                  <p>{descricao}</p>
                </FaqContent>
              </FaqStyle>
            );
          })}
        </Faqs>
      </Container>
    </>
  );
};

export default Faq;
