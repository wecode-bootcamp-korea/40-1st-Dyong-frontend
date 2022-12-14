/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HintInput from '../../components/Input/HintInput';
import './Signup.scss';

export const RULES = {
  id: {
    pattern: value => value.length > 5,
    message:
      '아이디 양식을 확인하세요.\n (아이디는 최소 5자 이상이여야 합니다.)',
  },
  name: {
    pattern: value => value.length > 2,
    message:
      '이름 양식을 확인하세요.\n (법정 이름은 최소 2자 이상이여야 합니다.)',
  },
  password: {
    pattern: value => value.includes('!', '@', '#', '$', '%', '^', '&'),
    message:
      '비밀번호 양식을 확인하세요.\n (비밀번호는 !, @, #, $, %, ^, & 중 하나를 반드시 포함해야 합니다.)',
  },
  email: {
    pattern: value => value.includes('@') && value.includes('.'),
    message:
      '이메일 양식을 확인하세요.\n (example@wecode.com과 같은 형식이어야 합니다.)',
  },
  phone: {
    pattern: value => value.includes('-'),
    message:
      '핸드폰 양식을 확인하세요.\n (- 을 포함한 정확한 번호를 입력해주세요.)',
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
  const [formData, setFormData] = useState(INIT_STATE);

  const navigate = useNavigate();

  const isAllValid = Object.entries(formData).every(([key, value]) =>
    RULES[key].pattern(value)
  );

  const onChangeInput = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const goToLogin = () => {
    if (isAllValid) {
      fetch('http://10.58.52.239:8000/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          username: formData.id,
          password: formData.password,
          phoneNumber: formData.phone,
        }),
      })
        //요청
        .then(response => response.json())
        // eslint-disable-next-line no-console
        .then(data => console.log(data));
      navigate('/login');
    } else {
      alert('양식을 다시 확인해주세요!');
    }
  };

  return (
    <section className="signup">
      <form action="" method="post" className="signUpForm">
        <div className="intro">그린티 회원가입</div>
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
        <div className="check">
          {!isAllValid && (
            <h1>회원가입이 불가능합니다. 양식을 다시 확인하세요.</h1>
          )}
        </div>
        <button type="button" className="button" onClick={goToLogin}>
          회원가입
        </button>
        <div className="faq">도움말(FAQ) | 자주하는질문</div>
      </form>
    </section>
  );
}

export default Signup;
