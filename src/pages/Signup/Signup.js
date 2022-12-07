/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HintInput from '../Input/HintInput';
import './Signup.scss';

export const RULES = {
  id: {
    pattern: value => value.length > 5,
    message: '아이디 양식을 확인하세요. 아이디는 최소 5자 이상이여야 합니다.',
  },
  name: {
    pattern: value => value.length > 2,
    message: '이름 양식을 확인하세요. 법정 이름은 최소 2자 이상이여야 합니다.',
  },
  password: {
    pattern: value => value.includes('!', '@', '#', '$', '%', '^', '&'),
    message:
      '비밀번호 양식을 확인하세요. 비밀번호는 !, @, #, $, %, ^, &중 하나를 반드시 포함해야 합니다.',
  },
  email: {
    pattern: value => value.includes('@') && value.includes('.'),
    message: '이메일 양식을 확인하세요.',
  },
  phone: {
    pattern: value => value.includes('-'),
    message: '핸드폰 양식(-을 포함한 정확한 번호)를 입력해주세요.',
  },
};

const INIT_STATE = {
  id: '',
  name: '',
  password: '',
  email: '',
  phone: '',
};

function Signup() {
  const navigate = useNavigate();

  const goToLogin = () => {
    if (
      INIT_STATE.id.length > 5 &&
      INIT_STATE.name.length > 2 &&
      INIT_STATE.password.value.includes('!', '@', '#', '$', '%', '^', '&') &&
      INIT_STATE.email.value.includes('@') &&
      INIT_STATE.email.value.includes('.') &&
      INIT_STATE.phone.value.includes('-')
    ) {
      navigate('/login');
    } else {
      alert('양식을 다시 확인해주세요!');
    }
  };

  const [active, setActive] = useState(false);
  const [formData, setFormData] = useState(INIT_STATE);

  const onChangeInput = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const isAllValid = Object.entries(formData).every(([key, value]) =>
    RULES[key].pattern(value)
  );

  return (
    <section className="signup">
      <form action="" method="post" className="signUpForm">
        <div className="logo_box">
          <img
            className="logo"
            src="https://www.osulloc.com/kr/ko/static_cdj/images/main/logo_black.png"
            alt="로고"
          />
        </div>
        <div className="idBox">
          <HintInput name="id" value={formData.id} onChange={onChangeInput} />
        </div>
        <div className="nameBox">
          <HintInput
            name="name"
            value={formData.name}
            onChange={onChangeInput}
          />
        </div>
        <div className="passBox">
          <HintInput
            name="password"
            type="password"
            value={formData.password}
            onChange={onChangeInput}
          />
        </div>
        <div className="emailBox">
          <HintInput
            name="email"
            value={formData.email}
            onChange={onChangeInput}
          />
        </div>
        <div className="phoneBox">
          <HintInput
            name="phone"
            value={formData.phone}
            onChange={onChangeInput}
          />
        </div>
        {!isAllValid && <h1>양식을 모두 확인해주세요.</h1>}
        <button type="button" className="button" onClick={goToLogin}>
          회원가입
        </button>
        <div className="faq">도움말(FAQ) | 자주하는질문</div>
      </form>
    </section>
  );
}

export default Signup;
