import { addToCart } from "../../services/ecom-service";
import styles from "./CartButton.module.scss";

const CartButton = ({ id }) => {
  const handleClick = () => {
    addToCart(id);
  };

  return (
    <button onClick={handleClick} className={styles.CartButton}>
      Add to cart
    </button>
  );
};

export default CartButton;
