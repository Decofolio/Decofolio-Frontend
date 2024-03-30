import React, { useState } from 'react';
import './Login.css';
import decoLogin from '../../assets/image/decoLogin.svg';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("로그인 시도:", username, password);
  };

  return (
    <div className="loginWrapper">
      <div className="loginContainer">
        <div className="imageContainer">
          <img src={decoLogin} alt="login" />
        </div>
        <div className="inputFieldContainer label-id">
          <label htmlFor="username">아이디</label>
          <input type="text" id="username" placeholder="아이디를 입력해주세요." value={username} onChange={handleUsernameChange} />
        </div>
        <div className="inputFieldContainer label-password">
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" placeholder="비밀번호를 입력해주세요." value={password} onChange={handlePasswordChange} />
        </div>
        <button onClick={handleLoginClick}>Login</button>
      </div>
    </div>
  );
};

export default Login;