import { Container, Links, Title } from '../../../styles/styles';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BannerStyle } from './styles';
import Image from '../../../components/Image/Image';
import BannerImage from '../../../Assets/banner.jpg';

const Banner = () => {
  return (
    <BannerStyle>
      <Image src={BannerImage} alt='background image' />
      <Container>
        <main>
          <Title>Os melhores bolos você encontra aqui.</Title>
          <Links to='product'>
            <BsFillTelephoneFill />
            Encomendar
          </Links>
        </main>
      </Container>
    </BannerStyle>
  );
};
export default Banner;
