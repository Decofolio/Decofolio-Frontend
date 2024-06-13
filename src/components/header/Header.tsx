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
  height: 61px;
  min-width: 720px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 40vw;
  padding: 13px 0;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 1000px) {
    height: 31px;
    paddging: 6.5px 0;
  }
`;

const Logo = styled.img`  
  cursor: pointer;
  width: 200px;

  @media (max-width: 1000px) {
    width: 150px;
  }
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

  @media (max-width: 1000px) {
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 500;
  }
`;

export default Header;