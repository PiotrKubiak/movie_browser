import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "./Danger.svg";

export const Wrapper = styled.article`
  text-align: center;
  margin-top: 140px;
  display: grid;
  justify-items: center;
  grid-gap: 32px;
  color: ${({ theme }) => theme.color.textPrimary};
  padding: 0 10px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
    grid-gap: 24px;
  }
`;

export const DangerIcon = styled(ErrorIcon)`
  width: 100px;
  padding: 0px;
  margin: 0;
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
    width: 80px;
  }
`;

export const Title = styled.header`
  font-weight: 600;
  font-size: 36px;
  margin-top: 38px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
    margin-top: 0px;
    font-size: 30px;
  }
`;

export const Description = styled.p`
  font-size: 22px;
  line-height: 1.3;
  max-width: 426px; //?
  margin: 0;
  font-weight: 500;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
    font-size: 18px;
  }
`;

export const ButtonLink = styled.a`
  text-decoration: none;
  padding: 16px 24px;
  background: ${({ theme }) => theme.color.blue};
  border-radius: 5px;
  color: ${({ theme }) => theme.color.white};
  font-weight: bold;
  font-size: 14px;
  transition: background 0.3s;
  line-height: 1.36;

  &:hover {
    background: ${({ theme }) => theme.color.blueHover};
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 10px;
  }
`;