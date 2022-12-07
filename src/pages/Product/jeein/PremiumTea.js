import React from 'react';
import './Product.scss';

const PRODUCT_INFO_LIST = [
  {
    id: 1,
    image: './images/premium_tea.jpg',
    alt: '일로향',
    productName: '일로향',
    productPrice: '20,000원',
  },
  {
    id: 2,
    image: './images/premium_tea.jpg',
    alt: '일로향',
    productName: '일로향2',
    productPrice: '70,0300원',
  },
  {
    id: 2,
    image: './images/premium_tea.jpg',
    alt: '일로향',
    productName: '일로향3',
    productPrice: '70,0300원',
  },
  {
    id: 3,
    image: './images/premium_tea.jpg',
    alt: '일로향',
    productName: '일로향4',
    productPrice: '70,02300원',
  },
  {
    id: 4,
    image: './images/premium_tea.jpg',
    alt: '일로향',
    productName: '일로향5',
    productPrice: '70,0323100원',
  },
  {
    id: 5,
    image: './images/premium_tea.jpg',
    alt: '일로향',
    productName: '일로향6',
    productPrice: '70,1300원',
  },
];

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
              <a href=" ">리뷰많은순</a>
            </li>
            <li>
              <a href=" ">판매순</a>
            </li>
            <li>
              <a href=" ">신상품순</a>
            </li>
            <li>
              <a href=" ">높은 가격순</a>
            </li>
            <li>
              <a href=" ">낮은 가격순</a>
            </li>
          </ul>
        </div>
        <div className="productAll">
          <p>총 74개의 상품이 있습니다.</p>
          <ul className="productCategorySortBar">
            <li>
              <a href=" ">전체</a>
            </li>
            <li>
              <a href=" ">잎차</a>
            </li>
            <li>
              <a href=" ">피라미드</a>
            </li>
            <li>
              <a href=" ">티백</a>
            </li>
            <li>
              <a href=" ">파우더</a>
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
          <a href=" ">1</a>
        </li>
        <li>
          <a href=" ">2</a>
        </li>
      </ul>
    </div>
  );
}

export default PremiumTea;
