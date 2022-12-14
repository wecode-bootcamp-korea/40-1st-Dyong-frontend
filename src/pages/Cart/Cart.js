import React from 'react';
import './Cart.scss';

const Cart = () => {
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
          <div className="section2">
            <span>장바구니에 담긴 상품이 없습니다.</span>
          </div>
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
            <li className="item"></li>
            <li className="item"></li>
            <li className="item"></li>
            <li className="item"></li>
            <li className="item"></li>
          </ul>
          <div className="price"></div>
          <div className="order"></div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
