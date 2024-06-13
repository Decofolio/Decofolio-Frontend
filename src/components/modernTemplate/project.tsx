import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Search } from "../../assets/image";

const Project = () => {

  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <TitleSection>
          <Title>PROJECT</Title>
          <UnderLine />
        </TitleSection>
        <Items>
          <Button>
            <Move src="src/assets/image/modern/left.svg" alt="" />
          </Button>
          <ImageContainer onClick={() => { navigate("/modernProjectDetail"); }}>
            <Img src="src/assets/image/modern/project.svg" alt=""/>
            <Overlay>
              <Icon src={Search} alt="icon" />
              <SubjectText>Decofolio</SubjectText>
              <SubText>웹 포트폴리오 구현 서비스</SubText>
              <ContentText>
                대충 어떠한 프로젝트고 어떠한 기능이 있는지
                대충 어떠한 프로젝트고 어떠한 기능이
                대충 어떠한 프로젝트고 어떠한 기능이 있는
                대충 어떠한 프로젝트고 어떠한
                대충 어떠한 프로젝트고 어떠한 기능이 있
              </ContentText>
            </Overlay>
          </ImageContainer>
          <ImageContainer onClick={() => { navigate("/modernProjectDetail"); }}>
            <Img src="src/assets/image/modern/project.svg" alt=""/>
            <Overlay>
              <Icon src={Search} alt="icon" />
              <SubjectText>Decofolio</SubjectText>
              <SubText>웹 포트폴리오 구현 서비스</SubText>
              <ContentText>
                대충 어떠한 프로젝트고 어떠한 기능이 있는지
                대충 어떠한 프로젝트고 어떠한 기능이
                대충 어떠한 프로젝트고 어떠한 기능이 있는
                대충 어떠한 프로젝트고 어떠한
                대충 어떠한 프로젝트고 어떠한 기능이 있
              </ContentText>
            </Overlay>
          </ImageContainer>
          <ImageContainer onClick={() => { navigate("/modernProjectDetail"); }}>
            <Img src="src/assets/image/modern/project.svg" alt=""/>
            <Overlay>
              <Icon src={Search} alt="icon" />
              <SubjectText>Decofolio</SubjectText>
              <SubText>웹 포트폴리오 구현 서비스</SubText>
              <ContentText>
                대충 어떠한 프로젝트고 어떠한 기능이 있는지
                대충 어떠한 프로젝트고 어떠한 기능이
                대충 어떠한 프로젝트고 어떠한 기능이 있는
                대충 어떠한 프로젝트고 어떠한
                대충 어떠한 프로젝트고 어떠한 기능이 있
              </ContentText>
            </Overlay>
          </ImageContainer>
          <Button>
            <Move src="src/assets/image/modern/right.svg" alt="" />
          </Button>
        </Items>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  padding: 10.8vw 10.5vw 15vw;
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8.7vw;
`;

const Title = styled.div`
  font-family: Hiragino Mincho ProN;
  font-size: 2.3vw;
  font-weight: 800;
  color: black;
  position: absolute;
`;

const UnderLine = styled.div`
  width: 11.9vw;
  height: 1.2vw;
  background-color: #CCC3BC;
  margin-top: 1.7vw;
`;

const Items = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.9vw;
`;

const Button = styled.button`
  width: 2.3vw;
  height: 2.3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.16vw;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 20.4vw;
  height: 29.2vw;
  cursor: pointer;
  &:hover div {
    opacity: 1;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 86%;
  background-color: rgba(204, 195, 188, 0.7);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 33.5px;
  opacity: 0;
  transition: opacity 0.5s ease;
`;

const Icon = styled.img`
  width: 5.2vw;
  height: 5.2vw;
  margin-bottom: 1vw;
`;

const SubjectText = styled.div`
  color: white;
  font-family: Hiragino Mincho ProN;
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 0.5vw;
`;

const SubText = styled.div`
  color: white;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 1vw;
`;

const ContentText = styled.div`
  color: white;
  font-family: Pretendard;
  font-size: 16px;
  text-align: center;
  padding: 0 2vw;
`;

const Move = styled.img`
  width: 2.3vw;
  height: 2.3vw;
  cursor: pointer;
`;

export default Project;
