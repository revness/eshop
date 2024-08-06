import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ApiContext } from "../../context/ApiContextProvider";
import styles from "./ProductPage.module.scss";
import FavouritesButton from "../../components/FavouritesButton/FavouritesButton";
import CartButton from "../../components/CartButton/CartButton";
const ProductPage = () => {
  const { data } = useContext(ApiContext);
  const { id } = useParams();
  if (!data) {
    return <div>Loading...</div>;
  }
  const item = data.filter((el) => el.id == id)[0];
  return (
    <div className={styles.ProductPage}>
      <div className={styles.imagePanel}>
        <img src={item.images[0]} />
      </div>
      <div className={styles.detailsPanel}>
        {/* <div>ProductPage {id}</div> */}
        {/* <div>{item.id}</div> */}
        <div>{item.title}</div>
        <div>${item.price}</div>
        <FavouritesButton id={item.id} />
        <CartButton id={item.id} />
      </div>
    </div>
  );
};

export default ProductPage;
