import Link from 'next/link';
import React, { useEffect } from 'react';
import { CgClose, CgMenu } from 'react-icons/cg';
import { HiShoppingCart } from 'react-icons/hi';
import { Container, Links } from '../../styles/styles';
import Search from '../Search/Search';
import { Header as HeaderStyle, MarginTops, Nav } from './styles';

const Header = () => {
  // const {
  //   state: { cart },
  // } = React.useContext(CartContext);
  // const { user } = React.useContext(UserContext);
  const list = React.useRef();
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
          <Nav mobile={mobile ? '' : 'none'}>
            <Link href='/'>
              <img src='/logo.svg' alt='logo do site' />
            </Link>
            <Search />
            <ul ref={list}>
              <li>
                <Link href='/'>Pagina Inicial</Link>
              </li>
              <li>
                <Link href='/product'>Produtos</Link>
              </li>
              <li>
                <Link href='/about'>Quem Somos</Link>
              </li>
              <li>
                <Link href='/contact'>Contato</Link>
              </li>
              <li>
                <Link href='/login'>
                  <Links>Entrar | Criar</Links>
                </Link>
              </li>
              <li>
                <Link href='/cart'>
                  <Links>
                    <HiShoppingCart />
                  </Links>
                </Link>
              </li>
              {/* <li>
                {user ? (
                  <Links href='acount' user={user.username}>
                    {user.username}
                  </Links>
                ) : (
                  <Links href='login'>Entrar | Criar</Links>
                )}
              </li> */}
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
