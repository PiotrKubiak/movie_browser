import styled, { css } from "styled-components";
import { ReactComponent as PreviousArrow } from "./../images/vectorLeft.svg";

export const Arrow = styled(PreviousArrow)`
  margin: 0 0 0 8px;
  height: 11px;
  width: 7px;
  color: ${({ theme }) => theme.color.blue};
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.color.waterloo};
    `}
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin: 0px 4px;
    width: 5px;
    height: 8px;
  }
`;

export const ExtraPreviousArrow = styled(Arrow)` 
    display: none;
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    display: block;
  };
`;