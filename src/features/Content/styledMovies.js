import styled from "styled-components";

export const StyledSection = styled.div`
  margin: auto;
  max-width: 1368px;
  max-height: 1391px;
`;

export const StyledHeader = styled.h1`
  margin: 56px 0px 24px 0px;
  font-size: 18px;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin: 24px 0px 12px 16px;
    font-size: 36px;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.2;
  }
`;

export const StyledTiles = styled.section`
  margin: 0px;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;
