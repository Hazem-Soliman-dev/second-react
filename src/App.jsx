import React, { useState } from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Products from "./pages/Products";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('authToken'));

  const handleLogin = (token) => {
    localStorage.setItem('authToken', token);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
  };

  return (
    <div className="text-center bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;
