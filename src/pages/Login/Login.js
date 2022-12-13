/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HintInput from '../../components/Input/HintInput';
import './Login.scss';

export const RULES = {
  id: {
    pattern: value => value.length > 5,
    message: '아이디 양식을 확인하세요. 아이디는 최소 5자 이상이여야 합니다.',
  },
  password: {
    pattern: value => value.includes('!', '@', '#', '$', '%', '^', '&'),
    message:
      '비밀번호 양식을 확인하세요. 비밀번호는 !, @, #, $, %, ^, &중 하나를 반드시 포함해야 합니다.',
  },
};

const INIT_STATE = {
  id: '',
  password: '',
};

function Login() {
  const [loginData, setLoginData] = useState(INIT_STATE);

  const navigate = useNavigate();

  const isAllValid = Object.entries(loginData).every(([key, value]) =>
    RULES[key].pattern(value)
  );

  const goToMain = () => {
    if (isAllValid) {
      fetch('http://10.58.52.61:8000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          username: loginData.id,
          password: loginData.password,
        }),
      })
        //요청
        .then(response => response.json())
        // eslint-disable-next-line no-console
        .then(data => console.log(data));
      navigate('/main');
    } else {
      alert('양식을 다시 확인해주세요!');
    }
  };

  const onChangeInput = ({ target }) => {
    setLoginData({ ...loginData, [target.name]: target.value });
  };

  return (
    <section className="login">
      <form action="" method="post" className="loginForm">
        <div className="logo_box">
          <img
            className="logo"
            src="https://www.osulloc.com/kr/ko/static_cdj/images/main/logo_black.png"
            alt="로고"
          />
        </div>
        <div className="font_top">아모레퍼시픽 뷰티포인트 통합회원</div>
        <div className="font_bottom">아이디로 로그인해주세요.</div>
        <div className="login_idBox">
          <HintInput name="id" value={loginData.id} onChange={onChangeInput} />
        </div>
        <div className="login_passBox">
          <HintInput
            name="password"
            type="password"
            value={loginData.password}
            onChange={onChangeInput}
          />
        </div>
        <div className="login_check">
          {!isAllValid && (
            <h1>로그인이 불가능합니다. 양식을 다시 확인하세요.</h1>
          )}
        </div>
        <button type="button" className="login_button" onClick={goToMain}>
          로그인
        </button>
        <div className="login_faq">도움말(FAQ) | 자주하는질문</div>
      </form>
    </section>
  );
}

export default Login;
