import React from 'react';
import Button from '../Forms/Button';
import Count from '../Count/Count';
import { CartContext } from '../../Context/CartContext';
import { Title } from '../../styles/styles';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { ShowInformation } from './styles';

function transform(data) {
  return {
    name: data.name,
    price: data.price,
    description: data.description,
    category: data.category,
  };
}

const ProductInformation = ({ data, showImage }) => {
  const dataInfo = transform(data.attributes);
  const [count, setCount] = React.useState(1);
  const { dispatch } = React.useContext(CartContext);
  const [loading, setLoading] = React.useState(false);
  const navigate = useRouter();

  async function handleSubmit() {
    setLoading(true);
    toast.success(`${dataInfo.name} adicionado ao carrinho`, {
      position: toast.POSITION.TOP_CENTER,
    });

    dispatch({
      type: 'ADD_CART',
      content: {
        id: data.id,
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
    handleSubmit();
  }

  return (
    <ShowInformation onSubmit={handleSubmit}>
      <div>
        <Title>
          {dataInfo.name} ({dataInfo.category})
        </Title>
        <p>{dataInfo.description}</p>
        <h2>Preco: {dataInfo.price} MZN</h2>
      </div>
      <Count count={count} setCount={setCount} />
      <Button onClick={handleCart} loading={loading}>
        Adicionar ao carrinho
      </Button>
    </ShowInformation>
  );
};

export default ProductInformation;
