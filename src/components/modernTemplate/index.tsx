import styled from "styled-components"
import { arrow, template1 } from "../../assets/image";
import DefaultModal from "../common/modal";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TemplateListResponse } from "../../apis/feed/type";

interface PropsType {
    data?: TemplateListResponse
}

const Template = ({ data }: PropsType) => {
    

    return (
        <Container>
            <Wrapper>
                <BackgroundImg src={template1} />
                <TagWrapper>
                    <Tag>{data?.title}</Tag>
                    <Tag>{data?.subtitle}</Tag>
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

const Cancle = styled.img`
    width: 1.4vw;
    cursor: pointer;
    margin-left: 70.1vw;
`;

const ExplanSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 6.4vw;
`;

const View = styled.img`
    width: 40.9vw;
    height: 23.3vw;
    float: left;
`;

const ModalTitle = styled.div`
    font-family: "Pretendard";
    font-size: 1.75vw;
    font-weight: 600;
    color: black;
    display: flex;
`;

const ModalSub = styled.div`
    font-family: "Pretendard";
    font-size: 0.93vw;
    font-weight: 500;
    color: #575757;
    margin-top: 0.58vw;
    margin-bottom: 0.87vw;
`;

const Tag = styled.div`
    font-family: "Pretendard";
    font-size: 0.81vw;
    font-weight: 500;
    color: #8E8E8E;
    background-color: #F5F5F5;
    padding: 0.4vw 1.22vw;
    border-radius: 1.16vw;
    margin-right: 0.87vw;
`;

const Like = styled.img`
    width: 1.75vw;
    margin-left : 1.3vw;
    cursor: pointer;
`;

const ModalButton = styled.button`
    color: white;
    background-color: #364F6B;
    height: 2.39vw;
    width: 17.5vw;
    font-size: 0.81vw;
    border: none;
    outline: none;
    border-radius: 0.46vw;
`;

const Github = styled.img`
    width: 1.75vw;
    cursor: pointer;
`;    

const Footer = styled.div`
    display: flex;
    margin-top: 14.5vw;
    gap: 1.16vw;
`;

const CommentSection = styled.div`
    display: flex;
    flex-direction: column;
`;

const CommentInput = styled.div`
    display: flex;
`;

const CommentsList = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1.16vw;
`;

const DeleteButton = styled.div`
    font-family: "Pretendard";
    font-size: 0.81vw;
    font-weight: 400;
    color: red;
    cursor: pointer;
    visibility: hidden;
    position: absolute;
    top: 1.16vw;
    right: 1.16vw;
`;

const Comment = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 61.5vw;
    padding: 1.16vw;;
    margin-bottom: 0.58vw;
    border-radius: 0.46vw;

    &:hover {
        background-color: #FAFAFA;

        ${DeleteButton} {
            visibility: visible;
        }
    }
`;

const CommentText = styled.div`
    display: flex;
    flex-direction: column;
`;

const CommentAuthor = styled.div`
    font-family: "Pretendard";
    font-size: 0.93vw;
    font-weight: 500;
    margin-bottom: 0.46vw;
`;

const CommentContent = styled.div`
    font-family: "Pretendard";
    font-size: 0.81vw;
    font-weight: 400;
    color: #3F4447;
    text-align: justify;
`;

const Input = styled.input`
    width: 62.7vw;
    height: 2.74vw;
    font-family: "Pretendard";
    font-size: 0.81vw;
    font-weight: 400;
    border: 1px solid #D9D9D9;
    border-radius: 0.46vw;
    outline: none;
    margin-top: 6.31vw;
    padding: 0 0 0 1.16vw;
    align-items: center;
`;

const CommentButton = styled.button`
    width: 4.5vw;
    height: 2.74vw;
    background-color: #D9D9D9;
    font-family: "Pretendard";
    font-size: 0.81vw;
    font-weight: 500;
    color: white;
    border-radius: 0.46vw;
    margin-top: 6.31vw;
    margin-left: 0.58vw;
    outline: none;
    border: none;
    &:hover {
        background-color: #364F6B;
    }
`;

export default Template;