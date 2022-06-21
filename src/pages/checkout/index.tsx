import React from 'react';
import IntroOnPage from '../../components/IntroOnPage/IntroOnPage';
import { Container } from '../../styles/styles';
import { CheckoutStyle, Main } from './styles';
import Email from './components/Email/Email';
import Data from './components/Data/Data';
import Payments from './components/Payments/Payments';
import { UserContext } from '../../Context/UserContext';
import { CartContext } from '../../Context/CartContext';
import { Orders } from '../cart/styles';
import Loading from '../../Helper/Loading';
import Head from 'next/head';

const Checkout = () => {
  const { isAuthenticate, user, loading } = React.useContext(UserContext);
  const [open, setOpen] = React.useState({ isData: false, isPayments: false });
  // const {
  //   state: { cart },
  //   total,
  // } = React.useContext(CartContext);

  if (loading) return <Loading />;

  return (
    <>
      <Head>
        <title>Finalizando a compra | Mila Delicious</title>
        <meta
          name='description'
          content="Confira os dados antes de efetuar a compra"
        />
      </Head>

      <CheckoutStyle>
        <IntroOnPage text='Confira os dados antes de efetuar a compra' Bg='' />
        <Container>
          <Main>
            <div>
              <Email
                user={user}
                setOpen={setOpen}
                isAuthenticate={isAuthenticate}
              />

              {/* <Data
              cart={cart}
              total={total}
              user={isAuthenticate && user}
              setOpen={setOpen}
              open={open}
            /> */}

              <Payments open={open} />
            </div>
            <Orders>
              <div>
                <h1>Resumo da Encomenda</h1>
                {/* <ul>
                {cart?.map(({ id, nome, quantidade, preco }) => {
                  return (
                    <li key={id}>
                      <span>{nome}</span>
                      <span>{quantidade} x</span>
                      <span>{preco}, MT</span>
                    </li>
                  );
                })}
              </ul> */}
                <main>{/* <span>Total a pagar:</span> {total},MT */}</main>
              </div>
            </Orders>
          </Main>
        </Container>
      </CheckoutStyle>
    </>
  );
};

export default Checkout;
