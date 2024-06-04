import React, { useState } from 'react';
import styled from 'styled-components';
import { decoLogin,loginBackground } from '../assets/image';
import api from './api';

interface iUserForm {
  nowPassword: string,
  password: string,
  againPassword: string
}

const PasswordChange: React.FC = () => {

  const [userForm, setUserForm] = useState<iUserForm>({nowPassword: '', password: '', againPassword: ''});
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserForm((prev) => ({
      ...prev,
    name: event.target.value
    }))
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserForm((prev) => ({
      ...prev,
    password: event.target.value
    }))
    setErrorMessage('');
  };

  const handleAgainPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserForm((prev) => ({
      ...prev,
      againPassword: event.target.value
    }));
    setErrorMessage('');
  };

  const handleSignupClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (userForm.password !== userForm.againPassword) {
      setErrorMessage('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
    } else {
      console.log('회원가입 시도:', userForm.nowPassword, userForm.password, userForm.againPassword);

      const accessToken = localStorage.getItem('accessToken');

      if (!accessToken) {
        setErrorMessage('인증 토큰이 없습니다. 다시 로그인 해주세요.');
        return;
      }

      try {
        const response = await api.patch(`/auth/${user_id}`,
          {
            password: userForm.password
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}`
            }
          }
        );

        if (response.status === 201) {
          console.log('Password successfully updated');
          setErrorMessage('');
        } else if (response.status === 400) {
          setErrorMessage('잘못된 요청입니다.');
        } else {
          setErrorMessage('비밀번호 변경 중 오류가 발생했습니다.');
        }
      } catch (error) {
        setErrorMessage('비밀번호 변경 중 오류가 발생했습니다.');
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
          <label htmlFor="username">현재 비밀번호</label>
          <StyledInput1 type="text" id="username" placeholder="현재 비밀번호를 입력해주세요." value={userForm.nowPassword} onChange={handleUsernameChange} />
        </InputFieldContainer1>
        <InputFieldContainer1 className="label-password">
          <label htmlFor="password">수정할 비밀번호</label>
          <StyledInput1 type="password" id="password" placeholder="수정할 비밀번호를 입력해주세요." value={userForm.password} onChange={handlePasswordChange} />
        </InputFieldContainer1>
        <InputFieldContainer1 className="label-password-again">
          <label htmlFor="password">수정할 비밀번호 재확인</label>
          <StyledInput1 type="password" id="password" placeholder="수정할 비밀번호를 확인해주세요." value={userForm.againPassword} onChange={handleAgainPasswordChange} />
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
  height: 45.5vw;
  background-color: #FFFFFF;
  border-radius: 2.92vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.92vw;
  border-radius: 2.92vw;
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

    &.label-id label, &.label-password label {
        align-self: flex-start;
        color: black;
        width: 13.4vw;
        margin-left: 1.05vw;
        font-size: 0.93vw;
    }

    &.label-password-again label {
        align-self: flex-start;
        padding-left: 1.87vw; 
        width: 13.49vw;
        margin-left: 1.05vw;
        color: black;
        font-size: 0.93vw;
    }

    &.label-password label {
        width: 14vw;
    }
`;

const StyledInput1 = styled.input`
  width: 23.3vw;
  height: 2.98vw;
  border-radius: 0.46vw;
  border: 1px solid #cccccc;
  background-color: white;
  padding-left: 1.16vw;
  color: black;
  font-size: 0.93vw;
  margin-top: 0.46vw;
  outline: none;
  &::placeholder {
    color: #8E8E8E;
    opacity: 1;
    font-size: 0.93vw;
  }
`;

const StyledButton1 = styled.button`
  width: 24.56140vw;
  height: 2.98246vw;
  font-size: 1.05vw;
  background-color: #636363;
  color: white;
  border: none;
  border-radius: 0.29vw;
  cursor: pointer;
  margin-top: 4.09vw;
`;

const ErrorMessage1 = styled.div`
    color: red;
    font-size: 0.81vw;
    margin-bottom: 0.58vw;
`;

export default PasswordChange;