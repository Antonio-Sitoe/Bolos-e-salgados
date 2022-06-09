import React from 'react';
import Banner from '../components/Banner/banner';
import CupCakeSession from '../components/CupCakeSession/CupCakeSession';
import ErroMessage from '../components/Helper/ErroMessage';
import FeaturedProductSession from './home/FeaturedProductSession';
import { GetStaticProps } from 'next';
import { HomeProps } from '../Types/Interfaces';
import { GET_HOME_CONTENT } from '../services/Api';

const Home = (props: HomeProps) => {
  if (props.error) {
    return <ErroMessage error={'Erro'} />
  }
  return (
    <>
      <Banner bannerProprietes={props.banner} />
      <FeaturedProductSession />
      {/* <PartykitSession kit={props.kit} /> */}
      <CupCakeSession />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { url, options } = GET_HOME_CONTENT();
  const response = await fetch(url, options)
  const json = await response.json();
  const data = {
    banner: {
      banner_title: json.data.attributes.banner_title,
      Banner_img: json.data.attributes.Banner_img.data.attributes.url
    },
    error: false
  }
  return {
    props: data
  }
}