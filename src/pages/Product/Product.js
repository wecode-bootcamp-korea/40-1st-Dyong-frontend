import React, { useEffect, useState } from 'react';
import {
  Link,
  useSearchParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import './Product.scss';

function Product() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const sortTab = searchParams.get('sort');
  const categoryTab = searchParams.get('type');

  const pagination = searchParams.get('page');
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchParams.has('page')) {
      searchParams.set('page', '0');
    }
    if (!searchParams.has('sort')) {
      searchParams.set('sort', 'new-arrival');
    }

    setSearchParams(searchParams);

    fetch(`http://10.58.52.138:8000/products${location.search}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [location.search, searchParams, setSearchParams]);

  const setTypeParams = (type, typeItem) => {
    searchParams.set(type, typeItem);
    setSearchParams(searchParams);
  };

  const setSortParams = (sort, sortItem) => {
    searchParams.set(sort, sortItem);
    setSearchParams(searchParams);
  };

  const setClearParams = () => {
    searchParams.delete('type');
    setSearchParams(searchParams);
  };

  const movePageFirst = page => {
    searchParams.set('page', page);
    setSearchParams(searchParams);
  };

  const ProductSectionCard = () => {
    const goToDetail = id => {
      navigate(`/detail/${id}`);
    };
    return (
      <div className="productSection">
        {products?.map(({ id, name, price, main_image, sub_image }) => (
          <div key={id} className="sullocArchive">
            <div
              className="sullocSectionImage"
              onClick={() => {
                goToDetail(id);
              }}
            >
              <img src={main_image} />
            </div>
            <div className="sullocSectionInfo">
              <div className="sullocSectionInfoTitle">{name}</div>
              <div className="sullocSectionInfoPrice">
                {Intl.NumberFormat('ko-KR').format(price)} ???
              </div>
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
          <img src="/images/osulloc_banner.jpg" alt="????????? ??????" />
        </div>
      </div>
      <div className="productMain">
        <div className="productTea">
          <p>??? ??????</p>

          <ul className="productSortBar">
            <li onClick={() => setSortParams('sort', 'new-arrival')}>
              <Link to="products?sort=new-arrival">
                <div
                  className={`teaSort ${
                    sortTab === 'new-arrival' ? 'active' : ''
                  }`}
                >
                  ????????????
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
                  ?????? ?????????
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
                  ?????? ?????????
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="productAll">
          <p>
            ??? <span>{products.length}</span>?????? ????????? ????????????.
          </p>
          <ul className="productCategorySortBar">
            <li onClick={() => setClearParams('type', '')}>
              <Link to="products?all">
                <div className={`btn ${categoryTab === null ? 'active' : ''}`}>
                  ??????
                </div>
              </Link>
            </li>
            <li onClick={() => setTypeParams('type', 'tealeaf')}>
              <Link to="products?type=tealeaf">
                <div
                  className={`btn ${categoryTab === 'tealeaf' ? 'active' : ''}`}
                >
                  ??????
                </div>
              </Link>
            </li>
            <li onClick={() => setTypeParams('type', 'pyramid')}>
              <Link to="products?type=pyramid">
                <div
                  className={`btn ${categoryTab === 'pyramid' ? 'active' : ''}`}
                >
                  ????????????
                </div>
              </Link>
            </li>
            <li onClick={() => setTypeParams('type', 'teabag')}>
              <Link to="products?type=teabag">
                <div
                  className={`btn ${categoryTab === 'teabag' ? 'active' : ''}`}
                >
                  ??????
                </div>
              </Link>
            </li>
            <li onClick={() => setTypeParams('type', 'powder')}>
              <Link to="products?type=powder">
                <div
                  className={`btn ${categoryTab === 'powder' ? 'active' : ''}`}
                >
                  ?????????
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <ProductSectionCard />
      </div>
      <ul className="priductPagenation">
        <li onClick={() => movePageFirst(0)}>
          <Link to="products?page=0">
            <button className={`btn ${pagination === '0' ? 'active' : ''}`}>
              1
            </button>
          </Link>
        </li>
        <li onClick={() => movePageFirst(1)}>
          <Link to="products?page=1">
            <button className={`btn ${pagination === '1' ? 'active' : ''}`}>
              2
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Product;
