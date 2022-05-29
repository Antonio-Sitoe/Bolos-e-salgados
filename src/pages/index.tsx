import React from 'react';
import Banner from '../components/Banner/banner';
import PartykitSession from './home/PartykitSession';
import CupCakeSession from '../components/CupCakeSession/CupCakeSession';
import ErroMessage from '../components/Helper/ErroMessage';

import FeaturedProductSession from './home/FeaturedProductSession';

import { graphcms } from '../services/GraphCms';
import { HOME_QUERY, PRODUTS_QUERY } from '../services/Querys';
import { GetStaticProps } from 'next';
import { HomeProps } from '../Types/Interfaces';


const Home = (props: HomeProps) => {

  if (props.error) {
    return <ErroMessage error={'Erro'} />
  }

  return (
    <>
      <Banner bannerProprietes={props.banner_image} />
      <FeaturedProductSession />
      <PartykitSession kit={props.kit} />
      <CupCakeSession />
    </>
  );
};

export default Home;


export const getStaticProps: GetStaticProps = async () => {
  const { homes } = await graphcms.request(HOME_QUERY);
  const { products } = await graphcms.request(PRODUTS_QUERY)


  if (homes.length && products.length) {
    const banner_image = homes[0].banner_image;
    const kit = homes[0].kit;


    return {
      props: {
        banner_image,
        products,
        kit,
        error: false
      }
    }
  } else {
    return {
      props: {
        error: true
      }
    }
  }
}