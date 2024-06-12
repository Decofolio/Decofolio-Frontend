import React, { useState } from 'react';
import styled from 'styled-components';
import { decoLogin, loginBackground } from '../assets/image';
import api from './api';

interface iUserForm {
  name: string;
  password: string;
  againPassword: string;
  email: string;
}

const Signup: React.FC = () => {
  const [userForm, setUserForm] = useState<iUserForm>({
    name: '',
    password: '',
    againPassword: '',
    email: ''
  });
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserForm((prev) => ({
      ...prev,
      name: event.target.value
    }));
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserForm((prev) => ({
      ...prev,
      password: event.target.value
    }));
    setErrorMessage('');
  };

  const handleAgainPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserForm((prev) => ({
      ...prev,
      againPassword: event.target.value
    }));
    setErrorMessage('');
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserForm((prev) => ({
      ...prev,
      email: event.target.value
    }));
  };

  const handleSignupClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (userForm.password !== userForm.againPassword) {
      setErrorMessage('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
    } else {
      console.log("회원가입 시도:", userForm.name, userForm.password, userForm.againPassword, userForm.email);
      setErrorMessage('');

      try {
        const response = await api.post('/user', {
          account_id: userForm.name,
          password: userForm.password,
          email: userForm.email
        });

        if (response.status === 201 || response.status === 200) {
          console.log('Signup successful');
        } else {
          setErrorMessage('회원가입 중 오류가 발생했습니다.');
        }
      } catch (error) {
        setErrorMessage('회원가입 중 오류가 발생했습니다.');
        console.error('Error:', error);
      }
    }
  };

  return (
    <SignupWrapper1>
      <SignupContainer1>
        <ImageContainer1>
          <img src={decoLogin} alt="Signup" />
        </ImageContainer1>
        {errorMessage && <ErrorMessage1>{errorMessage}</ErrorMessage1>}
        <InputFieldContainer1 className="label-id">
          <label htmlFor="username">아이디</label>
          <StyledInput1
            type="text"
            id="username"
            placeholder="아이디를 입력해주세요."
            value={userForm.name}
            onChange={handleUsernameChange}
          />
        </InputFieldContainer1>
        <InputFieldContainer1 className="label-email">
          <label htmlFor="email">이메일</label>
          <StyledInput1
            type="email"
            id="email"
            placeholder="이메일을 입력해주세요."
            value={userForm.email}
            onChange={handleEmailChange}
          />
        </InputFieldContainer1>
        <InputFieldContainer1 className="label-password">
          <label htmlFor="password">비밀번호</label>
          <StyledInput1
            type="password"
            id="password"
            placeholder="비밀번호를 입력해주세요."
            value={userForm.password}
            onChange={handlePasswordChange}
          />
        </InputFieldContainer1>
        <InputFieldContainer1 className="label-password-again">
          <label htmlFor="password-again">비밀번호 재확인</label>
          <StyledInput1
            type="password"
            id="password-again"
            placeholder="비밀번호를 확인해주세요."
            value={userForm.againPassword}
            onChange={handleAgainPasswordChange}
          />
        </InputFieldContainer1>
        <StyledButton1 onClick={handleSignupClick}>Signup</StyledButton1>
      </SignupContainer1>
    </SignupWrapper1>
  );
};

const SignupWrapper1 = styled.div`
  background-image: url(${loginBackground});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignupContainer1 = styled.div`
  width: 35vw;
  height: 50.5vw;
  background-color: #ffffff;
  border-radius: 2.92vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.92vw;
  z-index: 1;
  box-shadow: 0 0.11vw 0.17vw 0.11vw rgba(0, 0, 0, 0.2);
`;

const ImageContainer1 = styled.div`
  img {
    width: 11.6vw;
    height: 5.8vw;
    margin-top: 3.5vw;
  }
`;

const InputFieldContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 1.75vw;
  outline: none;

  &.label-id label,
  &.label-email label,
  &.label-password label,
  &.label-password-again label {
    align-self: flex-start;
    color: black;
    width: 13.4vw;
    font-size: 0.93vw;
  }

  &.label-password-again label {
    padding-left: 1.8vw;
    font-size: 0.93vw;
  }

  &.label-password label {
    width: 14vw;
  }
`;

const StyledInput1 = styled.input`
  width: 23.3vw;
  height: 2.9vw;
  border-radius: 0.46vw;
  border: 1px solid #cccccc;
  background-color: white;
  padding-left: 1.16vw;
  color: black;
  font-size: 0.93vw;
  margin-top: 0.46vw;
  outline: none;

  &::placeholder {
    color: #8e8e8e;
    opacity: 1;
    font-size: 0.93vw;
  }
`;

const StyledButton1 = styled.button`
  width: 24.5vw;
  height: 2.98vw;
  font-family: Pretendard;
  font-size: 1.05vw;
  background-color: #636363;
  color: white;
  border: none;
  border-radius: 0.29vw;
  cursor: pointer;
  margin-top: 4vw;
`;

const ErrorMessage1 = styled.div`
  color: red;
  font-size: 0.81vw;
  margin-bottom: 0.58vw;
`;

export default Signup;