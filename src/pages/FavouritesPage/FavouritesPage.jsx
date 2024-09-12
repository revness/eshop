import { ApiContext } from "../../context/ApiContextProvider";
import { useContext } from "react";
import { FavouritesContext } from "../../context/FavouritesContext";

const FavouritesPage = () => {
  const { data } = useContext(ApiContext);
  const { favorites, toggleFavorite } = useContext(FavouritesContext);

  console.log(favorites, "favourites");
  console.log(data, "data");
  const findItemData = (id) => {
    return data.find((item) => item.id === id);
  };
  return (
    <>
      {favorites.length > 0 && data ? (
        favorites.map((item) => {
          const itemData = findItemData(item);
          return (
            <div key={itemData.id}>
              <div>Item ID: {itemData.id}</div>
              <div>Name: {itemData.title}</div>
              <div>Price: ${itemData.price}</div>
            </div>
          );
        })
      ) : (
        <div>This is the Favourites Page</div>
      )}
    </>
  );
};

export default FavouritesPage;
