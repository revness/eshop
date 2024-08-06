import { createContext, useEffect, useState } from "react";

export const FavouritesContext = createContext(null);

const FavouritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    console.log(savedFavorites, "saved favorites");
    return savedFavorites;
  });

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.includes(id);
      console.log(isFavorite, "is favorite?");
      console.log(id, "id");
      console.log(prevFavorites, "previous fav");
      const newFavorites = isFavorite //if is favorite is true, then we are setting to false
        ? prevFavorites.filter((i) => i !== id) //removes id from from new favourits
        : [...prevFavorites, id];

      console.log(newFavorites, "newfav");

      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      console.log(localStorage.favorites, "localstorage");
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
