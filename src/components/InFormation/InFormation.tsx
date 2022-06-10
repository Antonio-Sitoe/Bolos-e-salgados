import React from 'react';
import Button from '../../components/Forms/Button';
import Count from '../Count/Count';

import { CartContext } from '../../Context/CartContext';
import { Title } from '../../styles/styles';

import { toast } from 'react-toastify';
import { CREATE_CART, ADD_CART } from '../../services/Api';
import useFecth from '../../hooks/useFecth';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const ShowInformation = styled.section`
  margin: 0.6rem 0;

  padding: 0 3rem;
  @media (max-width: 800px) {
    padding: 0;
  }

  p {
    font-size: 0.9rem;
  }

  button {
    margin: 1rem 0;
  }

  h1 {
    margin-bottom: 2rem;
    line-height: 1.5;
  }

  h2,
  h3 {
    font-size: 1.5rem;
    width: 100%;
    margin: 1rem 0;
  }

  h3 {
    text-transform: uppercase;
  }
`;
const InFormation = ({ data, showImage }) => {
  const { id } = useParams();
  const [count, setCount] = React.useState(1);
  const { dispatch } = React.useContext(CartContext);
  const [loading, setLoading] = React.useState(false);
  const navigate = useRouter();
  const { request } = useFecth();

  async function handleSubmit() {
    setLoading(true);
    toast.success(`${data.name} adicionado ao carrinho`, {
      position: toast.POSITION.TOP_CENTER,
    });

    dispatch({
      type: 'ADD_CART',
      content: {
        id: +id,
        foto: showImage,
        nome: data.nome,
        precoUnitario: data.price.raw,
        preco: data.price.raw * count,
        quantidade: +count,
      },
    });
    await new Promise((resolve) => {
      return setTimeout(() => {
        resolve('');
      }, 3000);
    });
    setLoading(false);
    navigate.push('/cart');
  }
  async function handleCart() {
    const { url, options } = CREATE_CART();
    const { json, response } = await request(url, options);
    if (response.ok) {
      window.localStorage.setItem('carts', JSON.stringify(json.id));
      const addCart = ADD_CART(json.id, {
        id,
        quantity: count,
      });
      const responseAdd = await request(addCart.url, addCart.options);
    }
  }

  return (
    <ShowInformation>
      <div>
        <Title>{data.name} (escolha opções)</Title>
        <div dangerouslySetInnerHTML={{ __html: data.description }} />
        <h2>Preco: {data.price.formatted_with_code}</h2>
      </div>
      <Count count={count} setCount={setCount} />
      <Button onClick={handleCart} loading={loading}>
        Adicionar ao carrinho
      </Button>
    </ShowInformation>
  );
};

export default InFormation;
