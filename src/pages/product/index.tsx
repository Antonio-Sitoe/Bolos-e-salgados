import { ProdutoStyle } from './styles';
import IntroOnPage from '../../components/IntroOnPage/IntroOnPage';
import { GetServerSideProps } from 'next';
import FetchData from '../../Helper/FetchData';
import transformData from '../../Helper/transformData';
import { GET_ALL_PRODUCTS, GET_HOME_CONTENT } from '../../services/Api';
import ErroMessage from '../../Helper/ErroMessage';
import { IPagesProps } from '../../Types/Interfaces';
import { ResponseData } from '../../Helper/ResponseData';
import FeaturedProductSession from '../../components/homeComponents/FeaturedProductSession';
import CupCakeSession from '../../components/CupCakeSession/CupCakeSession';
import Head from 'next/head';

function product(props: IPagesProps) {
  if (props.error) {
    return <ErroMessage error={'Erro'} />;
  }
  return (
    <>
      <Head>
        <title>Todos os produtos</title>
        <meta name='description' content='Minha conta' />
      </Head>
      <ProdutoStyle>
        <IntroOnPage
          text={props.banner.banner_title}
          Bg={props.banner.Banner_img}
        />
        <FeaturedProductSession featured={props.featured} />
        <CupCakeSession cupCakeData={props.featured.productData.cup} />
      </ProdutoStyle>
    </>
  );
}
export default product;

export const getServerSideProps: GetServerSideProps = async () => {
  const bannerContent = GET_HOME_CONTENT(2);
  const productsOptions = GET_ALL_PRODUCTS();
  try {
    const { data } = await FetchData(productsOptions);
    const bannerData = await FetchData(bannerContent);
    const produtDataJson = transformData(data);

    if (data && bannerData && produtDataJson) {
      const response = ResponseData(bannerData, produtDataJson);
      return {
        props: response,
      };
    }
  } catch (error) {
    return {
      props: {
        error: true,
      },
    };
  }
};
