import styled from "styled-components";

const Main = () => {
  return (
    <Container>
      <Content>
        <TitleSection>
          <MainImg src="src/assets/image/modern/mainImg.svg" alt="" />
          <Textarea>
            <Sub type="text" alt="한 줄 소개" placeholder="한 줄 소개를 입력해주세요" />
            <BlodUnderLine />
            <Title type="text" alt="제목" placeholder="제목 입력" />
            <Line />
            <Explan type="text" alt="설명" placeholder="설명을 입력해주세요" />
          </Textarea>
        </TitleSection>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  padding: 10.8vw 10.5vw 18.1vw;
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;
`;

const MainImg = styled.img`
  display: flex;
  justify-content: center;
  border-radius: 0 23.4vw 23.4vw 0;
  width: 35vw;
  height: 32.1vw;
`;

const Textarea = styled.div`
  margin-left: 2.9vw;
`;

const Sub = styled.input`
  width: 583px;
  height: 60px;
  font-family: Pretendard;
  font-size: 40px;
  font-weight: 500;
  border: none;
  outline: none;
`;

const BlodUnderLine = styled.div`
  width: 25.2vw;
  height: 1.7vw;
  background-color: #CCC3BC;
  margin-top: 1.7vw;
`;

const Title = styled.input`
  width: 600px;
  height: 220px;
  font-family: Hiragino Mincho ProN;
  font-size: 8.7vw;
  font-weight: 800;
  color: black;
  margin-bottom: 2.1vw;
  border: none;
  outline: none;
`;

const Line = styled.div`
  width: 5.8vw;
  height: 0.17vw;
  background-color: black;
  margin-bottom: 1.1vw;
`;

const Explan = styled.input`
  display: flex;
  font-family: Pretendard;
  font-size: 1.05vw;
  font-weight: 400;
  text-align: start;
  position: absolute;
  color: black;
  width: 486px;
  height: 99px;
  border: none;
  outline: none;
`;

export default Main;