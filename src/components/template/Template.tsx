import styled from "styled-components"
import { arrow, template1 } from "../../assets/image";
import DefaultModal from "../common/modal/modal";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Template = () => {
    const navigate = useNavigate();

    const [isCheckModal, setIsCheckModal] = useState<boolean>(false);
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [likeCount, setLikeCount] = useState<number>(0);
    const [comments, setComments] = useState<{author: string, text: string}[]>([]);
    const [newComment, setNewComment] = useState<string>("");
    const [author] = useState<string>("홍길동");

    function openCheckModal() {
        setIsCheckModal(true);
    }

    function closeCheckModal() {
        setIsCheckModal(false);
    }

    function handleCancle() {
        closeCheckModal();
    }

    function toggleLike() {
        if (isLiked) {
            setIsLiked(false);
            setLikeCount(likeCount - 1);
        } else {
            setIsLiked(true);
            setLikeCount(likeCount + 1);
        }
    }

    function handleCommentChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNewComment(event.target.value);
    }

    function addComment() {
        if (newComment.trim() !== "") {
            setComments([...comments, {author, text: newComment}]);
            setNewComment("");
        }
    }

    function deleteComment(index: number) {
        const newComments = comments.filter((_, i) => i !== index);
        setComments(newComments);
    }

    return (
        <Container>
            <Wrapper>
                <BackgroundImg src={template1} />
                <TagWrapper>
                    <Tag1># 다이나믹</Tag1>
                    <Tag1># 다이나믹</Tag1>
                    <Tag1># 다이나믹</Tag1>
                </TagWrapper>
                <TemplateDetail onClick={openCheckModal}>자세히 보기 <img src={arrow} /></TemplateDetail>
                {isCheckModal && (
                <DefaultModal
                    open={isCheckModal}
                    close={closeCheckModal}
                    height={34.5}
                >
                    <Cancle onClick={handleCancle} src="src/assets/image/Close.svg"/>
                    <div>
                    <View src="src/assets/image/ModalView.svg" />
                    <ExplanSection>
                        <div>
                            <ModalTitle>다이나믹 심플 포트폴리오</ModalTitle>
                            <Like
                                onClick={toggleLike}
                                src={isLiked ? "src/assets/image/LikeFilled.svg" : "src/assets/image/Like.svg"}
                            />
                        </div>
                            <ModalSub>자체 제착 템플릿</ModalSub>
                        <div>
                            <Tag># 디아니믹</Tag>
                            <Tag># 심플</Tag>
                            <Tag># 고딕</Tag>
                        </div>
                        <Footer>
                        <ModalButton onClick={() => {
                            navigate("/modernTemplate");
                        }}>이 템플릿 편집하기</ModalButton>
                        <Github onClick={() => {
                            window.open("https://github.com/Decofolio/Decofolio-Frontend")
                        }} src="src/assets/image/MainGithub.svg" alt="" />
                        </Footer>
                    </ExplanSection>
                    </div>
                    <CommentSection>
                    <CommentInput>
                        <Input
                            placeholder="내용을 입력해주세요"
                            value={newComment}
                            onChange={handleCommentChange}
                            onKeyPress={(event) => {
                                if (event.key === "Enter") {
                                    addComment();
                                }
                            }}
                        />
                        <CommentButton onClick={addComment}>댓글</CommentButton>
                    </CommentInput>
                    <CommentsList>
                        {comments.map((comment, index) => (
                            <Comment key={index}>
                                <CommentText>
                                    <CommentAuthor>{comment.author}</CommentAuthor>
                                    <CommentContent>{comment.text}</CommentContent>
                                </CommentText>
                                <DeleteButton onClick={() => deleteComment(index)}>삭제</DeleteButton>
                            </Comment>
                        ))}
                    </CommentsList>
                    </CommentSection>
                </DefaultModal>
                )}
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
    div {
        display: flex;
    }
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

const Tag1 = styled.div`
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
    items-align: center;
}
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
}`;

export default Template;