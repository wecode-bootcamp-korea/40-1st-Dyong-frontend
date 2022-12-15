import React, { useEffect, useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import './Product.scss';

function Product() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const sortTab = searchParams.get('sort');
  const categoryTab = searchParams.get('type');

  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');

  useEffect(() => {
    if (!searchParams.has('page')) {
      searchParams.set('page', '0');
    }
    if (!searchParams.has('sort')) {
      searchParams.set('sort', 'new-arrival');
    }
    if (!searchParams.has('type')) {
      searchParams.set('type', 'page');
    }
    setSearchParams(searchParams);
  }, [location.search]);

  const setTypeParams = (type, typeItem) => {
    searchParams.set(type, typeItem);
    setSearchParams(searchParams);
  };

  const setSortParams = (sort, sortItem) => {
    searchParams.set(sort, sortItem);
    setSearchParams(searchParams);
  };

  const setClearParams = () => {
    searchParams.set('type', 'page');
    setSearchParams(searchParams);
  };

  useEffect(() => {
    fetch(
      `http://localhost:3000/data/sample.json${location.search}&_limit=${limit}&_offset=${offset}`
    )
      .then(res => res.json())
      .then(data => setSearchParams(data));
  }, [offset, limit, location.search]);

  const movePage = pageNumber => {
    searchParams.set('offset', (pageNumber - 1) * 10);
    setSearchParams(searchParams);
  };

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
            <li onClick={() => setSortParams('sort', 'new-arrival')}>
              <Link to="products?sort=new-arrival">
                <div
                  className={`teaSort ${
                    sortTab === 'new-arrival' ? 'active' : ''
                  }`}
                >
                  신상품순
                </div>
              </Link>
            </li>
            <li onClick={() => setSortParams('sort', 'high-price')}>
              <Link to="products?sort=high-price">
                <div
                  className={`teaSort ${
                    sortTab === 'high-price' ? 'active' : ''
                  }`}
                >
                  높은 가격순
                </div>
              </Link>
            </li>
            <li onClick={() => setSortParams('sort', 'low-price')}>
              <Link to="products?sort=low-price">
                <div
                  className={`teaSort ${
                    sortTab === 'low-price' ? 'active' : ''
                  }`}
                >
                  낮은 가격순
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="productAll">
          <p>
            총 <span>{products.length}</span>개의 상품이 있습니다.
          </p>
          <ul className="productCategorySortBar">
            <li onClick={() => setClearParams('type', 'page')}>
              <Link to="products?page">
                <div
                  className={`btn ${categoryTab === 'page' ? 'active' : ''}`}
                >
                  전체
                </div>
              </Link>
            </li>
            <li onClick={() => setTypeParams('type', 'tealeaf')}>
              <Link to="products?type=tealeaf">
                <div
                  className={`btn ${categoryTab === 'tealeaf' ? 'active' : ''}`}
                >
                  잎차
                </div>
              </Link>
            </li>
            <li onClick={() => setTypeParams('type', 'pyramid')}>
              <Link to="products?type=pyramid">
                <div
                  className={`btn ${categoryTab === 'pyramid' ? 'active' : ''}`}
                >
                  피라미드
                </div>
              </Link>
            </li>
            <li onClick={() => setTypeParams('type', 'teabag')}>
              <Link to="products?type=teabag">
                <div
                  className={`btn ${categoryTab === 'teabag' ? 'active' : ''}`}
                >
                  티백
                </div>
              </Link>
            </li>
            <li onClick={() => setTypeParams('type', 'powder')}>
              <Link to="products?type=powder">
                <div
                  className={`btn ${categoryTab === 'powder' ? 'active' : ''}`}
                >
                  파우더
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <ProductSectionCard />
      </div>
      <ul className="priductPagenation">
        <li>
          <button onClick={() => movePage(1)}>1</button>
        </li>
        <li>
          <button onClick={() => movePage(2)}>2</button>
        </li>
      </ul>
    </div>
  );
}

export default Product;
