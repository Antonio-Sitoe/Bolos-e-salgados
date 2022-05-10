import React from 'react';
import { GET_USERDATA, USER_GET, USER_REGISTER } from '../services/Api';

export const UserContext = React.createContext(null);

export const UserStorage = ({ children }) => {
  const [isAuthenticate, setIsAuthenticate] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const [productID, setproductID] = React.useState('');

  const UserLogout = () => {
    setIsAuthenticate(false);
    setLoading(false);
    setUser(null);
    setError(null);
    window.localStorage.removeItem('token');
  };

  async function getUserWithToken(token) {
    setLoading(true);
    let response;
    let json;
    try {
      const { url, options } = GET_USERDATA(token);
      response = await fetch(url, options);
      json = await response.json();
      if (!response.ok) throw new Error(json.message);
    } catch (er) {
      json = null;
      setError(er);
    } finally {
      setUser(json);
      setLoading(false);
      if (json) {
        setIsAuthenticate(true);
      }
    }
  }

  const userLogin = async (identifier, password) => {
    const { url, options } = USER_GET({
      identifier,
      password,
    });
    try {
      setLoading(true);
      const response = await fetch(url, options);
      const json = await response.json();
      if (!response.ok) throw new Error(json.message[0].messages[0].message);
      window.localStorage.setItem('token', json.jwt);
      setUser(json.user);
      setIsAuthenticate(true);
    } catch (err) {
      setError(err.toString());
    }
    setLoading(false);
  };

  const userRegister = async (username, email, password) => {
    setLoading(true);
    setError(null);
    const { url, options } = USER_REGISTER({
      username,
      email,
      password,
    });
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      if (!response.ok) throw new Error(json.message[0].messages[0].message);
      window.localStorage.setItem('token', json.jwt);
      setUser(json.user);
      setIsAuthenticate(true);
    } catch (err) {
      setError(err.toString());
    }
    setLoading(false);
  };
  
  React.useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      getUserWithToken(token);
    }
  }, []);

  const value = {
    setError,
    isAuthenticate,
    setIsAuthenticate,
    userRegister,
    userLogin,
    user,
    error,
    loading,
    productID,
    setproductID,
    UserLogout,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
