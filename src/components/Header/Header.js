import React from 'react';
import Search from '../Search/Search';
import Link from 'next/link';
import { Container, Links } from '../../styles/styles';
import { Header as HeaderStyle, MarginTops, Nav } from './styles';
import { HiShoppingCart } from 'react-icons/hi';
import { CgMenu, CgClose } from 'react-icons/cg';
import { UserContext } from '../../Context/UserContext';
import { CartContext } from '../../Context/CartContext';
import { theme } from '../../styles/theme';

const Header = () => {
  // const {
  //   state: { cart },
  // } = React.useContext(CartContext);
  // const { user } = React.useContext(UserContext);
  const list = React.useRef();
  const [mobile, setMobile] = React.useState(false);

  const openMenu = React.useCallback(
    ({ target }) => {
      if (list.current !== target) setMobile(!mobile);
    },
    [mobile]
  );

  React.useEffect(() => {
    if (mobile) {
      document.addEventListener('click', openMenu);
    }
    return () => document.removeEventListener('click', openMenu);
  }, [mobile, openMenu]);

  return (
    <>
      <MarginTops />
      <HeaderStyle>
        <Container>
          <Nav mobile={mobile ? '' : 'none'}>
            <Link href='/'>
              <img src='/logo.svg' alt='logo do site' />
            </Link>
            <Search />
            <ul ref={list}>
              <li>
                <Link href=''>Pagina Inicial</Link>
              </li>
              <li>
                {' '}
                <Link href='product'>Produtos</Link>{' '}
              </li>
              <li>
                {' '}
                <Link href='about'>Quem Somos</Link>{' '}
              </li>
              <li>
                {' '}
                <Link href='contact'>Contato</Link>
              </li>
              {/* <li>
                {user ? (
                  <Links to='acount' user={user.username}>
                    {user.username}
                  </Links>
                ) : (
                  <Links to='login'>Entrar | Criar</Links>
                )}
              </li> */}
              {/* <li>
                <Links
                  to='cart'
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
