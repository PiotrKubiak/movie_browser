import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../images/star.svg";
import {ReactComponent as Profile} from "../../images/profile.svg";

export const StyledTiles = styled.section`
    /* margin: 0px; */
    /* display: grid;
    grid-template-columns: repeat(4, auto) ;
    grid-gap: 24px; */

    display: flex;
    flex-wrap: wrap;
    align-content:center;
    justify-content: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        justify-content: space-between;
    }
`;
    
export const StyledLinkMovie = styled(Link)`
    text-decoration: none;
    width: 324px;
    color: ${({ theme }) => theme.color.woodsmoke};
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    padding: 16px;
    margin: 0 12px 24px 12px;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-gap: 16px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 0px 0px 16px 0px;
        max-width: 288px;
        grid-template-columns: auto 1fr; */
        grid-template-rows: auto;
        grid-gap: 0;        
    }
`;

export const StyledLinkPeople = styled(Link)`
    text-decoration: none;
    width: 208px;
    color: ${({ theme }) => theme.color.woodsmoke};
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    padding: 16px;
    margin: 0 12px 24px 12px;
    display: grid;
    grid-template-rows: auto;
    grid-gap: 16px;  

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 136px;
        margin: 0 0px 16px 0px;
        padding: 9px;
        grid-template-rows: auto;        
        grid-gap: 8px;        
    }
`;
export const ImageContainer = styled.div`
    max-width: 176px;
    height: 264px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.silver};
    border-radius: 5px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-width: 120px;
        max-height: 178px;
    }
`;

export const ProfileIcon = styled(Profile)`
    max-width: 72px;
    max-height: 72px;
`;
export const ImageMovie = styled.img`
    max-width: 292px;
    max-height: 434px;
    border-radius: 5px;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-width: 114px;
        max-height: 168px;
    }
`;

export const ImagePeople = styled.img`
    max-width: 177px;
    min-height: 264px;
    border-radius: 5px;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-width: 120px;
        min-height: 178px;
    }
`;

export const Information = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        justify-content: flex-start;
        margin-left: 16px;
    }
`;

export const Description = styled.div`
    margin-bottom: 10px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-bottom: 0;
    }
`;

export const Title = styled.header`
    color: ${({ theme }) => theme.color.black};
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;
    text-align: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 14px;
        padding: 0;
    }
`;

export const Year = styled.div`
    color: ${({ theme }) => theme.color.waterloo};
    font-size: 16px;
    line-height: 1.5;
    padding-top: 8px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
        padding-top: 4px;
    }
`;

export const Character = styled.div`
    font-size: 18px;
    line-height: 1.5;
    text-align: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
    }
`;

export const Tags = styled.ul`
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    margin: -8px -8px -8px -4px;   

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: -4px -4px -4px -2px;  
    }
`;

export const Tag = styled.li`
    background-color: ${({ theme }) => theme.color.mystic};
    padding: 8px 16px;
    font-size: 14px;
    line-height: 1.4;
    margin: 16px 4px 4px 4px;
    border-radius: 5px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 10px;
        line-height: 1.1;
        margin: 8px 2px 2px 2px;
        padding: 4px 8px;
    }
`;

export const Rating = styled.div`

    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
`;

export const Star = styled(StarIcon)`
    color: ${({ theme }) => theme.color.candlelight};
    align-content: center;
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-width: 16px;
        max-height: 16px;
    }
`;

export const Rate = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 12px;
    color: ${({ theme }) => theme.color.woodsmoke};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
        line-height: 1.3;
        margin-left: 8px;
    }
`;

export const Votes = styled.div`
    font-size: 16px;
    line-height: 1.5;
    margin-left: 12px;
    color: ${({ theme }) => theme.color.waterloo};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
        line-height: 1.3;
        margin-left: 8px;
    }
`;