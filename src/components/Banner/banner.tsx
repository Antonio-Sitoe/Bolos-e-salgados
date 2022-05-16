import { Links } from '../../styles/styles';
import { BsFillTelephoneFill } from 'react-icons/bs';
import Link from 'next/link';
import { BannerBackgroundImage, BannerStyle } from './style';

const Banner = ({ bannerProprietes }) =>
(
  <BannerStyle>
    <BannerBackgroundImage backgroundUrl={bannerProprietes.bannerImage.url} />
    <main>
      <h1>{bannerProprietes.bannerTitle}</h1>
      <Link href="/product" passHref>
        <Links>
          <BsFillTelephoneFill />
          Encomendar
        </Links>
      </Link>
    </main>
  </BannerStyle>
);
export default Banner;
