import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "pages/App";
import Login from "pages/Login";
import Cart from "pages/Cart";
import Father from "pages/Father";
// import NotFound from "pages/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/ikea" element={<Father />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
