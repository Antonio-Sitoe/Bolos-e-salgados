import React from 'react';
import { Link } from 'next';
import { Orders } from './styles';

const OrdersItems = ({ cart, total }) => {
  if (cart.length)
    return (
      <>
        <Orders>
          <div>
            <h1>Resumo da Encomenda</h1>
            <ul>
              {cart?.map(({ id, nome, quantidade, preco }) => {
                return (
                  <li key={id}>
                    <span>{nome}</span>
                    <span>{quantidade} x</span>
                    <span>{preco}, MT</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2>
              Total <span>{total},MT</span>
            </h2>
            <p>Incluindo taxas de entregas de produtos</p>
            <Link href='/checkout'>Finalizar a compra</Link>
          </div>
        </Orders>
      </>
    );
  return null;
};

export default OrdersItems;
