import styled from "styled-components";

const Header = () => {
  return(
    <Container>
      <Logo src="src/assets/image/headerLogo.svg" alt="" />
      <Contents>
        <Item>템플릿</Item>
        <Item>작업</Item>
        <Item>로그아웃</Item>
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
  justify-content: space-between;
  padding: 15px 180px;
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
  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 400;
  position: relative;
  cursor: pointer;
  &:hover {
    font-weight: 500;
    color: #364F6B;
  }
`;

export default Header;