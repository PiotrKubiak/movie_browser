import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
    margin: auto;
    background-color: ${({ theme }) => theme.color.woodsmoke};
`;

export const StyledList = styled.ul`
    max-width: 1368px;
    margin: auto;
    padding: 0px;
    height: 94px;
    display:grid;
    grid-template-columns: auto auto auto 1fr;
    justify-items: end;
    align-items: center;
    grid-gap: 16px;
    /* display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center; */
    color: ${({ theme }) => theme.color.white};
    list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
    padding: 8px 24px;
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
    &.active{
        border: 1px solid ${({ theme }) => theme.color.white};
        box-sizing: border-box;
        border-radius: 24px;
    }
`;

export const StyledSearch = styled.form`
`;

export const StyledInput = styled.input`
font-size: 16px;
line-height: 150%;
min-width: 432px;
padding: 8px 24px;
border: 1px solid ${({ theme }) => theme.color.mystic};
box-sizing: border-box;
border-radius: 33px;
color: ${({ theme }) => theme.color.waterloo};
`;