import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../context/ApiContextProvider";
import { getCart } from "../../services/ecom-service";
import { getSessionId } from "../../services/session-utils";
import styles from "./Cart.module.scss";

const Cart = () => {
  const [cart, setCart] = useState({ items: [] });
  const [loading, setLoading] = useState(true);
  const { data } = useContext(ApiContext);

  useEffect(() => {
    const fetchCart = async () => {
      const sessionId = getSessionId();
      const cartData = await getCart(sessionId);
      setCart(cartData);
      setLoading(false);
      console.log(cartData, "cartData");
    };

    fetchCart();
  }, []);

  const findItemData = (id) => {
    return data.find((item) => item.id === id);
  };

  if (loading) {
    return <div>Loading cart...</div>;
  }

  return (
    <div>
      {cart.items.length > 0 ? (
        cart.items.map((item) => {
          const itemData = findItemData(item.id); // Fetch the object data based on cart item id

          return (
            <div key={item.id} className={styles.cartItem}>
              <div>Item ID: {item.id}</div>
              <div>Quantity: {item.quantity}</div>
              <div>Name: {itemData.title}</div>
              <div>Price: ${itemData.price}</div>{" "}
              {/* <button onClick={() => editCart(item.id)}>Add one more</button> */}
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
