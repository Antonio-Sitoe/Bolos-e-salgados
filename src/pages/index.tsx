import { GetStaticProps } from 'next';
import Banner from '../components/Banner/banner';
import CupCakeSession from '../components/CupCakeSession/CupCakeSession';
import ErroMessage from '../components/Helper/ErroMessage';
import FetchData from '../components/Helper/FetchData';
import transformData from '../components/Helper/transformData';
import { GET_ALL_PRODUCTS, GET_HOME_CONTENT } from '../services/Api';
import { IPagesProps } from '../Types/Interfaces';
import FeaturedProductSession from './home/FeaturedProductSession';
import PartykitSession from './home/PartykitSession';

const Home = (props: IPagesProps) => {
  if (props.error) {
    return <ErroMessage error={'Erro'} />;
  }
  return (
    <>
      <Banner bannerProprietes={props.banner} />
      <FeaturedProductSession featured={props.featured} />
      <PartykitSession kit={props.kit} />
      <CupCakeSession cupCakeData={props.featured.productData.cup} />
    </>
  );
};

export default Home;

export function ResponseData(json, produtDataJson) {
  return {
    banner: {
      banner_title: json.data.attributes.banner_title,
      Banner_img: json.data.attributes.Banner_img.data.attributes.url || '',
    },
    kit: json.data.attributes.kit && {
      title: json.data.attributes.kit?.title,
      description: json.data.attributes.kit?.description,
      image: {
        name: json.data.attributes?.kit?.image.data.attributes.name,
        url: json.data.attributes?.kit?.image.data.attributes.url,
      },
    },
    featured: {
      featuredData: json.data.attributes.destaque,
      productData: produtDataJson,
    },
    error: false,
  };
}
export const getStaticProps: GetStaticProps = async () => {
  const homeOptions = GET_HOME_CONTENT(1);
  const productsOptions = GET_ALL_PRODUCTS();
  const json = await FetchData(homeOptions);
  const produtData = await FetchData(productsOptions);
  const produtDataJson = transformData(produtData.data);

  if (json && produtData && produtDataJson) {
    const data = ResponseData(json, produtDataJson);
    return {
      props: data,
    };
  } else {
    return {
      props: {
        error: true,
      },
    };
  }
};
