import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
import FavouritesButton from "../FavouritesButton/FavouritesButton";
import CartButton from "../CartButton/CartButton";

const ProductCard = ({ data }) => {
  return (
    <div className={styles.ProductCard}>
      <Link to={`/products/${data.title.split(" ").join("-")}/${data.id}`}>
        <div className={styles.ProductImage}>
          <img src={data.images[0]} />
        </div>

        <div className={styles.ProductText}>
          <div>{data.title}</div>
          <div>${data.price}</div>
        </div>
      </Link>
      <div className={styles.favButton}>
        <FavouritesButton id={data.id} />
      </div>
    </div>
  );
};

export default ProductCard;
