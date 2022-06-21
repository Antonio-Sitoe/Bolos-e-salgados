import React from 'react';
import { QuantityStyle } from './styles';

interface IQuantity {
  count: number;
  setCount: (count: number) => number;
}

export const Quantity = ({ count, setCount }: IQuantity) => {
  const handleChange = ({ target }) => {
    switch (target.id) {
      case 'increment':
        setCount(count + 1);
        break;
      case 'decrement':
        if (count === 1) return false;
        setCount(count - 1);
        break;
      default:
        setCount(0);
        break;
    }
  };
  return (
    <QuantityStyle>
      <span>{count}</span>
      <button id='decrement' onClick={handleChange}>
        -
      </button>
      <button id='increment' onClick={handleChange}>
        +
      </button>
    </QuantityStyle>
  );
};
