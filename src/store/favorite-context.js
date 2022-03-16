//first ---- import context

import { createContext, useState } from "react";

//second ---- store it in a const
//third ---- it takes initial value -- it can be an obj

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  // eleventh ---- now for simplicity of giving auto compelete we add those keys here too
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

// forth ---- for abaling to change the initial value we create a component

export function FavoritesContextProvider({ children }) {
  // seventh ---- we create a state becuz we want to be able to change it and then cuz its the value
  //of provider and provider is wrapped around our app , our app can have the latest changes

  const [userFavorites, setUserFavorites] = useState([]);

  //ninth ----  now we need wways to change these values or keys in context so we create 3 func for them

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavories) => {
      return prevUserFavories.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavories) => {
      return prevUserFavories.filter((item) => item.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((item) => item.id === meetupId);
  }

  //sixth ---- create a context obj and pass it as a value to the provider

  const context = {
    //eighth ---- now this obj that has to have the latest changes has to have keys as in initial value
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    // tenth ---- now we add funcs to here too cuz we need to change them from our components we want
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  // fifth ---- return the provider of FavoritesContext, so we can wrap it around our app
  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
