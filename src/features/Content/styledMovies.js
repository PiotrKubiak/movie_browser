import styled from "styled-components";

export const StyledSection = styled.div`
    max-width: 1392px;
    margin: auto;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-width: 288px;
        display: flex;
        flex-direction: column;
    }
`;

export const StyledHeader = styled.h1`
    margin: 56px 0px 24px 12px ;
    font-size: 18px;
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    align-self: flex-start;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 24px 0px 12px 0px ;
        font-size: 36px;
        font-weight: 600;
        font-size: 18px;
        line-height: 1.2;
    }
`;
