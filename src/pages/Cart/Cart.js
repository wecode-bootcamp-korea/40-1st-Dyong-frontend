import React, { useState } from 'react';
import './Cart.scss';

const Cart = () => {
  const [cartsList, setCartsList] = useState(CartList);
  const [checkItems, setCheckItems] = useState([]);

  const onClickDecreaseBtn = id => {
    const nextCartList = cartsList.map(cart => {
      if (cart.id === id) {
        return { ...cart, quan: cart.quan - 1 <= 0 ? 1 : cart.quan - 1 };
      }
      return cart;
    });
    setCartsList(nextCartList);
  };

  const onClickIncreaseBtn = id => {
    const nextCartList = cartsList.map(cart => {
      if (cart.id === id) {
        return { ...cart, quan: cart.quan + 1 };
      }
      return cart;
    });
    setCartsList(nextCartList);
  };

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems(prev => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter(el => el !== id));
    }
  };

  const handleAllCheck = checked => {
    if (checked) {
      const idArray = [];
      cartsList.forEach(el => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  const deleteAll = () => {
    if (cartsList.length !== 0) {
      if (window.confirm('삭제 하시겠습니까?')) {
        setCartsList([]);
      }
    }
  };

  const totalPrice = (a, id) => {
    return a + id.price * id.quan;
  };

  const totalAmount = cartsList.reduce(totalPrice, 0).toLocaleString();

  const onclickHandler = () => {
    if (true) {
      alert('결제가 완료 되었습니다.');
      window.location.href = 'http://localhost:3000/Nav';
    }
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
              <input
                className="checkBox"
                type="checkbox"
                onChange={e => handleAllCheck(e.target.checked)}
                checked={checkItems.length === cartsList.length ? true : false}
              />
              <span className="checkBoxText">전체선택</span>
            </div>
            <div className="right1">
              <button className="deleteText" type="button" onClick={deleteAll}>
                전체삭제
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
                      name={`select-${cartList.id}`}
                      onChange={e =>
                        handleSingleCheck(e.target.checked, cartList.id)
                      }
                      checked={checkItems.includes(cartList.id) ? true : false}
                    />
                    <div className="imgWrapper">
                      <img src={cartList.imageUrl} alt={cartList.name} />
                    </div>
                    <div className="buttonWrapper">
                      <button
                        className="buttonSize"
                        onClick={() => onClickDecreaseBtn(cartList.id)}
                      >
                        -
                      </button>
                      <strong>{cartList.quan}</strong>
                      <button
                        className="buttonSize"
                        onClick={() => onClickIncreaseBtn(cartList.id)}
                      >
                        +
                      </button>
                    </div>
                    <div className="price">
                      <strong>
                        {(cartList.price * cartList.quan).toLocaleString()}원
                      </strong>
                    </div>
                  </li>
                );
              })
            )}
          </ul>
        </div>
        <div className="rightBox">
          <ul className="list">
            <li className="item">
              <span>상품 금액</span>
              <span>{totalAmount}원</span>
            </li>
          </ul>
          <div className="expectedPrice">
            <span>결제 예상 금액</span>
            <span>{totalAmount}원</span>
          </div>
          <div className="order">
            <button
              className="buyButton"
              type="submit"
              onClick={onclickHandler}
            >
              {totalAmount}원 주문하기
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
