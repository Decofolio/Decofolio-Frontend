import styled from "styled-components";
import AbilityBarChart from "./abilityBarChart";

const Resume = () => {
  return(
    <Container>
      <Content>
        <TitleSection>
          <Title>RESUME</Title>
          <UnderLine />
        </TitleSection>
        <Section>
          <InfoSection>
            <Profile src="src/assets/image/modern/profileImg.svg" alt="" />
            <Info>
              <Line />
              <Name>
                <KrName type="text" alt="한글 이름" placeholder="이름"/>
                <EngName type="text" alt="영어 이름" placeholder="영문 이름 입력"/>
              </Name>
              <InfoText type="text" alt="생년월일" placeholder="생년월일을 입력해주세요"/>
              <InfoText type="text" alt="전화번호" placeholder="전화번호를 입력해주세요"/>
              <InfoText type="text" alt="이메일" placeholder="이메일을 입력해주세요"/>
              <InfoText type="text" alt="장소" placeholder="장소를 입력해주세요"/>
            </Info>
          </InfoSection>
          <ContentSection>
            <LeftSection>
              <EducationSection>
                <TitleText type="text" alt="주제" placeholder="주제를 입력해주세요"/>
                <Text type="text" alt="내용" placeholder="내용를 입력해주세요"/>
                <SubText type="text" alt="추가 내용" placeholder="추가 내용을 입력해주세요"/>
                <Text type="text" alt="내용" placeholder="내용를 입력해주세요"/>
                <SubText type="text" alt="추가 내용" placeholder="추가 내용을 입력해주세요"/>
              </EducationSection>
              <CertificateSection>
                <TitleText type="text" alt="주제" placeholder="주제를 입력해주세요"/>
                <Text type="text" alt="내용" placeholder="내용를 입력해주세요"/>
                <SubText type="text" alt="추가 내용" placeholder="추가 내용을 입력해주세요"/>
                <Text type="text" alt="내용" placeholder="내용를 입력해주세요"/>
                <SubText type="text" alt="추가 내용" placeholder="추가 내용을 입력해주세요"/>
                <Text type="text" alt="내용" placeholder="내용를 입력해주세요"/>
                <SubText type="text" alt="추가 내용" placeholder="추가 내용을 입력해주세요"/>
              </CertificateSection>
              <AwardsSection>
                <TitleText type="text" alt="주제" placeholder="주제를 입력해주세요"/>
                <Text type="text" alt="내용" placeholder="내용를 입력해주세요"/>
                <SubText type="text" alt="추가 내용" placeholder="추가 내용을 입력해주세요"/>
              </AwardsSection>
            </LeftSection>
            <RightsSection>
              <ExperienceSection>
                <TitleText type="text" alt="주제" placeholder="주제를 입력해주세요"/>
                <Text type="text" alt="내용" placeholder="내용를 입력해주세요"/>
                <SubText type="text" alt="추가 내용" placeholder="추가 내용을 입력해주세요"/>
                <Text type="text" alt="내용" placeholder="내용를 입력해주세요"/>
                <SubText type="text" alt="추가 내용" placeholder="추가 내용을 입력해주세요"/>
                <Text type="text" alt="내용" placeholder="내용를 입력해주세요"/>
                <Text type="text" alt="내용" placeholder="내용를 입력해주세요"/>
              </ExperienceSection>
              <SkillSection>
                <TitleText type="text" alt="주제" placeholder="주제를 입력해주세요"/>
                <Item>
                  <Skill>Figma</Skill>
                  <Skill>HTML</Skill>
                  <Skill>CSS</Skill>
                  <Skill>C</Skill>
                  <Skill>Python</Skill>
                  <Skill>JAVA</Skill>
                  <Skill>JavaScript</Skill>
                  <Skill>Photoshop</Skill>
                </Item>
              </SkillSection>
              <AbilitySection>
                <TitleText type="text" alt="주제" placeholder="주제를 입력해주세요"/>
                <AbilityBarChart />
              </AbilitySection>
            </RightsSection>
          </ContentSection>
        </Section>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100vw;
`;

const Content = styled.div`
  padding: 5.84vw 10.5vw;
`;

const Section = styled.div`
  display: flex;
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3.5vw;
  margin-right: 300px;
`;

const Title = styled.div`
  font-family: Hiragino Mincho ProN;
  font-size: 2.3vw;
  font-weight: 800;
  color: black;
  position: absolute;
`;

const UnderLine = styled.div`
  width: 11vw;
  height: 1.2vw;
  background-color: #CCC3BC;
  margin-top: 1.7vw;
`;

const InfoSection = styled.div`
  width: 17.5vw;
  margin-right: 30px;
`;

const Profile = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4.6vw;
  margin-bottom: 2.9vw;
  width: 17.5vw;
  height: 23.3vw;
`;

const Info = styled.div`
  padding: 0 1.16px;
`;

const Line = styled.div`
  width: 2.04vw;
  height: 0.17vw;
  background-color: black;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.8vw;
  margin-bottom: 0.8vw;
`;

const KrName = styled.input`
  font-family: Pretendard;
  font-size: 2.3vw;
  font-weight: 600;
  color: black;
  margin-right: 1.16vw;
  width: 87px;
  height: 32px;
  border: none;
  outline: none;
`;

const EngName = styled.input`
  width: 170px;
  height: 31px;
  font-family: Hiragino Mincho ProN;
  font-size: 1.2vw;
  font-weight: 600;
  color : black;
  border: none;
  outline: none;
`;

const InfoText = styled.input`
  width: 296px;
  height: 35px;
  font-family: Hiragino Mincho ProN;
  font-size: 0.9vw;
  font-weight: 600;
  display: flex;
  color : black;
  justify-content: flex-center;
  line-height: 35px;
  border: none;
  outline: none;
`;

const ContentSection = styled.div`
  display: flex;
`;

const EducationSection = styled.div`
  margin-bottom: 115px;
`;

const TitleText = styled.input`
  font-family: Hiragino Mincho ProN;
  font-size: 1.16vw;
  font-weight: 600;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  width: 280px;
  height: 30px;
  border: none;
  outline: none;
`;

const Text = styled.input`
  font-family: Pretendard;
  font-size: 0.9vw;
  font-weight: 500;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 5px;
  width: 320px;
  height: 18px;
  border: none;
  outline: none;
`;

const SubText = styled.input`
  font-family: Pretendard;
  font-size: 0.8vw;
  font-weight: 400;
  color: grey;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  width: 320px;
  height: 16px;
  border: none;
  outline: none;
`;

const CertificateSection = styled.div`
  margin-bottom: 98px;
`;

const AwardsSection = styled.div`
  margin-bottom: 37px;
`;

const ExperienceSection = styled.div`
`;

const SkillSection = styled.div`
  margin-top: 50px;
`;

const Skill = styled.div`
  font-family: Hiragino Mincho ProN;
  font-size: 1.1vw;
  font-weight: 400;
  display: flex;
  padding: 3px 12px;
  background-color: #CCC3BC;
`;

const LeftSection = styled.div`
  width: 500px;
  margin-left: 100px;
`;

const RightsSection = styled.div`
  margin-left: 80px;
`;

const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const AbilitySection = styled.div`
  margin-top: 190px;
`;

export default Resume;