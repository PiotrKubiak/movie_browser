import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 40px auto;
  padding-bottom: 103px;
  display: flex;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin: 32px auto 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  margin: 0px 6px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.color.pattensBlue};
  color: ${({ theme }) => theme.color.woodsmoke};
  border-radius: 5px;
  border: none;
  font-size: 14px;
  &:hover {
  background: ${({ theme }) => theme.color.periwinkleGray};
  }
  &:active {
    background: ${({ theme }) => theme.color.waterloo};
  }
  &:disabled {
    background: ${({ theme }) => theme.color.mystic};
    color: ${({ theme }) => theme.color.woodsmoke};
    cursor: not-allowed;
    filter: brightness(100%);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    padding: 8px 8px;
    margin: 0px 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const ButtonText = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    display: none;
  }
`;

export const PaginationText = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.color.waterloo};
  align-self: center;
  margin: 0px 4px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
    font-size: 14px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 12px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}) {
    font-size: 10px;
    margin: 0px 2px;
  }
`;

export const PaginationNumber = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.color.woodsmoke};
  align-self: center;
  margin: 0px 8px;
  font-size: 16px;
  font-weight: bold;
  @media (max-width: ${({ theme }) => theme.breakpoint.tableMax}) {
    font-size: 14px;
    margin: 0px 6px;
    font-weight: bold;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 12px;
    margin: 0px 2px;
    font-weight: bold;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}) {
    font-size: 10px;
    margin: 0 auto;
    font-weight: bold;
  }
`;
