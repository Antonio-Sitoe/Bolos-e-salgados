import { Container } from '../../styles/styles';
import IntroOnPage from '../../components/IntroOnPage/IntroOnPage';
import { Contato } from './styles';
import Head from 'next/head';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import ContactForm from '../../components/ContactForm/ContactForm';

const Contact = () => (
  <>
    <Head>
      <title>Entre em Contato | Mila Delicious</title>
    </Head>
    <IntroOnPage text='Entre em contato conosco' Bg='' />
    <Container>
      <Contato>
        <ContactInfo />
        <ContactForm />
      </Contato>
    </Container>
  </>
);

export default Contact;