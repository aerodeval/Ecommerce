import React, { createContext, useState } from 'react';

export const FavContext = createContext();

export const FavProvider = ({ children }) => {
  const [favs, setFavs] = useState([]);

  const addToFavs = (item) => {
    setFavs((prevFavs) => {
      // Ensure no duplicates are added
      if (prevFavs.some(favItem => favItem.id === item.id)) {
        // If it is, remove it
        return prevFavs.filter(favItem => favItem.id !== item.id);
      } else {
        // If it is not, add it
        return [...prevFavs, item];
      }
    });
  };

  return (
    <FavContext.Provider value={{ favs, addToFavs }}>
      {children}
    </FavContext.Provider>
  );
};