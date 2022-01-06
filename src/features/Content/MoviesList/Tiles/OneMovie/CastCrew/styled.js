import styled from "styled-components";

export const Section = styled.section`
    max-width: 1392px;
    margin: 64px auto;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        max-width: 288px;      
    }
`;

export const Header = styled.header`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    margin-left: 12px;
    margin-bottom: 32px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 20px;
        margin-bottom: 12px;
    }
`;