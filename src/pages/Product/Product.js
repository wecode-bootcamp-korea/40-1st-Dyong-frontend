import React, { useEffect, useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import './Product.scss';

function Product() {
  const [searchParams, setSearchParams] = useSearchParams();

  const setTypeParams = (type, typeItem) => {
    searchParams.set(type, typeItem);
    setSearchParams(searchParams);
  };

  const setSortParams = (sort, sortItem) => {
    searchParams.set(sort, sortItem);
    setSearchParams(searchParams);
  };

  const setClearParams = () => {
    searchParams.set('type', 'p=0');
    setSearchParams(searchParams);
  };

  const [products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(`http://localhost:3000/data/sample.json${location.search}`)
      .then(response => response.json())
      .then(setProducts);
  }, []);

  const ProductSectionCard = () => {
    return (
      <div className="productSection">
        {products.map(({ id, name, price, main_image, sub_image }) => (
          <div key={id} className="sullocArchive">
            <div className="sullocSectionImage">
              <img src={main_image} />
            </div>
            <div className="sullocSectionInfo">
              <div className="sullocSectionInfoTitle">{name}</div>
              <div className="sullocSectionInfoPrice">{price}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

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
          <p>티 제품</p>

          <ul className="productSortBar">
            <li onClick={() => setSortParams('sort', 'new_arrival&p=0')}>
              <Link to="products?sort=new_arrival&p=0">신상품순</Link>
            </li>
            <li onClick={() => setSortParams('sort', 'high_price')}>
              <Link to="products?sort=high_price">높은 가격순</Link>
            </li>
            <li onClick={() => setSortParams('sort', 'low_price')}>
              <Link to="products?sort=low_price">낮은 가격순</Link>
            </li>
          </ul>
        </div>
        <div className="productAll">
          <p>
            총 <span>{products.length}</span>개의 상품이 있습니다.
          </p>
          <ul className="productCategorySortBar">
            <li onClick={() => setClearParams('type', 'p=0')}>
              <Link to="products?p=0">전체</Link>
            </li>
            <li onClick={() => setTypeParams('type', 'tealeaf')}>
              <Link to="products?type=tealeaf">잎차</Link>
            </li>
            <li onClick={() => setTypeParams('type', 'pyramid')}>
              <Link to="products?type=pyramid">피라미드</Link>
            </li>
            <li onClick={() => setTypeParams('type', 'teabag')}>
              <Link to="products?type=teabag">티백</Link>
            </li>
            <li onClick={() => setTypeParams('type', 'powder')}>
              <Link to="products?type=powder">파우더</Link>
            </li>
          </ul>
        </div>
        <ProductSectionCard />
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
