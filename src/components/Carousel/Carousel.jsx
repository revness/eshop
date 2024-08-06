import styles from "./Carousel.module.scss";
import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [currentLeftIndex, setCurrentLeftIndex] = useState(0);
  const [currentRightIndex, setCurrentRightIndex] = useState(2);
  const divContent = [data[0], data[1], data[2], data[3], data[4]];
  const updateIndices = (newIndex) => {
    const totalItems = divContent.length;
    setCurrentIndex(newIndex);
    setCurrentLeftIndex((newIndex - 1 + totalItems) % totalItems);
    setCurrentRightIndex((newIndex + 1) % totalItems);
  };

  const handleLeftClick = () => {
    const newIndex = (currentIndex - 1 + divContent.length) % divContent.length;
    updateIndices(newIndex);
  };

  const handleRightClick = () => {
    const newIndex = (currentIndex + 1) % divContent.length;
    updateIndices(newIndex);
  };

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.leftButton} onClick={handleLeftClick}>
        left button
      </div>
      <div className={styles.carousel}>
        {data && (
          <ProductCard
            key={divContent[currentLeftIndex]?.id}
            data={divContent[currentLeftIndex]}
          ></ProductCard>
        )}
        {data && (
          <ProductCard
            key={divContent[currentIndex]?.id}
            data={divContent[currentIndex]}
          ></ProductCard>
        )}
        {data && (
          <ProductCard
            key={divContent[currentRightIndex]?.id}
            data={divContent[currentRightIndex]}
          ></ProductCard>
        )}
      </div>
      <div className={styles.rightButton} onClick={handleRightClick}>
        right button
      </div>
    </div>
  );
};

export default Carousel;
