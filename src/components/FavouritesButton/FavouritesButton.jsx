import { useState, useEffect, useContext } from "react";
import { FavouritesContext } from "../../context/FavouritesContext";

const FavouritesButton = ({ id }) => {
  const { favorites, toggleFavorite } = useContext(FavouritesContext);

  const isFavorite = favorites.includes(id);

  const handleClick = () => {
    toggleFavorite(id);
  };

  return (
    <button onClick={handleClick}>
      Favourited <span>{isFavorite ? "[x]" : "[ ]"}</span>
    </button>
  );
};

export default FavouritesButton;
