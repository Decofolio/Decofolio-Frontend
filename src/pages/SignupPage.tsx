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
  width: 600px;
  height: 656px;
  background-color: #ffffff;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  z-index: 1;
  box-shadow: 0 2px 3px 2px rgba(0, 0, 0, 0.2);
`;

const ImageContainer1 = styled.div`
  img {
    width: 200px;
    height: 100px;
    margin-top: 60px;
  }
`;

const InputFieldContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  outline: none;

  &.label-id label,
  &.label-email label,
  &.label-password label,
  &.label-password-again label {
    align-self: flex-start;
    color: black;
    width: 230px;
  }

  &.label-password-again label {
    padding-left: 32px;
  }

  &.label-password label {
    width: 240px;
  }
`;

const StyledInput1 = styled.input`
  width: 400px;
  height: 51px;
  border-radius: 8px;
  border: 1px solid #cccccc;
  background-color: white;
  padding-left: 20px;
  color: black;
  font-size: 16px;
  margin-top: 8px;
  outline: none;

  &::placeholder {
    color: #8e8e8e;
    opacity: 1;
    font-size: 16px;
  }
`;

const StyledButton1 = styled.button`
  width: 420px;
  height: 51px;
  background-color: #636363;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 70px;
`;

const ErrorMessage1 = styled.div`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;

export default Signup;