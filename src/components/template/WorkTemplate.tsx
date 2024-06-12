import { useState } from "react";
import styled from "styled-components";
import { template1 } from "../../assets/image";

const WorkTemplate = (props: { title: string }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleDelete = () => {
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <Container>
            <Wrapper>
                <BackgroundImg src={template1} />
                <TagWrapper>
                    <TemplateTitle>{props.title}</TemplateTitle>
                </TagWrapper>
                <FontWrapper>
                    <Tnwjd>수정하기</Tnwjd>
                    <Tkrwp onClick={handleDelete}>삭제하기</Tkrwp>
                </FontWrapper>
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
    width: 400px;
    height: 345px;
    border-radius: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const TemplateTitle = styled.div`
    font: ${({ theme }) => theme.fonts.Regular20};
`;

const BackgroundImg = styled.img`
    width: 100%;
    overflow: hidden;
    border-radius: 20px 20px 0px 0px;
`;

const TagWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    padding-left: 20px;
`;

const Tag = styled.div`
    display: flex;
    justify-content: center;    
    align-items: center;
    padding: 8px 17px;
    background-color: #364F6B;
    color: white;
    border-radius: 20px;
    font: ${({ theme }) => theme.fonts.Regular16};
`;

const FontWrapper = styled.div`
    display: flex;
    justify-content: end;
    margin-right: 2vw;
    gap: 15px;
    cursor: pointer;
`;

const Tnwjd = styled.div`
    font: ${({ theme }) => theme.fonts.Regular16};
    color: #364F6B;
`;

const Tkrwp = styled.div`
    font: ${({ theme }) => theme.fonts.Regular16};
    color: #FF0000;
`;

const TemplateDetail = styled.span`
    width: 100px;
    display: flex;
    gap: 10px;
    justify-content: end;
    font: ${({ theme }) => theme.fonts.Regular14};
    color: #364F6B;
    cursor: pointer;
    margin-left: 270px;
`;

export default WorkTemplate;
