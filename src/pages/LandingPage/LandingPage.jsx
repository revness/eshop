import { useContext } from "react";
import { ApiContext } from "../../context/ApiContextProvider";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./LandingPage.module.scss";
import Carousel from "../../components/Carousel/Carousel";

const LandingPage = () => {
  const { data } = useContext(ApiContext);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <main className={styles.LandingPage}>
      <Carousel data={data} />
      <div className={styles.ProductDiv}>
        {data.map((el) => {
          return <ProductCard key={el.id} data={el} />;
        })}{" "}
      </div>
    </main>
  );
};

export default LandingPage;
