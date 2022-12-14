import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerTopLine"></div>
      <div className="footerMiddle">
        <div className="middleLeft1">
          <div className="title">고객상담센터 · 주문/배송문의</div>
          <div className="number">080-123-4567</div>
          <div className="time">평일 09:30 - 17:00 (점심 11:30 - 13:00)</div>
        </div>
        <div className="middleLeft2">
          <div className="title">특판 · 대량구매 문의</div>
          <div className="mail">help@Dyong.com</div>
          <div className="kakao">카카오톡ID : Dyongmall</div>
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
      <div className="footerLast">
        <div className="logo">
          <img className="logoImage" src="./images/LogoIcon.png" />
        </div>
        <div className="left">
          <div className="copyright">
            <ul>
              {COPYRIGHT_LIST.map(copyrightText => {
                return <li key={copyrightText.id}>{copyrightText.text}</li>;
              })}
            </ul>
          </div>
          <div className="contents">
            <span>(주) 오설티</span>
            <br />
            <span>
              대표이사:김개발｜주소:서울특별시 용산구 한강대로 9999,
              100층(한강로10가) ｜ 사업자등록번호:777-77-77777
            </span>
            <br />
            <span>
              통신판매업신고번호:9999-서울용산-9999 ｜ 호스팅제공자:(주)오설티
            </span>
            <br />
            <span>
              (주)오설티는 오설티 브랜드를 제외한 입점 브랜드에 대해서는
              통신판매중개자 이며 통신판매의 당사자가 아닙니다.
            </span>
            <br />
            <span>
              따라서 입점판매자가 등록한 상품정보 및 거래에 대해 책임을 지지
              않습니다.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const COPYRIGHT_LIST = [
  { id: 1, text: '회사소개 ｜ ' },
  { id: 2, text: '서비스 이용약관 ｜ ' },
  { id: 3, text: '개인정보 처리방침 ｜ ' },
  { id: 4, text: '뷰티포인트 ｜ ' },
  { id: 5, text: '임직원할인 ｜ ' },
  { id: 6, text: '사이트맵 ｜ ' },
  { id: 7, text: '전자공고 ' },
];
