import React from 'react';
import IntroOnPage from '../../components/IntroOnPage/IntroOnPage';
import Image from '../../components/Image/Image';
import useFetch from '../../hooks/useFecth';
import Loading from '../../components/Helper/Loading';
import ErroMessage from '../../components/Helper/ErroMessage';
import { Container, Title } from '../../styles/styles';
import { GET_ABOUT_CONTENT } from '../../services/Api';
import { AboutStyle, Content } from './styles';


const About = () => {
  const { data, request, error } = useFetch();
  React.useEffect(() => {
    async function AboutContent() {
      const { url, options } = GET_ABOUT_CONTENT();
      await request(url, options);
    }
    AboutContent();
  }, [request]);

  if (error) return <ErroMessage error={error} />;
  if (data) {
    return (
      <>
        <IntroOnPage text={'Saiba mais sobre nos'} />
        <Container>
          <AboutStyle>
            <Content>
              <Title>{data.data[0].name}</Title>
              <p
                dangerouslySetInnerHTML={{ __html: data.data[0].description }}
              />
            </Content>
            <Image alt={'cover image'} src={data.data[0].images.cover.url} />
          </AboutStyle>
        </Container>
      </>
    );
  }
  return <Loading />;
};

export default About;
