import React from 'react';
import CartsItems from './CartsItems';
import OrdersItems from './OrdersItem';
import { CartContext } from '../../Context/CartContext';
import { CartStyle, Main, MessageContainer } from './styles';
import { Container } from '../../styles/styles';
import Head from 'next/head';
const Cart = () => {
  const {
    state: { cart },
    total,
  } = React.useContext(CartContext);

  return (
    <>
      <Head>
        <title>Carrinho de compra | Mila Delicious</title>
        <meta
          name='description'
          content={`Certifique se de nao deixar os produtos no carrinho por muito tempo`}
        />
      </Head>

      <CartStyle>
        <Container>
          {cart.length > 0 ? (
            <Main>
              <CartsItems cart={cart} />
              <OrdersItems cart={cart} total={total} />
            </Main>
          ) : (
            <MessageContainer>
              <p>O carrinho esta vazio</p>
            </MessageContainer>
          )}
        </Container>
      </CartStyle>
    </>
  );
};

export default Cart;
