import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';
function PremiumTea() {
  return (
    <div className="jejuSulloc">
      <div className="productBanner">
        <div className="productBannerImage">
          <img src="./images/premium_tea_banner.jpg" alt="프리미엄 배너" />
        </div>
        <div className="productBannerTitle">
          <span className="bannerTitle">명차</span>
        </div>
      </div>
      <div className="productMain">
        <div className="productTea">
          <p>티 제품</p>
          <ul className="productSortBar">
            <li>
              <Link to="/products/review">리뷰많은순</Link>
            </li>
            <li>
              <Link to="/products/sale">판매순</Link>
            </li>
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
              <Link to=" ">전체</Link>
            </li>
            <li>
              <Link to=" ">잎차</Link>
            </li>
            <li>
              <Link to=" ">피라미드</Link>
            </li>
            <li>
              <Link to=" ">티백</Link>
            </li>
            <li>
              <Link to=" ">파우더</Link>
            </li>
          </ul>
        </div>
        <div className="productSection">
          {PRODUCTS.map(({ id, name, image, price }) => (
            <div key={id} className="sullocArchive">
              <div className="sullocSectionImage">
                <img src={image} alt={name} />
              </div>
              <div className="sullocSectionInfo">
                <div className="sullocSectionInfoTitle">{name}</div>
                <div className="sullocSectionInfoPrice">{price}</div>
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

export default PremiumTea;

const PRODUCTS = [
  {
    id: 1,
    image: './images/premium_tea.jpg',
    name: '일로향',
    price: '20,000원',
  },
  {
    id: 2,
    image: './images/premium_tea.jpg',
    name: '일로향2',
    price: '70,0300원',
  },
  {
    id: 2,
    image: './images/premium_tea.jpg',
    name: '일로향3',
    price: '70,0300원',
  },
  {
    id: 3,
    image: './images/premium_tea.jpg',
    name: '일로향4',
    price: '70,02300원',
  },
  {
    id: 4,
    image: './images/premium_tea.jpg',
    name: '일로향5',
    price: '70,0323100원',
  },
  {
    id: 5,
    image: './images/premium_tea.jpg',
    name: '일로향6',
    price: '70,1300원',
  },
];
