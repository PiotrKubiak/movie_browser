import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1368px;
    margin: auto;
`;

export const Header = styled.header`
    margin: 56px 0px 24px 12px;
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
        margin: 24px 0px 12px 0px;
        display: flex;
        flex-direction: column;
        font-size: 18px;
    }
`;

export const Image = styled.img`
    display: block;
    margin: 40px auto;
    max-width: 668px;
    padding: 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
        margin:auto;
        max-width: 250px;
    }
`;