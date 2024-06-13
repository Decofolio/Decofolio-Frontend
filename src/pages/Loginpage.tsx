import React, { useState } from 'react';
import styled from 'styled-components';
import { decoLogin, loginBackground } from '../assets/image';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from '../apis';

interface iUserForm { 
  name: string,
  password: string
}

const LoginPage: React.FC = () => {

  const [userForm, setUserForm] = useState<iUserForm>({ name: '', password: '' });

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
  };

  const handleLoginClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("로그인 시도:", userForm.name, userForm.password);

    const requestData = {
      account_id: userForm.name,
      password: userForm.password
    };

    try {
      const response = await api.post(`/auth/login`, requestData);

      if (response.status === 200) {
        const data = response.data;
        console.log("로그인 성공:", data);
      } else {
        console.error("로그인 실패:", response.status);
      }
    } catch (error) {
      console.error("로그인 중 에러 발생:", error);
    }
  };

  return (
    <LoginWrapper2>
      <LoginContainer2>
        <ImageContainer2>
          <img src={decoLogin} alt="login" />
        </ImageContainer2>
        <InputFieldContainer2 className="label-id">
          <label htmlFor="username">아이디</label>
          <StyledInput2 type="text" id="username" placeholder="아이디를 입력해주세요." value={userForm.name} onChange={handleUsernameChange} />
        </InputFieldContainer2>
        <InputFieldContainer2 className="label-password">
          <label htmlFor="password">비밀번호</label>
          <StyledInput2 type="password" id="password" placeholder="비밀번호를 입력해주세요." value={userForm.password} onChange={handlePasswordChange} />
        </InputFieldContainer2>
        <StyledButton2 onClick={handleLoginClick}>Login</StyledButton2>
      </LoginContainer2>
    </LoginWrapper2>
  );
};

const LoginWrapper2 = styled.div`
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

const LoginContainer2 = styled.div`
    width: 35vw;
    height: 38.3vw;
    background-color: #FFFFFF;
    border-radius: 2.92vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2.92vw;
    z-index: 1;
    box-shadow: 0 0.11vw 0.17vw 0.11vw rgba(0, 0, 0, 0.2);
`;

const ImageContainer2 = styled.div`
    img {
        width: 11.6vw;
        height: 5.8vw;
        margin-top: 3.5vw;
    }
`;

const InputFieldContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1.75vw;
    outline: none;

    &.label-id label, &.label-password, label {
        align-self: flex-start;
        color: black;
        width: 13.4vw;
        font-size: 0.93vw;
    }

    &.label-password label {
        width: 14vw;
        font-size: 0.93vw;
    }
`;

const StyledInput2 = styled.input`
    width: 23.3vw;
    height: 2.9vw;
    border-radius: 0.46vw;
    border: 1px solid #cccccc;
    background-color: white;
    padding-left: 1.16vw;
    color: black;
    font-size: 0.9vw;
    margin-top: 0.4vw;
    margin-left: 5.2vw;
    outline: none;

    &::placeholder {
        color: #8E8E8E;
        opacity: 1;
        font-size: 0.93vw;
    }
`;

const StyledButton2 = styled.button`
    width: 24.5vw;
    height: 2.98vw;
    font-family: Pretendard;
    font-size: 1.05vw;
    background-color: #636363;
    color: white;
    border: none;
    border-radius: 0.29vw;
    cursor: pointer;
    margin-top: 4.09vw;
`;

export default LoginPage;
