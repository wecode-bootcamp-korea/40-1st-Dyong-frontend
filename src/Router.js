import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Product from './pages/Product/Product';
import Detail from './pages/Product/Detail/Detail';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart/Cart';
import ProductsDetail from './pages/Detail/ProductsDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/products" element={<Product />} />
        <Route path="/detail/:id" element={<ProductsDetail />} />
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<ProductsDetail />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/details" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
