/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RULES } from '../../pages/Signup/Signup';
import HintInput from '../../components/Input/HintInput';
import './Login.scss';

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
      fetch('http://10.58.52.138:8000/users/signin', {
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
        .then(response => {
          if (response.ACCESS_TOKEN) {
            localStorage.setItem('login-token', response.ACCESS_TOKEN);
          }
        });
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
        <div className="login_font">그린티 통합회원 ID로 로그인 해주세요.</div>
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
            <h1>로그인이 불가능합니다. 양식을 다시 확인하세요</h1>
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
