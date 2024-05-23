import React, { useState } from 'react';
import styled from 'styled-components';
import { decoLogin,loginBackground } from '../assets/image';
import axios from "axios";

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
        const response = await axios.patch(`15.165.66.3:8080/${user_id}`, 
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
    width: 600px;
    height: 656px;
    background-color: #FFFFFF;
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

    &.label-id label, &.label-password label {
        align-self: flex-start;
        color: black;
        width: 230px;
    }

    &.label-password-again label {
        align-self: flex-start;
        padding-left: 32px;
        color: black;
        width: 230px;
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
        color: #8E8E8E;
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

export default PasswordChange;