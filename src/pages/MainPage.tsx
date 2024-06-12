import styled from "styled-components"
import Header from "../components/header/Header";
import Template from "../components/template/Template";
import { noneTemplate } from "../assets/image";

const MainPage = () => {
    return (
        <>
            <Header />
            <MainContainer>
                <Title>템플릿 <p>원하는 디자인을 선택</p></Title>
                <TemplateWrapper>
                    <Template />
                    <Template />
                    <Template />
                    <Template />
                    <Template />
                    <Template />
                </TemplateWrapper>
                <NoneTemplateWrapper>
                    <NonTemplateWrapper url={noneTemplate}>
                        Coming<br />soon
                    </NonTemplateWrapper>
                    <NonTemplateWrapper url={noneTemplate}>
                        Coming<br />soon
                    </NonTemplateWrapper>
                    <NonTemplateWrapper url={noneTemplate}>
                        Coming<br />soon
                    </NonTemplateWrapper>
                </NoneTemplateWrapper>
            </MainContainer>
        </>
    )
}

const MainContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 720px;
`;

const TemplateWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 60px;
    flex-wrap: wrap;

    @media (max-width: 1315px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
    }

    @media (max-width: 840px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`

const NoneTemplateWrapper = styled(TemplateWrapper)`
    a {
        position: relative;
        margin: 0 auto;
    }
`

const NonTemplateWrapper = styled.div<{ url: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 250px;
    margin-top: 5.65vh;
    font: ${({ theme }) => theme.fonts.Regular24};
    color: white;
    background-image: ${({ url }) => `url(${url})`};
    background-size: cover;
    border-radius: 20px 20px 0 0;
`

// const NoneTemplate = styled.img`
//     position: absolute;
//     top: 0;
//     right: 0;
// `

const Title = styled.div`
    margin-top: 8vh;
    font: ${({ theme }) => theme.fonts.Semibold28};
    p {
    margin-top: 0.6vh;
    margin-bottom: 60px;
    font: ${({ theme }) => theme.fonts.Regular16};
    color: #575757;
    }
`;

export default MainPage