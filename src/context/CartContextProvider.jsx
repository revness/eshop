import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    return savedCart;
  });

  const editCart = (id) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((item) => item.id === id);
      if (itemIndex > -1) {
        // Item is already in the cart, increment quantity
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += 1;

        return updatedCart;
      } else {
        // Item is not in the cart, add it with quantity 1
        return [...prevCart, { id, quantity: 1 }];
      }
    });
  };
  return (
    <CartContext.Provider value={{ cart, editCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
