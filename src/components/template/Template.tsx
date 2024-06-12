import styled from "styled-components"
import { arrow, template1 } from "../../assets/image";
import { TemplateListResponse } from "../../apis/feed/type";

interface PropsType {
    data?: TemplateListResponse
}

const Template = ({data}: PropsType) => {
    return (
        <Container>
            <Wrapper>
                <BackgroundImg src={template1} />
                <TagWrapper>
                    <Tag>{data?.title}</Tag>
                    <Tag>{data?.subtitle}</Tag>
                    <Tag># 다이나믹</Tag>
                </TagWrapper>
                <TemplateDetail>자세히 보기 <img src={arrow} /></TemplateDetail>
            </Wrapper>
        </Container>
    )
}

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
`

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

const TemplateDetail = styled.span`
    width: 100px;
    display: flex;
    gap: 10px;
    justify-content: end;
    font: ${({ theme }) => theme.fonts.Regular14};
    color: #364F6B;
    cursor: pointer;
    margin-left: 27 0px;
`;

export default Template