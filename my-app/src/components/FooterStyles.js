import styled from "styled-components"

export const Box = styled.div`
    padding: 5% 0% 2.5%;
    background: #fe669b;
    width: 100%;
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`;
 
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(185px, 1fr)
    );
    grid-gap: 20px;
 
    @media (max-width: 1000px) {
        grid-template-columns: repeat(
            auto-fill,
            minmax(200px, 1fr)
        );
    }
`;

export const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size: 24px;
    text-decoration: none;
 
    &:hover {
        color: #fccadf;
        transition: 200ms ease-in;
    }
`;