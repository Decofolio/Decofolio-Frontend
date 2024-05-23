import React, { useState } from 'react';
import styled from 'styled-components';
import { decoLogin, loginBackground } from '../assets/image';
import { useNavigate } from 'react-router-dom';

interface iUserForm {
    name: string,
    password: string
}

const Login: React.FC = () => {
    const navigate = useNavigate();
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

    const handleLoginClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log("로그인 시도:", userForm.name, userForm.password);
    };

    return (
        <LoginWrapper>
            <LoginContainer>
                <ImageContainer>
                    <img src={decoLogin} alt="login" />
                </ImageContainer>
                <InputFieldContainer className="label-id">
                    <label htmlFor="username">아이디</label>
                    <StyledInput type="text" id="username" placeholder="아이디를 입력해주세요." value={userForm.name} onChange={handleUsernameChange} />
                </InputFieldContainer>
                <InputFieldContainer className="label-password">
                    <label htmlFor="password">비밀번호</label>
                    <StyledInput type="password" id="password" placeholder="비밀번호를 입력해주세요." value={userForm.password} onChange={handlePasswordChange} />
                </InputFieldContainer>
                <StyledButton onClick={()=> {navigate('/main')}}>Login</StyledButton>
            </LoginContainer>
        </LoginWrapper>
    );
};

const LoginWrapper = styled.div`
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

const LoginContainer = styled.div`
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

const ImageContainer = styled.div`
    img {
        width: 200px;
        height: 100px;
        margin-top: 60px; 
    }
`;

const InputFieldContainer = styled.div`
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

    &.label-password label {
        width: 240px;
    }
`;

const StyledInput = styled.input`
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

const StyledButton = styled.button`
    width: 420px;
    height: 51px;
    background-color: #636363;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 70px;
`;

export default Login;