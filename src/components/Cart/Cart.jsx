import { CartContext } from "../../context/CartContextProvider";
import { useContext } from "react";

const Cart = () => {
  const { cart, editCart } = useContext(CartContext);
  console.log(cart, "cart");

  return (
    <div>
      {cart.map((el) => (
        <div>
          <div>{el.id}</div>
          <div>{el.quantity}</div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
