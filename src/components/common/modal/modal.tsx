import styled from "styled-components";
import { ReactElement } from "react";

interface props {
  open: boolean;
  close: (v: boolean) => void;
  children: React.ReactNode;
  height: number;
}

const DefaultModal = (props: props): ReactElement => {
  const { children, height } = props;

  return (
    <ModalContainer>
      <ModalBox height={height}>{children}</ModalBox>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(33, 33, 33, 0.3);
  justify-content: center;
  align-items: center;
  z-index: 101 !important;
  cursor: pointer;
`;

const ModalBox = styled.div<{ height: number }>`
  height: ${({ height }) => height}vw;
  width: 70vw;
  cursor: auto;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25);
  border-radius: 0.93vw;
  background-color: white;
  padding: 4.67vw 7.01vw;
  z-index: 1;
  p {
    margin-top: 0;
    color: black;
    display: flex;
  }
  > div {
    display: flex;
  }
`;

export default DefaultModal;