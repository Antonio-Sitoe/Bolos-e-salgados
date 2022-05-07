import React from 'react';
import IntroOnPage from '../../components/IntroOnPage/IntroOnPage';
import Image from 'next/image';
import { Container, Title } from '../../styles/styles';
import { Faqs, Faq as FaqStyle, FaqImage, FaqContent } from './style';
import { FaqContentList } from '../../Content/FaqContent';

const Faq = () => {
  return (
    <>
      <IntroOnPage text='Saiba como fazer encomendas conosco' />
      <Container>
        <Faqs>
          {FaqContentList.map(({ titulo, imagem, descricao }, id) => {
            return (
              <FaqStyle key={id}>
                <FaqImage>
                  <Image
                    width={300}
                    height={300}
                    alt={imagem.alt}
                    src={`/${imagem.url}`}
                  />
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
