import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Search from '../Search/Search';
import { CgClose, CgMenu } from 'react-icons/cg';
import { HiShoppingCart } from 'react-icons/hi';
import { Container, Links } from '../../styles/styles';
import { Header as HeaderStyle, MarginTops, Nav } from './styles';
import { UserContext } from '../../Context/UserContext';

const Header = () => {
  // const {
  //   state: { cart },
  // } = React.useContext(CartContext);
  const { user } = React.useContext(UserContext);
  const list = React.useRef<HTMLUListElement | null>(null);
  const [mobile, setMobile] = React.useState(false);
  const openMenu = ({ target }) => {
    if (list.current !== target) setMobile(!mobile);
  };

  function handle({ target }) {
    if (mobile === true && list.current !== target) {
      setMobile(false);
    }
  }
  return (
    <>
      <MarginTops />
      <HeaderStyle mobile={mobile} onClick={handle}>
        <Container>
          <Nav mobile={mobile}>
            <Link href='/'>
              <a>
                <Image
                  src='/logo.svg'
                  alt='logo do site'
                  width={40}
                  height={40}
                />
              </a>
            </Link>
            <Search />
            <ul ref={list}>
              <li>
                <Link href='/'>
                  <a>Pagina Inicial</a>
                </Link>
              </li>
              <li>
                <Link href='/product'>
                  <a>Produtos</a>
                </Link>
              </li>
              <li>
                <Link href='/about'>
                  <a>Quem Somos</a>
                </Link>
              </li>
              <li>
                <Link href='/contact'>
                  <a>Contato</a>
                </Link>
              </li>
              <li>
                {user ? (
                  <Link href='/user'>
                    <Links user={user && true}>{user.username}</Links>
                  </Link>
                ) : (
                  <Link href='/login'>
                    <Links>Entrar | Criar</Links>
                  </Link>
                )}
              </li>
              <li>
                <Link href='/cart'>
                  <Links>
                    <HiShoppingCart />
                  </Links>
                </Link>
              </li>
              {/* <li>
                <Links
                  href='cart'
                  user={cart.length}
                  point={cart.length ? theme.colors.buyBtn : 'none'}
                >
                  <HiShoppingCart />
                </Links>
              </li> */}
            </ul>
            <button onClick={openMenu}>
              {mobile ? <CgClose /> : <CgMenu />}
            </button>
          </Nav>
        </Container>
      </HeaderStyle>
    </>
  );
};

export default Header;
