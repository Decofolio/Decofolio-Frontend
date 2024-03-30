import './Login.css';
import decoLogin from '../../assets/image/decoLogin.svg';

function Login() {
  return (
    <div className="loginWrapper">
      <div className="loginContainer">
        <div className="imageContainer">
          <img src={decoLogin} alt="login" />
        </div>
        <div className="inputFieldContainer label-id">
          <label htmlFor="username">아이디</label>
          <input type="text" id="username" placeholder="아이디를 입력해주세요." />
        </div>
        <div className="inputFieldContainer label-password">
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" placeholder="비밀번호를 입력해주세요." />
        </div>
        <button>Login</button>
      </div>
    </div>
  );
}
export default Login;