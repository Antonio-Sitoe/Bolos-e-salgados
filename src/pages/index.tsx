import React from 'react';
import Banner from '../components/Banner/banner';
import PartykitSession from './Home/PartykitSession';
import CupCakeSession from '../components/CupCakeSession/CupCakeSession';
import { graphcms } from '../services/GraphCms';
import { HOME_QUERY } from '../services/Querys';
import { GetStaticProps } from 'next';
import FeaturedProductSession from './Home/ FeaturedProductSession';
import { HomeProps } from '../Types/Interfaces';


const Home = (props: HomeProps) => {

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
  const banner_image = homes[0].banner_image;
  const kit = homes[0].kit;

  return {
    props: {
      banner_image,
      kit
    }
  }
}