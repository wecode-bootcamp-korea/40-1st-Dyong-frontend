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
              <span className="deleteText">선택 삭제</span>
            </div>
          </div>

          <div className="section2"></div>
          <div className="section3"></div>
          <div className="section4"></div>
        </div>
        <div className="rightBox"></div>
      </section>
    </main>
  );
};

export default Cart;
