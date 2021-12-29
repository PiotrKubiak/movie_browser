import styled from "styled-components";

export const Section = styled.section`
    max-width: 80%;
    margin: 64px auto;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        max-width: 90%;      
    }
`;

export const Header = styled.header`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    margin-bottom: 32px;
    margin-left: 4px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 20px;
        margin-bottom: 12px;
    }
`;