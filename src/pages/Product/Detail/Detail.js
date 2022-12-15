import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Detail.scss';

function Detail(props) {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [value, setValue] = useState(1);

  const inputValue = e => {
    setValue(value);
  };

  const addValue = () => {
    setValue(value + 1);
  };

  const minusValue = () => {
    if (inputValue < 2) {
      return;
    }
    setValue(value - 1);
  };

  useEffect(() => {
    fetch('http://10.58.52.235:8000/products/detail/1', {
      headers: {
        Accept: 'application / json',
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      // eslint-disable-next-line no-console
      .then(([product]) => {
        setProduct(product);
        setLoading(false);
      });
  }, []);

  const navigate = useNavigate();

  let token = localStorage.getItem('token') || '';

  const goToCart = () => {
    if (value > 0) {
      fetch('http://10.58.52.235:8000/products/detail/1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: token,
        },
        body: JSON.stringify({
          id: product.id,
          quantity: value,
        }),
      })
        //요청
        .then(response => response.json())
        // eslint-disable-next-line no-console
        .then(data => console.log(data));
      navigate('/cart');
    } else {
      alert('최소 1개 이상은 선택하셔야 합니다.');
    }
  };

  if (loading) return null;

  const goToBuy = () => {
    alert(
      Intl.NumberFormat('ko-KR').format(product?.price * value) +
        '원 구매하셨습니다.'
    );
  };

  return (
    <section className="details">
      <div className="item_detail_top">
        <div className="item_info">
          <div className="info_left">
            <div className="item_wrapper">
              <div className="item_img">
                <img
                  className="tea_img"
                  src={product.content_image}
                  alt="tea"
                />
              </div>
              <ul className="user_benefit">
                <li>
                  <span className="icon">
                    <img
                      className="icon_img"
                      src="https://velog.velcdn.com/images/dbakkerus/post/14c05684-3f22-48b2-b146-17087d32251f/image.jpeg"
                      alt="아이콘"
                    />
                  </span>
                  뷰티포인트 적립
                </li>
                <li>
                  <span className="icon">
                    <img
                      className="icon_img"
                      src="https://velog.velcdn.com/images/dbakkerus/post/93c9f37d-fdd7-40de-a129-a4158ccc1545/image.jpeg"
                      alt="아이콘"
                    />
                  </span>
                  찻잎 적립
                </li>
                <li>
                  <span className="icon">
                    <img
                      className="icon_img"
                      src="https://velog.velcdn.com/images/dbakkerus/post/0a5758ce-5062-41dc-8785-e8f708bcedb3/image.jpeg"
                      alt="아이콘"
                    />
                  </span>
                  3만원 이상 무료배송
                </li>
                <li>
                  <span className="icon">
                    <img
                      className="icon_img"
                      src="https://velog.velcdn.com/images/dbakkerus/post/38fe5642-27c0-4dc9-9b5a-5eb43e052455/image.jpeg"
                      alt="아이콘"
                    />
                  </span>
                  (유료)포장가능
                </li>
                <li>
                  <span className="icon">
                    <img
                      className="icon_img"
                      src="https://velog.velcdn.com/images/dbakkerus/post/0c4bc962-85a9-4289-a1cb-4651a7284366/image.jpeg"
                      alt="아이콘"
                    />
                  </span>
                  쇼핑백 동봉
                </li>
              </ul>
            </div>
          </div>
          <div className="info_right">
            <div className="sort">티제품 - 티 세트</div>
            <p className="item_name">{product.name}</p>
            <p className="item_info" id="info_area">
              {product.content}
            </p>
            <div className="price_info">
              <p className="price">
                {Intl.NumberFormat('ko-KR').format(product.price)} 원
              </p>
            </div>
            <div className="buying_panel">
              <div className="quantity">
                <p className="quantity_name">구매수량</p>
                <span className="count">
                  <button className="neg" onClick={minusValue}>
                    -
                  </button>
                  <input className="val" onChange={inputValue} value={value} />
                  <button className="pos" onClick={addValue}>
                    +
                  </button>
                </span>
              </div>
            </div>
            <div className="price_sum">
              <p className="sum">상품금액 합계</p>
              <p className="sum_value">
                {Intl.NumberFormat('ko-KR').format(product.price * value)} 원
              </p>
            </div>
            <div className="button_wrapper">
              <div className="button_option">
                <button type="button" className="present">
                  선물하기
                </button>
                <button type="button" className="cart" onClick={goToCart}>
                  장바구니
                </button>
                <button type="button" className="buy" onClick={goToBuy}>
                  바로구매
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item_specific">
        <div className="tab">
          <div className="tab_table">
            <div className="product_detail">상품상세</div>
            <div className="product_review">
              고객리뷰 <strong>402개</strong>
            </div>
            <div className="product_info">상품고시정보</div>
          </div>
        </div>
        <div className="detail_img_wrapper">
          <img className="detail_img1" src={product.sub_image} alt="상세1" />
          <img
            className="detail_img1"
            src={product.content_image}
            alt="상세2"
          />
        </div>
      </div>
    </section>
  );
}

export default Detail;
