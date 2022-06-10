import React from 'react';
import Banner from '../components/Banner/banner';
import CupCakeSession from '../components/CupCakeSession/CupCakeSession';
import ErroMessage from '../components/Helper/ErroMessage';
import FeaturedProductSession from './home/FeaturedProductSession';
import { GetStaticProps } from 'next';
import { HomeProps } from '../Types/Interfaces';
import { GET_ALL_PRODUCTS, GET_HOME_CONTENT } from '../services/Api';
import FetchData from '../components/Helper/FetchData';
import PartykitSession from './home/PartykitSession';




const Home = (props: HomeProps) => {
  if (props.error) {
    return <ErroMessage error={'Erro'} />
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

function transformData(produtData) {
  return produtData.reduce((acc, item) => {
    switch (item.attributes.category) {
      case 'doces':
        acc.doces.push(item)
        break;
      case 'salgados':
        acc.salgados.push(item)
        break;
      case 'cup':
        acc.cup.push(item)
        break;
      default:
        throw new Error('Erro')
    }
    return acc
  }, {
    doces: [],
    salgados: [],
    cup: []
  })
}
function ResponseData(json, produtDataJson) {
  return {
    banner: {
      banner_title: json.data.attributes.banner_title,
      Banner_img: json.data.attributes.Banner_img.data.attributes.url
    },
    kit: {
      title: json.data.attributes.kit.title,
      description: json.data.attributes.kit.description,
      image: {
        name: json.data.attributes.kit.image.data.attributes.name,
        url: json.data.attributes.kit.image.data.attributes.url,
      },
    },
    featured: {
      featuredData: json.data.attributes.destaque,
      productData: produtDataJson
    },
    error: false
  }
}
export const getStaticProps: GetStaticProps = async () => {
  const homeOptions = GET_HOME_CONTENT();
  const productsOptions = GET_ALL_PRODUCTS()
  const json = await FetchData(homeOptions);
  const produtData = await FetchData(productsOptions);
  const produtDataJson = transformData(produtData.data);
  const data = ResponseData(json, produtDataJson)

  if (json && produtData && produtDataJson) {
    return {
      props: data
    }
  } else {
    return {
      props: {
        error: true
      }
    }
  }
}