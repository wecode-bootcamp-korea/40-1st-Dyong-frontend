import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';
function Malcha() {
  return (
    <div className="jejuSulloc">
      <div className="productBanner">
        <div className="productBannerImage">
          <img src="./images/malcha_banner.jpg" alt="녹차,말차 배너" />
        </div>
        <div className="productBannerTitle">
          <span className="bannerTitle">녹차/말차</span>
        </div>
      </div>
      <div className="productMain">
        <div className="productTea">
          <p>티 제품</p>
          <ul className="productSortBar">
            <li>
              <Link to=" ">리뷰많은순</Link>
            </li>
            <li>
              <Link to=" ">판매순</Link>
            </li>
            <li>
              <Link to=" ">신상품순</Link>
            </li>
            <li>
              <Link to=" ">높은 가격순</Link>
            </li>
            <li>
              <Link to=" ">낮은 가격순</Link>
            </li>
          </ul>
        </div>
        <div className="productAll">
          <p>총 {PRODUCT_INFO_LIST.length}개의 상품이 있습니다.</p>
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
          {PRODUCT_INFO_LIST.map(info => (
            <div key={info.id} className="sullocArchive">
              <div className="sullocSectionImage">
                <img src={info.image} alt={info.alt} />
              </div>
              <div className="sullocSectionInfo">
                <div className="sullocSectionInfoTitle">{info.productName}</div>
                <div className="sullocSectionInfoPrice">
                  {info.productPrice}
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

export default Malcha;

const PRODUCT_INFO_LIST = [
  {
    id: 1,
    image: './images/malcha.jpg',
    alt: '제주 순수녹차',
    productName: '제주 순수녹차',
    productPrice: '20,000원',
  },
  {
    id: 2,
    image: './images/malcha.jpg',
    alt: '제주 순수녹차',
    productName: '제주 순수녹차2',
    productPrice: '70,0300원',
  },
  {
    id: 2,
    image: './images/malcha.jpg',
    alt: '제주 순수녹차',
    productName: '제주 순수녹차3',
    productPrice: '70,0300원',
  },
  {
    id: 3,
    image: './images/malcha.jpg',
    alt: '제주 순수녹차',
    productName: '제주 순수녹차4',
    productPrice: '70,02300원',
  },
  {
    id: 4,
    image: './images/malcha.jpg',
    alt: '제주 순수녹차',
    productName: '제주 순수녹차5',
    productPrice: '70,0323100원',
  },
  {
    id: 5,
    image: './images/malcha.jpg',
    alt: '제주 순수녹차',
    productName: '제주 순수녹차6',
    productPrice: '70,1300원',
  },
];
