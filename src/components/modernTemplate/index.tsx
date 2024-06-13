import styled from "styled-components";
import Main from "./main";
import Project from "./project";
import Resume from "./resume";
import Contact from "./contact";

const ModernTemplate = () => {
  return(
    <Container>
      <Main />
      <Resume />
      <Project />
      <Contact />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;



export default ModernTemplate;