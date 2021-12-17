import React, { useReducer } from "react";
import CartContext from "./cart-context";
const defaultMovie = {
  items: [],
};

const FavReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.items.id);
    const existingCartItem = state.items[existingCartItemIndex];
    if (existingCartItem) {
      let updateFav = [...state.items];
      return { items: updateFav };
    } else {
      let updateFav = state.items.concat(action.items);
      return { items: updateFav };
    }
  } else if (action.type === "REMOVE") {
    let updateFav;
    updateFav = state.items.filter((item) => item.id !== action.id);
    return { items: updateFav };
  }
  return defaultMovie;
};

const CartProvider = (props) => {
  const [FavState, dispatchAction] = useReducer(FavReducer, defaultMovie);

  const addFavMovie = (item) => {
    dispatchAction({ type: "ADD", items: item });
  };
  const removeFavMovie = (id) => {
    dispatchAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: FavState.items,
    addItem: addFavMovie,
    removeItem: removeFavMovie,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
