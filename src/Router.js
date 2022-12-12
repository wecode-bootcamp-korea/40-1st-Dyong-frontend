import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Product from './pages/Product/Product';
import Footer from './components/Footer/Footer';
import ProductsDetail from './pages/Product/Detail/ProductsDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductsDetail />} />
        <Route path="/detail/:productId" element={<ProductsDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
