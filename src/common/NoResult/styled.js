import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1368px;
    margin: auto;
    padding-top: 56px;
`;

export const Header = styled.header`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-weight: 600;
        font-size: 32px;
    }
`;

export const Image = styled.img`
    display: block;
    margin: 40px auto;
    max-width: 668px;
    padding: 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        margin: 10px auto;
        max-width: 468px;
    }
`;