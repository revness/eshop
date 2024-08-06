import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
import FavouritesButton from "../FavouritesButton/FavouritesButton";
import CartButton from "../CartButton/CartButton";

const ProductCard = ({ data }) => {
  return (
    <div className={styles.ProductCard}>
      <Link to={`/products/${data.title.split(" ").join("-")}/${data.id}`}>
        <img src={data.images[0]} />

        {/* <div>{data.id}</div> */}
        <div>{data.title}</div>
        <div>${data.price}</div>
      </Link>
      <FavouritesButton id={data.id} />
    </div>
  );
};

export default ProductCard;
