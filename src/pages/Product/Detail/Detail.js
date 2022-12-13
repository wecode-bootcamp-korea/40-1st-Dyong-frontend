import React, { Component } from 'react';
import './Detail.scss';

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      value: 1,
      price: 24000,
    };
  }

  inputValue = e => {
    const { value } = e.target;
    this.setState({
      value: value,
    });
  };

  addValue = () => {
    const { value } = this.state;
    this.setState({
      value: value + 1,
    });
  };

  minusValue = () => {
    const { value } = this.state;
    if (value < 2) {
      return;
    }
    this.setState({
      value: value - 1,
    });
  };

  render() {
    const { value, price } = this.state;
    return (
      <section className="details">
        <div className="item_detail_top">
          <div className="item_info">
            <div className="info_left">
              <div className="item_wrapper">
                <div className="item_img">
                  <img
                    className="tea_img"
                    src="https://www.osulloc.com/upload/kr/ko/adminImage/HC/LW/20201027143838409ZN.png?quality=80"
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
              <p className="item_name">프리미엄 티 컬렉션</p>
              <p className="item_info" id="info_area">
                취향과 기분에 따라 다채로운 맛과 향을 즐기기 좋은, 알찬 구성의
                베스트셀러 티 세트
              </p>
              <div className="price_info">
                <p className="price">
                  {Intl.NumberFormat('ko-KR').format(price)} 원
                </p>
              </div>
              <div className="buying_panel">
                <div className="quantity">
                  <p className="quantity_name">구매수량</p>
                  <span className="count">
                    <button className="neg" onClick={this.minusValue}>
                      -
                    </button>
                    <input
                      className="val"
                      onChange={this.inputValue}
                      value={value}
                    />
                    <button className="pos" onClick={this.addValue}>
                      +
                    </button>
                  </span>
                </div>
              </div>
              <div className="price_sum">
                <p className="sum">상품금액 합계</p>
                <p className="sum_value">
                  {Intl.NumberFormat('ko-KR').format(price * value)} 원
                </p>
              </div>
              <div className="button_wrapper">
                <div className="button_option">
                  <button type="button" className="present">
                    선물하기
                  </button>
                  <button type="button" className="cart">
                    장바구니
                  </button>
                  <button type="button" className="buy">
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
              <div className="product_review">고객리뷰 402개</div>
              <div className="product_info">상품고시정보</div>
            </div>
          </div>
          <div className="detail_img_wrapper">
            <img
              className="detail_img1"
              src="https://www.osulloc.com/upload/kr/ko/item_view/1461/img_01.jpg"
              alt="상세1"
            />
            <img
              className="detail_img1"
              src="https://www.osulloc.com/upload/kr/ko/item_view/1461/img_02.jpg"
              alt="상세1"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Detail;
