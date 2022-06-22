export function REMOVE_CART(state, content) {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === content.id
  );

  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };
  updatedItem.quantidade = content.quantidade - 1;
  updatedItem.preco = updatedItem.preco - content.precoUnitario;

  if (updatedItem.quantidade <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }
  window.localStorage.setItem(
    'cart',
    JSON.stringify({ ...state, cart: updatedCart })
  );
  return { ...state, cart: updatedCart };
}

