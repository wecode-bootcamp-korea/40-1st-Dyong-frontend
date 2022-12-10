import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Product.scss';

function Product() {
  const params = useParams();
  console.log(params);

  return (
    <div className="jejuSulloc">
      <div className="productBanner">
        <div className="productBannerImage">
          <img src="/images/osulloc_banner.jpg" alt="전제품 배너" />
        </div>
        <div className="productBannerTitle">
          <span className="bannerTitle">티제품</span>
        </div>
      </div>
      <div className="productMain">
        <div className="productTea">
          <p>티 제품{params.id}</p>
          <ul className="productSortBar">
            <li>
              <Link to="/products/new_arrival">신상품순</Link>
            </li>
            <li>
              <Link to="/products/high_price">높은 가격순</Link>
            </li>
            <li>
              <Link to="/products/low_price">낮은 가격순</Link>
            </li>
          </ul>
        </div>
        <div className="productAll">
          <p>총 {PRODUCTS.length}개의 상품이 있습니다.</p>
          <ul className="productCategorySortBar">
            <li>
              <Link to="/products/all">전체</Link>
            </li>
            <li>
              <Link to="/products/tea-leaf">잎차</Link>
            </li>
            <li>
              <Link to="/products/pyramid">피라미드</Link>
            </li>
            <li>
              <Link to="/products/teabag">티백</Link>
            </li>
            <li>
              <Link to="/products/powder">파우더</Link>
            </li>
          </ul>
        </div>
        <div className="productSection">
          {PRODUCTS.map(({ id, image, name, price }) => (
            <div key={id} className="sullocArchive">
              <div className="sullocSectionImage">
                <img src={image} alt={name} />
              </div>
              <div className="sullocSectionInfo">
                <div className="sullocSectionInfoTitle">{name}</div>
                <div className="sullocSectionInfoPrice">
                  {price.toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ul className="priductPagenation">
        <li>
          <Link to=" ">1</Link>
        </li>
        <li>
          <Link to=" ">2</Link>
        </li>
      </ul>
    </div>
  );
}

export default Product;

const PRODUCTS = [
  {
    id: 1,
    image: '/images/우전.jpg',
    name: '우전',
    price: '70,000원',
  },
  {
    id: 2,
    image: '/images/우전.jpg',
    name: '우전2',
    price: '70,0300원',
  },
  {
    id: 9,
    image: '/images/우전.jpg',
    name: '우전3',
    price: '70,0300원',
  },
  {
    id: 3,
    image: '/images/우전.jpg',
    name: '우전4',
    price: '70,02300원',
  },
  {
    id: 4,
    image: '/images/우전.jpg',
    name: '우전5',
    price: '70,0323100원',
  },
  {
    id: 5,
    image: '/images/우전.jpg',
    name: '우전6',
    price: '70,1300원',
  },
];
