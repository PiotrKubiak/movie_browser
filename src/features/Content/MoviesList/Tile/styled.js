import styled from "styled-components";
import { ReactComponent as StarIcon } from "./star.svg";

export const Container = styled.div`
    max-width: 324px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
`;

export const Image = styled.img`
    max-width: 292px;
    max-height: 434px;
    margin: 16px;
`;

export const Description = styled.div`
    padding: 0 16px;
`;

export const Title = styled.header`
    color: ${({ theme }) => theme.color.black};
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;
`;
export const Year = styled.div`
    color: ${({ theme }) => theme.color.waterloo};
    font-size: 16px;
    line-height: 1.5;
    padding-top: 8px;
`;

export const Tags = styled.ul`
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    margin: -8px;

`;

export const Tag = styled.li`
    background-color: ${({ theme }) => theme.color.mystic};
    padding: 8px 16px;
    font-size: 14px;
    line-height: 1.4;
    margin: 16px 4px 4px 4px;
    border-radius: 5px;
`;

export const Rating = styled.div`
    padding: 0 16px;
    margin-top: 40px;
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
`;

export const Star = styled(StarIcon)`
    color: ${({ theme }) => theme.color.candlelight};
    align-content: center;
`;

export const Rate = styled.p`
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 12px;
    color: ${({ theme }) => theme.color.woodsmoke};
`;

export const Votes = styled.p`
    font-size: 16px;
    line-height: 1.5;
    margin-left: 12px;
    color: ${({ theme }) => theme.color.waterloo};
`;
