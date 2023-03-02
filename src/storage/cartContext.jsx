import { createContext, useState } from "react";


export const cartContext = createContext();

export function CartContextProvider(props) {

  let [cart, setCart] = useState([]);

  function findItem(itemId) {
    return cart.find(item => item.id === itemId);
  }

  function addItemToCart(item) {
    const existingItem = cart.find((i) => i.id === item.id);
    if (!existingItem) {
      setCart([...cart, item]);
      return true;
    } else {
      return false;
    }
  }

  function removeItem(idItem) {

    let newCart = [...cart]

    for (let i in newCart) {

      if (newCart[i].id === idItem) {
        newCart.splice(i, 1);
        break;
      }
    }

    setCart(newCart);
  }

  function clear() {
    setCart([]);
  }

  function totalItemsCart() {
    let total = 0;
    cart.forEach((item) => (total += item.cant));
    return total;
  }

  function getTotalPrice(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += (cart[i].cant * cart[i].price);
    }
    return total;
  }

  const val = {
    cart,
    addItemToCart,
    removeItem,
    clear,
    totalItemsCart,
    getTotalPrice,
    findItem
  };

  return (
    <>
      <cartContext.Provider value={val}>{props.children}</cartContext.Provider>
    </>
  );

}