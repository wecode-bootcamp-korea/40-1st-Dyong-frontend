## oo 프로젝트 Front-end/Back-end 소개

- "국내(제주) 지역 유명 차(기타 가공품) 판매 사이트인 '오설록' 클론 프로젝트"
- 짧은 프로젝트 기간(약 2주)동안 개발에 집중해야 하므로 회원가입 -> 로그인 -> 메인화면(상품List) -> 제품별 상세 화면 -> 장바구니 부분만 클론했습니다.
- 따라서 일부 화면이나 로직(메인화면, 결제로직)등이 생략되었으며 이는 프로젝트 이후에 보완해나갈 예정입니다.
- 개발은 초기 세팅부터 팀원 전원이 직접 구현했으며, 아래 데모 영상에서 보이는 부분은 모두 백앤드와 연결하여 실제 사용할 수 있는 서비스 수준으로 개발한 것입니다.
- 일부 화면은 저작권이나 기타 문제로 인하여 최대한 비슷하게 구현하였으나 원본 사이트와 다른 부분이 있을 수 있습니다.

### 개발 인원 및 기간

- 개발기간 : 2022/12/5 ~ 2022/12/16
- 개발 인원 : 프론트엔드 3명, 백엔드 2명 (프런트 : 김민서, 문다연, 임지인 / 백 : 이정우, 윤은애
- [백엔드 github 링크](https://github.com/wecode-bootcamp-korea/40-1st-Dyong-backend)

### 프로젝트 선정이유

- 이 사이트는, 단순해 보이는 레이아웃 구성을 가지고 있지만, 세부적인 내용에서 배울 점이 많은 사이트입니다.
- 음료 및 식가공품이라는 비교적 대중적인 상품을 판매하는 사이트여서 브랜딩이나 페이지의 가치관 전달에 크게 어려움이 없습니다.

### 데모 영상(이미지 클릭)

- [데모 영상 youtube 링크]()
<br>

## 적용 기술 및 구현 기능

### 적용 기술

> - Front-End : React.js, sass
> - Back-End : Python, Django web framework, Beautifulsoup, Selenium, Bcrypt, My SQL

### 구현 기능

#### 공통

- 사실상 클론사이트의 전 부분(회원가입부터 해서 장바구니 최종 구매까지 전 과정)에서 프런트와 백의 유기적인 소통으로 함께 구성.
- 프런트는 레이아웃을 비롯한 시각적 효과를 부여하고, 백은 정보를 채워넣음으로서 하나의 페이지를 완성함

#### 회원가입

- 회원가입(이름, id, pw, email, phone) 정보를 입력하고(특정 조건에 맞는 정보만 전달)
- 그 정보를 기반으로 로그인하도록 함
- 입력 상태에 따라 양식에 맞지 않다는 경고문구가 나타나게 하고 조건에 맞다면 문구가 없어지게 함
- 버튼에 onClick 속성을 부여하여 조건에 맞는 정보를 입력하였을 떄만 navigate('./login')으로 가도록 하고 그게 아니라면 alert로 올바른 양식 입력을 유도

#### 로그인

- 로그인에 성공시 token값을 로컬 스토리지에 저장하도록 함
(향후 해당 토큰은 장바구니와 같은 검증된 사용자만 사용하는 기능에서 검사를 함)
- (회원가입 페이지와 마찬가지로) 입력 상태에 따라 유효성 문구와 버튼에 onClick으로 속성 부여

#### 메인페이지

- 추천 상품, 오늘의 상품, 베스트 상품 모두 각각 api 호출하여 구현
- 저쩌구

#### 상세페이지

- 실제 페이지에서 구현 대상 상품만 구현(상품img, 상품name, 상품 구매수량, 상품 합계가격, 상품 설명img 구현
- price, value 함수를 선언해 price의 변화에 따라 합계가격이 변하도록 구현
- 상품상세 배너를 실제 페이지와 유사성을 확보하기 위해 sticky로 고정
- '장바구니에 담기'는 수량이 1 이상일때만 담도록 함. (그렇지 못할 경우에는 alert로 알림)

#### Cart

- 삼항연산자를 사용해 장바구니 데이터가 없을 때와 데이터가 있을 때 다르게 나타나도록 구현
- 데이터가 있을 경우, map 메소드를 사용해 List로 나타나도록 구현
- 전체선택 checkbox, 전체삭제 기능 구현
- 제품 수량에 따른 금액 변경 기능 구현
- 주문하기 버튼 클릭 시 결제완료 alert 창이 나타나고, 확인 시 Main 페이지로 이동

#### GNB

- map 메소드를 사용하여 배열과 객체에 접근, 카테고리가 나타나도록 구현
- hover에 따른 drawer 창 구현 ㅓ

#### Footer

- scss를 사용하여 UI 구현

<br>

*아래 Reference 부분은 README.md에 꼭 포함되어야 하는 내용입니다*

## Reference

- 이 프로젝트는 [오설록]([https://www.osulloc.com/kr/ko]) 사이트를 참조하여 학습목적으로 만들었습니다.
- 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다. 해당 팀은 어떠한 형태로든 금전적 이득을 추구하지 않습니다.
- 이 프로젝트에서 사용하고 있는 사진과 상품명은 (주)오설록이 저작권 소유한 사진을 로고를 지우고 변형하여 제작한 이미지로 저작권 문제가 없도록 만들었지만, 제 3자가 이를 금전적 이득을 위해 무단으로 사용하거나 배포할 경우 (주)오설록의 법적 제재가 있을 수 있으며 해당 팀은 이에 대한 책임을 지지 않습니다. (이는 상품명도 마찬가지입니다.)
