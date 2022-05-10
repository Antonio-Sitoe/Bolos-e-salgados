import React from 'react'
import { Container } from '../../styles/styles';
import { Main, ProdutoStyle, ShowPhotos } from './styles';
import { GET_PRODUTS_FOR_ID } from '../../services/Api';

import useFecth from '../../hooks/useFecth';
import ErroMessage from '../../components/Helper/ErroMessage';
import Loading from '../../components/Helper/Loading';
import InFormation from '../../components/InFormation/InFormation';
import Slide from '../../components/Slide/Slide';

const SinglePage = () => {
  const [showImage, setImage] = React.useState('');
  const { data, error, loading, request } = useFecth();
  const id = 1;

  React.useEffect(() => {
    (async () => {
      const { url, options } = GET_PRODUTS_FOR_ID(id);
      await request(url, options);
    })();
  }, [request, id]);

  React.useEffect(() => {
    if (data) setImage(data.assets[0].url);
  }, [data]);

  if (error) return <ErroMessage error={error} />;
  if (loading) return <Loading />;
  if (data) {
    return (
      <ProdutoStyle>
        <Container>
          <Main>
            <ShowPhotos showImage={showImage}>
              <Slide slide={data.assets} />
            </ShowPhotos>
            <InFormation showImage={showImage} data={data} />
          </Main>
        </Container>
      </ProdutoStyle>
    );
  }
  return null;
};

export default SinglePage;
