export function ADD_CART(state, content) {
  const cart = [...state.cart];
  const updatedItemIndex = cart.findIndex((item) => item.id === content.id);
  if (updatedItemIndex < 0) {
    cart.push({ ...content });
  } else if (content.quantidade > 0) {
    const updateItem = { ...cart[updatedItemIndex] };
    updateItem.quantidade = updateItem.quantidade + content.quantidade;
    updateItem.preco = updateItem.preco + content.preco;
    cart[updatedItemIndex] = updateItem;
  }
  window.localStorage.setItem('cart', JSON.stringify({ ...state, cart: cart }));
  return { ...state, cart: cart };
}