import { CartContext } from "../../context/CartContextProvider";
import { useContext } from "react";
import { ApiContext } from "../../context/ApiContextProvider";

const Cart = () => {
  const { cart, editCart } = useContext(CartContext);
  const { data } = useContext(ApiContext);

  const findItemData = (id) => {
    return data.find((item) => item.id === id);
  };

  return (
    <div>
      {cart.length > 0 ? (
        cart.map((item) => {
          const itemData = findItemData(item.id); // Fetch the object data based on cart item id

          return (
            <div key={item.id} className="cart-item">
              <div>Item ID: {item.id}</div>
              <div>Quantity: {item.quantity}</div>
              <div>Name: {itemData.title}</div>
              <div>Price: ${itemData.price}</div>{" "}
              <button onClick={() => editCart(item.id)}>Add one more</button>
            </div>
          );
        })
      ) : (
        <div>Your cart is empty.</div>
      )}
    </div>
  );
};

export default Cart;
