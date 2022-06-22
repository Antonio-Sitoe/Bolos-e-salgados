import React from 'react';
import { ActionType } from '../../Cart/reducers/reducers';
import { QuantityStyle } from '../../components/Quantity/styles';
import { CartContext } from '../../Context/CartContext';

function IncrementalUpdateQuantityAndPrice(setCount, count, dispatch, item) {
  setCount((count) => count + 1);
  dispatch({
    type: ActionType.ADD_CART,
    content: {
      id: item.id,
      image: item.image,
      name: item.name,
      price: item.price,
      quantity: count,
    },
  });
}

function DecrementUpdateQuantityAndPrice(setCount, count, dispatch, item) {
  setCount((count) => count - 1);
  dispatch({
    type: ActionType.REMOVE_CART,
    content: {
      id: item.id,
      quantity: count,
      precoUnitario: item.precoUnitario,
    },
  });
}

const QuantiContainer = ({ item }) => {
  const [count, setCount] = React.useState(item.quantity);
  const { dispatch } = React.useContext(CartContext);

  const handleChange = ({ target }) => {
    switch (target.id) {
      case 'increment':
        return IncrementalUpdateQuantityAndPrice(
          setCount,
          count,
          dispatch,
          item
        );
      case 'decrement':
        if (count === 0) return false;
        return DecrementUpdateQuantityAndPrice(setCount, count, dispatch, item);

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

export default QuantiContainer;
