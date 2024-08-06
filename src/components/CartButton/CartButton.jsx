import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";

const CartButton = ({ id }) => {
  const { cart, editCart } = useContext(CartContext);

  const handleClick = () => {
    editCart(id);
  };

  return <button onClick={handleClick}>Add to cart</button>;
};

export default CartButton;
