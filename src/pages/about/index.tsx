import { GetStaticProps } from 'next';
import ErroMessage from '../../components/Helper/ErroMessage';
import FetchData from '../../components/Helper/FetchData';
import IntroOnPage from '../../components/IntroOnPage/IntroOnPage';
import { GET_ABOUT_CONTENT } from '../../services/Api';
import { AboutStyle, Content } from './styles';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';

const About = ({ error, message, data }) => {
  if (error) {
    return <ErroMessage error={message} />;
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
      error: false,
    };
}

export const getStaticProps: GetStaticProps = async () => {
  const aboutData = GET_ABOUT_CONTENT();
  try {
    const data = await FetchData(aboutData);
    return {
      props: {
        data: tranformData(data.data),
        error: false,
      },
    };
  } catch (error) {
    return {
      props: {
        message: JSON.stringify(error.message),
        error: true,
      },
    };
  }
};
