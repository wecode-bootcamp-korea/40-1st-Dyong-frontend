import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Product from './pages/Product/Product';
import Footer from './components/Footer/Footer';
import ProductsDetail from './pages/Detail/ProductsDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/products" element={<Product />} />
        <Route path="/detail/:productId" element={<ProductsDetail />} />
        <Route path="/main" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
