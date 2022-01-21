import React from 'react';

const useLocalStorage = (key, initial = '') => {
  const [local, setLocal] = React.useState(() => {
    const localStorage = window.localStorage.getItem(key);
    return localStorage ? JSON.parse(localStorage) : initial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(local));
  }, [key, local]);
  return { local, setLocal };
};

export default useLocalStorage;
