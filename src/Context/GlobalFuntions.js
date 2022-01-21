import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalFuntions = ({ children }) => {
  function filterProduts(argument, category) {
    return argument.filter((item) => {
      return item.categories[0].slug === category;
    });
  }

  const value = { filterProduts };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
