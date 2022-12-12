import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      {/* 첫번째섹션 */}
      <div className="footerTopLine"></div>

      {/* 두번째섹션 */}
      <div className="footerMiddle">
        <div className="middleLeft1">
          <div className="title">고객상담센터 · 주문/배송문의</div>
          <div className="number">080-123-4567</div>
          <div className="time">평일 09:30 - 17:00 (점심 11:30 - 13:00)</div>
        </div>
        <div className="middleLeft2">
          <div className="title">특판 · 대량구매 문의</div>
          <div className="mail">help@osultea.com</div>
          <div className="kakao">카카오톡ID : osulteamall</div>
        </div>
        <div className="middleRight">
          <a href="#">
            <img
              src="https://www.osulloc.com/kr/ko/static_renew/images/f1.png?quality=80"
              alt="매장안내"
            />
            <span>매장안내</span>
          </a>
          <a href="#">
            <img
              src="https://www.osulloc.com/kr/ko/static_renew/images/f2.png?quality=80"
              alt="멤버십혜택"
            />
            <span>멤버십혜택</span>
          </a>
          <a href="#">
            <img
              src="https://www.osulloc.com/kr/ko/static_renew/images/f3.png?quality=80"
              alt="FAQ"
            />
            <span>FAQ</span>
          </a>
          <a href="#">
            <img
              src="https://www.osulloc.com/kr/ko/static_renew/images/f4.png?quality=80"
              alt="1:1문의"
            />
            <span>1:1문의</span>
          </a>
        </div>
      </div>

      {/* 세번째섹션 */}
      <div className="footerLast"></div>
    </footer>
  );
};

export default Footer;
