import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Product from './pages/Product/jeein/Product';
import Detail from './pages/Product/Detail/Detail';
import Footer from './components/Footer/Footer';
import TeaSet from './pages/Product/jeein/TeaSet';
import PremiumTea from './pages/Product/jeein/PremiumTea';
import Malcha from './pages/Product/jeein/Malcha';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
        {/* <Route path="/products/:id" element={<ProductList />} /> */}
        <Route path="/detail" element={<Detail />} />
        <Route path="/tea-set" element={<TeaSet />} />
        <Route path="/premium-tea" element={<PremiumTea />} />
        <Route path="/malcha" element={<Malcha />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
