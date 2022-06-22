import React from 'react';
import { FaTrashRestore } from 'react-icons/fa';
import { Carts, CartsContainer, CartsFooter, CartsHeader } from './styles';
import Image from 'next/image';
import QuantiContainer from './QuantiContainer';

const CartsItems = ({ cart }) => {

  function handleDelete(id) {
    const confirm = window.confirm('Deseja apagar esses items do carrinho ?');
  
  }
  
  if (cart.length)
    return (
      <Carts>
        {cart.map((item) => {
          return (
            <li key={item.id}>
              {/* <Image src={item.image} alt='imagem do produto' width={24} height={24} /> */}
              <CartsContainer>
                <CartsHeader>
                  <div>
                    <h2>{item.name}</h2>
                  </div>
                  <aside onClick={() => handleDelete(item.id)}>
                    <FaTrashRestore />
                  </aside>
                </CartsHeader>
                <CartsFooter>
                  <QuantiContainer item={item} />
                  <p>{item.price},MT</p>
                </CartsFooter>
              </CartsContainer>
            </li>
          );
        })}
      </Carts>
    );
  return null;
};

export default CartsItems;
