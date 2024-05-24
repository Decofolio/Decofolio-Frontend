import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  const handleMemberWithdrawal = () => {
    alert('회원탈퇴');
    navigate('/login');
  };
  return (
    <Container>
      <Logo src="src/assets/image/headerLogo.svg" alt="" onClick={() => {navigate('/main')}} />
      <Contents>
        <Item onClick={() => {navigate('/work')}}>작업</Item>
        <Item onClick={() => {navigate('/login')}}>로그아웃</Item>
        <Item onClick={handleMemberWithdrawal}>회원탈퇴</Item>
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  width: 100vw;
  min-width: 960px;
  height: 61px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 40vw;
  padding: 13px 0; 
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`  
  cursor: pointer;
  width: 200px;
`;

const Contents = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
`;

const Item = styled.p`
  font: ${({ theme }) => theme.fonts.Medium24};
  position: relative;
  cursor: pointer;
  &:hover {
    color: #364F6B;
  }
`;

export default Header;