import { GetStaticProps } from 'next';
import ErroMessage from '../../components/Helper/ErroMessage';
import FetchData from '../../components/Helper/FetchData';
import IntroOnPage from '../../components/IntroOnPage/IntroOnPage';
import { GET_ABOUT_CONTENT } from '../../services/Api';
import { AboutStyle, Content } from './styles';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';

const About = ({ error, data }) => {
  if (error) {
    return <ErroMessage error={'Erro no servidor'} />;
  }
  return (
    <>
      <Head>
        <title>Sobre | Mila Delicious</title>
      </Head>
      <IntroOnPage text={data.title} Bg={data.banner_img} />
      <AboutStyle>
        {data.content.map(({ id, about }) => {
          return (
            <Content key={id}>
              <ReactMarkdown>{about}</ReactMarkdown>
            </Content>
          );
        })}
      </AboutStyle>
    </>
  );
};

export default About;

function tranformData(data) {
  if (data)
    return {
      title: data.attributes.title,
      content: data.attributes.content,
      banner_img: data.attributes.banner_img.data.attributes.url,
    };
}

export const getStaticProps: GetStaticProps = async () => {
  const aboutData = GET_ABOUT_CONTENT();

  const { data } = await FetchData(aboutData);

  if (data) {
    return {
      props: {
        data: tranformData(data),
        error: false,
      },
    };
  } else {
    return {
      props: {
        error: true,
      },
    };
  }
};
