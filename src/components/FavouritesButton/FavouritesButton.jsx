import { useState, useEffect, useContext } from "react";
import { FavouritesContext } from "../../context/FavouritesContext";
import { Heart } from "@phosphor-icons/react";
import styles from "./FavouritesButton.module.scss";

const FavouritesButton = ({ id }) => {
  const { favorites, toggleFavorite } = useContext(FavouritesContext);

  const isFavorite = favorites.includes(id);

  const handleClick = () => {
    toggleFavorite(id);
  };

  return (
    <button className={styles.FavouritesButton} onClick={handleClick}>
      <Heart
        size={32}
        weight={isFavorite ? "fill" : "regular"}
        color={isFavorite ? "red" : "black"}
      />
      {/* <span>{isFavorite ? "[x]" : "[ ]"}</span> */}
    </button>
  );
};

export default FavouritesButton;
