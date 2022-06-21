import React from 'react';
import { Container } from '../../styles/styles';
import { Main, ProdutoStyle } from './styles';
import { GET_PRODUTS_FOR_ID } from '../../services/Api';
import useFecth from '../../hooks/useFecth';
import ErroMessage from '../../Helper/ErroMessage';
import Loading from '../../Helper/Loading';
import Slide from '../../components/Slide/Slide';
import { useRouter } from 'next/router';
import ProductInformation from '../../components/ProductInformation/ProductInformation';
import { IshowImageArray } from '../../Types/Interfaces';

const SinglePage = () => {
  const [showImage, setImage] = React.useState<IshowImageArray>([]);
  const { data, error, loading, request } = useFecth();
  const { query } = useRouter();

  React.useEffect(() => {
    (async () => {
      const { url, options } = GET_PRODUTS_FOR_ID(query.id);
      await request(url, options);
    })();
  }, [request, query]);

  React.useEffect(() => {
    if (data) setImage(data.data.attributes.image.data);
  }, [data]);

  if (error) return <ErroMessage error={error} />;
  if (loading) return <Loading />;
  if (data) {
    return (
      <ProdutoStyle>
        <Container>
          <Main>
            <section>
              <Slide slide={showImage} />
            </section>
            <ProductInformation data={data.data} showImage={showImage} />
          </Main>
        </Container>
      </ProdutoStyle>
    );
  }
  return null;
};

export default SinglePage;
