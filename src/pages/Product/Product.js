import React, { useEffect, useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import './Product.scss';

function Product() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const [sortTab, setSortTab] = useState('');
  const [categoryTab, setCategoryTab] = useState('');

  useEffect(() => {
    if (!searchParams.has('p')) {
      searchParams.set('p', '0');
      setSearchParams(searchParams);
    }
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
            <li onClick={() => setSortParams('sort', 'new_arrival')}>
              <Link to="products?sort=new_arrival">
                <div
                  className={`teaSort ${sortTab === 'arrival' ? 'active' : ''}`}
                  onClick={() => setSortTab('arrival')}
                >
                  신상품순
                </div>
              </Link>
            </li>
            <li onClick={() => setSortParams('sort', 'high_price')}>
              <Link to="products?sort=high_price">
                <div
                  className={`teaSort ${sortTab === 'high' ? 'active' : ''}`}
                  onClick={() => setSortTab('high')}
                >
                  높은 가격순
                </div>
              </Link>
            </li>
            <li onClick={() => setSortParams('sort', 'low_price')}>
              <Link to="products?sort=low_price">
                <div
                  className={`teaSort ${sortTab === 'low' ? 'active' : ''}`}
                  onClick={() => setSortTab('low')}
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
                  className={`btn ${categoryTab === 'all' ? 'active' : ''}`}
                  onClick={() => setCategoryTab('all')}
                >
                  전체
                </div>
              </Link>
            </li>
            <li onClick={() => setTypeParams('type', 'tealeaf')}>
              <Link to="products?type=tealeaf">
                <div
                  className={`btn ${categoryTab === 'leaf' ? 'active' : ''}`}
                  onClick={() => setCategoryTab('leaf')}
                >
                  잎차
                </div>
              </Link>
            </li>
            <li onClick={() => setTypeParams('type', 'pyramid')}>
              <Link to="products?type=pyramid">
                <div
                  className={`btn ${categoryTab === 'pyrmid' ? 'active' : ''}`}
                  onClick={() => setCategoryTab('pyrmid')}
                >
                  피라미드
                </div>
              </Link>
            </li>
            <li onClick={() => setTypeParams('type', 'teabag')}>
              <Link to="products?type=teabag">
                <div
                  className={`btn ${categoryTab === 'teabag' ? 'active' : ''}`}
                  onClick={() => setCategoryTab('teabag')}
                >
                  티백
                </div>
              </Link>
            </li>
            <li onClick={() => setTypeParams('type', 'powder')}>
              <Link to="products?type=powder">
                <div
                  className={`btn ${categoryTab === 'powder' ? 'active' : ''}`}
                  onClick={() => setCategoryTab('powder')}
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
