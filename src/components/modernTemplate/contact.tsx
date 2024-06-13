import styled from "styled-components";

const Contact = () => {
  return(
    <Container>
      <Content>
        <TitleSection>
          <Title>CONTACT</Title>
          <UnderLine />
        </TitleSection>
        <Items>
          <Div>
            <Icon src="src/assets/image/modern/notion.svg" alt=""/>
            <Name>Notion</Name>
          </Div>
          <Div>
            <Icon src="src/assets/image/modern/github.svg" alt=""/>
            <Name>Github</Name>
          </Div>
          <Div>
            <Icon src="src/assets/image/modern/instagram.svg" alt=""/>
            <Name>Instagram</Name>
          </Div>
          <Div>
            <Icon src="src/assets/image/modern/linkedin.svg" alt=""/>
            <Name>Linkedin</Name>
          </Div>
        </Items>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  padding: 8vw 12.2vw 20vw;
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
  width: 12.8vw;
  height: 1.2vw;
  background-color: #CCC3BC;
  margin-top: 1.7vw;
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11.6vw;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.75vw;
  width: 9.5vw;
  height: 9.5vw;
`;

const Name = styled.div`
  font-family: Hiragino Mincho ProN;
  font-size: 2.3vw;
  font-weight: 600;
  color: #CCC3BC;
`;

export default Contact;