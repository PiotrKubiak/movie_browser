import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../../../images/star.svg";

export const StyledTiles = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-content:center;
    justify-content: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        justify-content: space-between;
    }
    `;

export const Container = styled.div`
    width: 1368px;
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    padding: 40px;
    margin: 64px 16px 24px 16px;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    grid-gap: 40px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        margin: 16px 16px 21px 16px;
        padding: 16px;
        grid-gap: 0;        
    }
`;

export const ImageMovie = styled.img`
    max-width: 312px;
    max-height: 464px;
    border-radius: 5px;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        margin-right: 0px;
        max-width: 114px;
        max-height: 168px;
    }
`;

export const Information = styled.div`
    display: flex;
    flex-direction: column;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        justify-content: flex-start;
        margin-left: 16px;
    }
`;

export const StyledInfo = styled.div`
    margin-bottom: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        margin-bottom: 0px;
    }
`;

export const Title = styled.header`
    color: ${({ theme }) => theme.color.black};
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 16px;
    }
`;

export const Year = styled.div`
    color: ${({ theme }) => theme.color.black};
    font-size: 22px;
    line-height: 120%;
    padding: 24px 0px 24px 0px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        color: ${({ theme }) => theme.color.waterloo};
        font-size: 13px;
        padding: 8px 0px 8px 0px;
    }
`;

export const BasicInfo = styled.div`
    margin-bottom: 8px;
    font-size: 18px;
    line-height: 120%;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 12px;
    }
`;

export const Tags = styled.ul`
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    margin: -8px -8px -8px -4px;   

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        margin: -4px -4px -4px -2px;  
    }
`;

export const Tag = styled.li`
    background-color: ${({ theme }) => theme.color.mystic};
    padding: 8px 16px;
    font-size: 14px;
    line-height: 1.4;
    margin: 8px 12px 8px 4px;
    border-radius: 5px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 10px;
        line-height: 1.1;
        margin: 8px 2px 2px 2px;
        padding: 4px 8px;
    }
`;

export const Rating = styled.div`
    margin: 26px 0px 24px 0px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        margin: 6px 0px 4px 0px;
        padding: 12px 0px 12px 0px;
    }
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMin}) {
        margin: 10px 0px 4px 0px;
        padding: 0px;
    }
`;

export const Star = styled(StarIcon)`
    color: ${({ theme }) => theme.color.candlelight};
    align-content: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        max-width: 16px;
        max-height: 16px;
    }
`;

export const Rate = styled.div`
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    margin-left: 12px;
    color: ${({ theme }) => theme.color.black};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 13px;
        line-height: 1.3;
        margin-left: 8px;
    }
`;

export const OtherInfo = styled.a`
margin-right: 10px;
    color:${({ theme }) => theme.color.black};
        @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        display: none;
    }
`;

export const Votes = styled.a`
    font-size: 14px;
    line-height: 120%;
    margin-left: 5px;
    color: ${({ theme }) => theme.color.waterloo};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 13px;
        line-height: 1.3;
        margin-left: 8px;
    }
`;

export const Overview = styled.div`
    font-size: 20px;
    line-height: 160%;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        margin-left: -128px;
        margin-top: 10px;
        font-size: 14px;
    }    
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMin}) {
        margin-left: -128px;
        margin-top: 0px;
    }
`;

export const SgColor = styled.a`
    color: ${({ theme }) => theme.color.stormGray};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        display: none;
    }
`;