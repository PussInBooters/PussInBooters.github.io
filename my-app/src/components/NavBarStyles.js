import styled from "styled-components"

export const Box = styled.div`
   
    background: #fe669b;
    bottom: 0;
    width: 100%;
    border-radius: 10px;
    margin-top: 10px;
`;

export const NavBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100%;
    margin: 0 auto;
`;
 
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: 10px;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(185px, 1fr)
    );
    
 
    @media (max-width: 100%) {
        grid-template-columns: repeat(
            auto-fill,
            minmax(200px, 1fr)
        );
    }
`;

export const NavBarLink = styled.a`
    color: #fff;
    font-size: 18px;
    text-decoration: none;
 
    &:hover {
        color: #fccadf;
        transition: 200ms ease-in;
    }
`;