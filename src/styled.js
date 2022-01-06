import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as CameraIcon } from "./images/Video.svg";
import { ReactComponent as SearchIcon } from "./images/Search.svg";

export const StyledNav = styled.nav`
    background-color: ${({ theme }) => theme.color.black};
`;

export const Container = styled.div`
    max-width: 1392px;
    margin: auto;
    padding: 26px;

    @media(max-width: ${({ theme }) => theme.breakpoint.navMax}) {
        padding: 0;
    }
`;

export const StyledList = styled.ul`
    color: ${({ theme }) => theme.color.white};
    list-style: none;
    padding: 0px;
    margin: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between; 

    @media(max-width: ${({ theme }) => theme.breakpoint.navMax}) {
        flex-direction: column;
    }
`;

export const ButtonsGroup = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 16px;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.navMax}) {
        margin: 16px auto 8px auto;
    }
`;

export const StyledItem = styled.li`
    align-self: center;
`;

export const Title = styled.header`
    font-weight: 500;
    font-size: 24px;
    line-height: 1.66;
    padding-right: 80px;
    letter-spacing: -1.5px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media(max-width: ${({ theme }) => theme.breakpoint.navMax}) {
        font-size: 13px;
        line-height: 1.3;
        letter-spacing: -0.5px;
        padding-right: 0px;
    }
`;

export const Camera = styled(CameraIcon)`
    margin-right: 16px;
    width: 30px;

    @media(max-width: ${({ theme }) => theme.breakpoint.navMax}) {
        margin-right: 8px;
        width: 20px;
    }
`;

export const StyledNavLink = styled(NavLink)`
    padding: 8px 24px;
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
    font-size: 14px;
    font-weight: 600;

    &:hover{
        font-weight: 700;
    }

    &.active{
        border: 1px solid ${({ theme }) => theme.color.white};
        box-sizing: border-box;
        border-radius: 24px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.navMax}) {
        font-size: 12px;
        padding: 8px 12px;

        &.active{
            border-radius: 29px;
        }
    }
`;

export const StyledSearch = styled.form`
    @media(max-width: ${({ theme }) => theme.breakpoint.navMax}) {
        margin: 8px auto 16px auto;
    }
`;

export const StyledBox = styled.div`
    display:flex;
    min-width: 432px;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 33px;
    border: 1px solid ${({ theme }) => theme.color.white};
    font-size: 16px;
    line-height: 1.5;
    padding: 8px 24px;
    @media(max-width: ${({ theme }) => theme.breakpoint.navMax}) {
        min-width: 288px;
        padding: 8px 16px;
    }

`;

export const StyledInput = styled.input`
    border:none;
    outline:none;
    min-width: 355px;
    color: ${({ theme }) => theme.color.waterloo};
    @media(max-width: ${({ theme }) => theme.breakpoint.navMax}) {
        min-width: 220px;
        font-size: 13px;
        line-height: 1.3;
    }
`;

export const Loupe = styled(SearchIcon)`
    margin-right: 8px;
    width: 24px;
    height: 24px;
    @media(max-width: ${({ theme }) => theme.breakpoint.navMax}) {
        width: 16px;
        height: 16px;
    }
`;