import { createContext, useEffect, useState } from "react";

export const FavouritesContext = createContext(null);

const FavouritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return savedFavorites;
  });

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.includes(id);
      const newFavorites = isFavorite //if is favorite is true, then we are setting to false
        ? prevFavorites.filter((i) => i !== id) //removes id from from new favourits
        : [...prevFavorites, id];

      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };
  return (
    <FavouritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
