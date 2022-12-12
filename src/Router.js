import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Product from './pages/Product/jeein/Product';
import Detail from './pages/Product/Detail/Detail';
import Footer from './components/Footer/Footer';
import ProductsDetail from './pages/Product/jeein/ProductsDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductsDetail />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
