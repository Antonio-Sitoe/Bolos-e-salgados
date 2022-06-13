import React from 'react';
import { Main } from './styles';
import Card from '../../components/Card/Card';
import Sumary from '../../components/Sumary/Sumary';
import { Container, Links } from '../../styles/styles';
import { DivConfir } from './styles';
import { useRouter } from 'next/router';

const FeaturedProductSession = ({ featured }) => {
  const router = useRouter();
  return (
    <Container>
      {featured.featuredData.map(({ title, description, id }, i) => {
        const arr = ['doces', 'salgados'];
        return (
          <div key={id}>
            <Sumary title={title} description={description} />
            <Main>
              {featured.productData[arr[i]].map(({ attributes, id }, index) => {
                if (router.pathname !== '/product' && index >= 4) return null;
                return <Card key={id} attributes={attributes} id={id} />;
              })}
            </Main>
            {router.pathname === '/product' ? null : (
              <DivConfir>
                <Links href='/product'>Confira Todos</Links>
              </DivConfir>
            )}
          </div>
        );
      })}
    </Container>
  );
};

export default FeaturedProductSession;
