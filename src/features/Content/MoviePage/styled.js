import styled, { isStyledComponent } from "styled-components";
import posterBig from "../../../images/posterBig.png"
import { ReactComponent as StarIcon } from "../../../images/star.svg";

export const Container = styled.div`
    width: auto;
    max-height: 770px;
    background-color:  ${({ theme }) => theme.color.black};
    color:  ${({ theme }) => theme.color.white};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-height: 548px;
        /* margin: auto; */
    }
`;

export const BackdropImage = styled.div`
    width: 1368px;
    height: 769px;
    margin:auto;

    background-image:  url("https://s3-alpha-sig.figma.com/img/2449/42e0/eddf959494fe088465c438055af49223?Expires=1640563200&Signature=Frk7asCStdykZOeq5GwKcBEof9OsGwUFTEfy6j2pZHFl8MwnYNCI~p6ywTzsLFXhsun1otUm1bq-Qo28tQEGskiczP-MIezhN~GhOyXqV5BIHjhlPg3RE~CBY2t7-ru3Ca~M5JpA78Sg9DlemTCgU0TLibujh5eGPZSZ4KSAP-c6UT1Qe-w~TBL7obS9RAjJLw1oMKIPCRzSCMbbaD4f3PYhLZKfEaDWJ0IaOSTdX6Gc8P3vfDJRJcV0Vu0Bj7KtremlO~xmw67rR-RfreB2G116XKl7U2UqaT3NhXcmBaiIurUAAOJ6j9AG5vZ9kES8CBQN8lAQ3Z~EXx2H3kYGsQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
    /* background-image:  url("../posterBig2.png"); */
    
    background-repeat: no-repeat;
    background-color: yellow;
    background-size: contain;
    -webkit-box-shadow: inset 0px 0px 80px 100px #000;
    -moz-box-shadow: inset 0px 0px 80px 100px #000;
    box-shadow: inset 0px 0px 80px 100px #000;

    display: flex;
    flex-direction: column-reverse;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-width: 260px;
        max-height: 148px;
        -webkit-box-shadow: inset 0px 0px 50px 25px #000;
        -moz-box-shadow: inset 0px 0px 20px 25px #000;
        box-shadow: inset 0px 0px 30px 20px #000;
    }
`;

export const MainInfo = styled.div`
    /* background-color: blue; */
    /* opacity: 0.3; */
    margin-left:20px;
    margin-right:auto;
    margin-bottom: 56px;
    max-width: auto;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-left:0px;
        margin-bottom: 4px;
    }
`;

export const Title = styled.header`
    font-weight: 600;
    font-size: 64px;
    line-height: 1.2;
    margin-bottom: 26px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 24px;
        margin-bottom: 4px;
    }
`;

export const Rating = styled.div`
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 16px;
    max-width: 128px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-bottom: 0;
    }
`;


export const Star = styled(StarIcon)`
    color: ${({ theme }) => theme.color.candlelight};
    align-content: center;
    width: 40px;
    height: 40px;
    margin-right: 8px;
    margin-bottom: 16px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 16px;
        height: 16px;
        margin-right: 4px;
    }
`;

export const Rate = styled.div`
    font-weight: 500;
    font-size: 30px;
    line-height: 1.3;
    margin-right: 8px; 

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 14px;
        margin-right: 2px;
    }
`;

export const Off = styled.div`
    font-weight: normal;
    font-size: 16px;
    line-height: 1.2;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 10px;
        margin-right: 8px;
    }
`;

export const Votes = styled.div`
    font-size: 16px;
    line-height: 1.2;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 10px;
        margin-right: 8px;
    }
`;