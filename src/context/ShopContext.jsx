import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { assets } from '../assets/assest';
export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [shopOverview, setShopOverview] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  
  // Initialize state from localStorage
  const [token, setToken] = useState(() => localStorage.getItem('token') || null);
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : {};
  });

  // Update localStorage when token changes
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  // Update localStorage when user changes
  useEffect(() => {
    if (Object.keys(user).length > 0) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const logout = () => {
    setToken(null);
    setUser({});
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

 
  useEffect(() => {
    setItemList(assets.sodaimages)
  }, [])
  const value = {
    shopOverview,
    setShopOverview,
    itemList,
    searchWord,
    setSearchWord,
    backendURL,
    token,
    setToken,
    user,
    setUser,
    logout
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
}