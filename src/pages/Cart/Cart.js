import React, { useState } from 'react';
import './Cart.scss';

const Cart = () => {
  const [cartsList, setCartsList] = useState(CartList);
  const [value, setValue] = useState(1);
  const price = 350000;

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

  return (
    <main>
      <section className="cartText">
        <h2>장바구니</h2>
      </section>
      <section className="cartBox">
        <div className="leftBox">
          <div className="section1">
            <div className="left1">
              <input className="checkBox" type="checkbox"></input>
              <span className="checkBoxText">전체선택</span>
            </div>
            <div className="right1">
              <button className="deleteText" type="button">
                선택 삭제
              </button>
            </div>
          </div>

          <ul className="section2">
            {cartsList.length === 0 ? (
              <span>장바구니에 담긴 상품이 없습니다.</span>
            ) : (
              cartsList.map(cartList => {
                return (
                  <li className="cartList" key={cartList.id}>
                    <input
                      className="checkBox"
                      type="checkbox"
                      checked={cartList.isChecked}
                    />
                    <div className="imgWrapper">
                      <img src={cartList.imageUrl} alt={cartList.name} />
                    </div>
                    <div className="descWrapper">
                      <strong>{cartList.name}</strong>
                      <p>{cartList.content}</p>
                    </div>
                    <div className="buttonWrapper">
                      <button
                        className="buttonSize"
                        type="button"
                        onClick={minusValue}
                      >
                        -
                      </button>
                      <strong>{cartList.quan}</strong>
                      <button
                        className="buttonSize"
                        type="button"
                        onClick={addValue}
                      >
                        +
                      </button>
                    </div>
                    <div className="price">
                      <strong>{cartList.price.toLocaleString()}원</strong>
                    </div>
                    <button className="purchaseBtn">바로구매</button>
                  </li>
                );
              })
            )}
          </ul>

          <div className="section3">
            <button className="selectOrder" type="button">
              선택상품 주문
            </button>
            <button className="allOrder" type="button">
              전체상품 주문하기
            </button>
          </div>
          <div className="section4">
            <img src="https://www.osulloc.com/kr/ko/static_cdj/images/presentPage/IconPresentNote.png" />
            <span>장바구니에 보관된 상품은 3개월 후에 삭제 됩니다.</span>
          </div>
        </div>

        <div className="rightBox">
          <ul className="list">
            <li className="item">
              <span>상품 금액</span>
              <span>+0원</span>
            </li>
            <li className="item">
              <span>상품 할인</span>
              <span>-0원</span>
            </li>
            <li className="item">
              <span>배송비</span>
              <span>+0원</span>
            </li>
          </ul>
          <div className="expectedPrice">
            <span>결제 예상 금액</span>
            <span>0원</span>
          </div>

          <div className="order">
            <button className="buyButton" type="submit">
              0원 주문하기
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;

const CartList = [
  {
    id: 1,
    name: '기똥찬 녹차',
    content: '아주 기가 막히고 코가 막히는 제주 순수 녹차',
    imageUrl:
      'https://www.osulloc.com/upload/kr/ko/adminImage/HB/XA/304_20211026141423508CU.png?quality=80',
    price: 30000.0,
    isChecked: true,
    quan: 1,
  },
  {
    id: 2,
    name: '러블리 티 박스',
    content:
      '즐겁고 행복한 티타임을 선사하는 달콤하고 향긋한 오설록만의 특별한 블렌디드 티 선물 세트',
    imageUrl:
      'https://www.osulloc.com/upload/kr/ko/adminImage/HB/XA/304_20211026141423508CU.png?quality=80',
    price: 20000.0,
    isChecked: true,
    quan: 1,
  },
  {
    id: 3,
    name: '시릿 티 스토리',
    content:
      '신비로운 섬 제주의 다채로운 향기와 이야기를 품은 취향 걱정없이 선물하기 좋은 고급스러운 구성의 선물 세트',
    imageUrl:
      'https://www.osulloc.com/upload/kr/ko/adminImage/HB/XA/304_20211026141423508CU.png?quality=80',
    price: 45000.0,
    isChecked: true,
    quan: 1,
  },
];
