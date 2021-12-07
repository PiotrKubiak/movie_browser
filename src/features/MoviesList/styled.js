import styled from "styled-components";

export const StyledSection = styled.div`
    margin: auto;
    max-width: 1368px;
`;

export const StyledHeader = styled.h1`

    margin: 56px 0px 24px 0px ;
    font-size: 36px;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
`;

export const StyledTiles = styled.p`
    margin: 0px;
    background-color: ${({theme}) => theme.color.white}
`;