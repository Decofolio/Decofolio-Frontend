import styled from "styled-components";

const ProjectDetailM = () => {
  return(
    <Container>
      <Content>
        <Introduce>
            <ProjectView src="src/assets/image/modern/projectDetailView.svg" alt="" />
            <ExplanSelection>
              <TitleSection>
                <ProjectName>Decofolio</ProjectName>
                <UnderLine />
              </TitleSection>
              <Skills>React / TypeScript</Skills>
              <Explan>
                이 서비스는 개발자 또는 포트폴리오가 필요한 모든 사람이 이용할 수 있는 맞춤형 포트폴리오 서비스 입니다.
              <br/>원하는 템플릿을 선택하여 정보를 입력하고 자신의 취향에 맞게 커스텀 할 수 있습니다.
              <br/><br/>이 서비스는 개발자 또는 포트폴리오가 필요한 모든 사람이 이용할 수 있는 맞춤형 포트폴리오 서비스 입니다.
              <br/>원하는 템플릿을 선택하여 정보를 입력하고 자신의 취향에 맞게 커스텀 할 수 있습니다.
              </Explan>
              <Links>
                <Icon src="src/assets/image/modern/github.svg" alt="" />
                <Icon src="src/assets/image/modern/Website.svg" alt="" />
              </Links>
            </ExplanSelection>
        </Introduce>
        <ViewSection>
          <View src="src/assets/image/dynamicImg/projectDetailImg.svg" alt="" />
          <View src="src/assets/image/dynamicImg/projectDetailImg.svg" alt="" />
        </ViewSection>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100vw
`;

const Content = styled.div`
  padding: 10.8vw 12.5vw 18.1vw;
`;

const Introduce = styled.div`
  display: flex;
`;

const ProjectView = styled.img`
  width: 500px;
  height: 500px;
  margin-right: 150px;
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

const ProjectName = styled.div`
  font-family: Hiragino Mincho ProN;
  font-size: 4.6vw;
  font-weight: 700;
  color: black;
  position: absolute;
`;

const ExplanSelection = styled.div`
  display: flex;
  flex-direction: column;
`;

const UnderLine = styled.div`
  width: 22.8vw;
  height: 2.3vw;
  background-color: #CCC3BC;
  margin-top: 4.3vw;
`;

const Skills = styled.div`
  font-family: Hiragino Mincho ProN;
  font-size: 1.16vw;
  font-weight: 600;
  color: grey;
  margin-top: 1.16vw;
  display: flex;
`;

const Explan = styled.div`
  display: flex;
  text-align: start;
  margin-top: 35px;
  font-family: Pretendard;
  font-size: 18px;
`;

const Links = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 50px;
  margin-top: 40px;
`;

const Icon = styled.img`
  width: 50px;
`;

const ViewSection = styled.div`

`;

const View = styled.img`
  width: 1300px;
  height: 693px;
  margin-top: 180px;
`;

export default ProjectDetailM;