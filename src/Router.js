import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Product from './pages/Product/Product';
import Detail from './pages/Product/Detail/Detail';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart/Cart';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
        <Route path="/detail" element={<Detail />} />
        {/* <Route path="/" element={<Nav />} />
        <Route path="/" element={<Cart />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
