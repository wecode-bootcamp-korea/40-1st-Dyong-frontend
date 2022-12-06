/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.scss';

function Signup() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [idMessage, setIdMessage] = useState();
  const [nameMessage, setNameMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [phoneMessage, setPhoneMessage] = useState('');

  const [currentId, setIsId] = useState(false);
  const [currentName, setIsName] = useState(false);
  const [currentPassword, setIsPassword] = useState(false);
  const [currentPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [currentEmail, setIsEmail] = useState(false);
  const [currentPhone, setIsPhone] = useState(false);

  const goToLogin = () => {
    if (
      setIsId(true) &&
      setIsName(true) &&
      setIsPassword(true) &&
      setIsPasswordConfirm(true) &&
      setIsEmail(true)
    ) {
      navigate('/login');
    } else {
      alert(
        '모든 조건이 충족되지 않아 회원가입이 불가능합니다. 다시 한 번 확인해주세요'
      );
    }
  };

  const onChangeId = e => {
    const currentId = e.target.value;
    setId(currentId);
    const idRegExp = /^[a-zA-z0-9]{6,12}$/;

    if (!idRegExp.test(currentId)) {
      setIdMessage(
        '아이디는 6-12자리 영문 대소문자 또는 숫자만 입력해 주세요!'
      );
      setIsId(false);
    } else {
      setIdMessage('사용가능한 아이디 입니다.');
      setIsId(true);
    }
  };

  const onChangeName = e => {
    const currentName = e.target.value;
    setName(currentName);

    if (currentName.length < 2) {
      setNameMessage('이름은 최소 두글자 이상이여 합니다!');
      setIsName(false);
    } else {
      setNameMessage(name + ' 님 환영합니다.');
      setIsName(true);
    }
  };

  const onChangePassword = e => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage(
        '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!'
      );
      setIsPassword(false);
    } else {
      setPasswordMessage('안전한 비밀번호 입니다.');
      setIsPassword(true);
    }
  };
  const onChangePasswordConfirm = e => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage('비밀번호를 다시 한 번 확인해 주세요');
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage('일치하는 비밀번호입니다.');
      setIsPasswordConfirm(true);
    }
  };
  const onChangeEmail = e => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (!emailRegExp.test(currentEmail)) {
      setEmailMessage('이메일의 형식이 올바르지 않습니다!');
      setIsEmail(false);
    } else {
      setEmailMessage('사용 가능한 이메일 입니다.');
      setIsEmail(true);
    }
  };
  const onChangePhone = e => {
    const currentPhone = e.target.value;
    setPhone(currentPhone);
    const phoneRegExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;

    if (!phoneRegExp.test(currentPhone)) {
      setPhoneMessage('핸드폰번호의 형식이 올바르지 않습니다!');
      setIsPhone(false);
    } else {
      setPhoneMessage('사용 가능한 전화번호 입니다.');
      setIsPhone(true);
    }
  };

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
        <div className="idForm">
          <input
            type="text"
            id="id"
            name="id"
            placeholder="사용할 아이디를 입력해주세요."
            value={id}
            onChange={onChangeId}
          />
          <p className="message">{idMessage}</p>
        </div>

        <div className="nameForm">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="법정 이름을 입력해주세요."
            value={name}
            onChange={onChangeName}
          />
          <p className="message">{nameMessage}</p>
        </div>
        <div className="passForm">
          <input
            type="password"
            id="pw"
            name="pw"
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={onChangePassword}
          />
          <p className="message">{passwordMessage}</p>
        </div>
        <div className="passConForm">
          <input
            type="password"
            id="pwC"
            name="pwC"
            placeholder="비밀번호를 확인해주세요."
            value={passwordConfirm}
            onChange={onChangePasswordConfirm}
          />
          <p className="message">{passwordConfirmMessage}</p>
        </div>
        <div className="emailForm">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="이메일을 입력해주세요."
            value={email}
            onChange={onChangeEmail}
          />
          <p className="message">{emailMessage}</p>
        </div>
        <div className="phoneForm">
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="전화번호를 입력해주세요."
            value={phone}
            onChange={onChangePhone}
          />
          <p className="message">{phoneMessage}</p>
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
