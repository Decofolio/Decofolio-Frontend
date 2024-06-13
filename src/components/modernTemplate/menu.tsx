import styled from "styled-components";

const Menu = () => {
  return(
    <Container>
      <Items>
        <Item>MAIN</Item>
        <Item>RESUME</Item>
        <Item>PROJECT</Item>
        <Item>CONTACT</Item>
      </Items>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Items = styled.div`
  display: flex;
  justify-content: flex-end;;
  align-items: center;
  gap: 70px;
  padding: 100px 0 0 180px;
`;

const Item = styled.div`
  font-family: Hiragino Mincho ProN;
  font-size: 24px;
  font-weight: 500;
`;

export default Menu;