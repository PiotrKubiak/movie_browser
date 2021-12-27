import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../../../../images/star.svg";

export const Container = styled.div`
    width:100%;
`;

export const BackdropImage = styled.div`
    color: ${({ theme }) => theme.color.white};
    background-image: url(${({bcg}) => bcg});
    background-color: ${({ theme }) => theme.color.black};
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
`;

export const Gradient = styled.div`
    background: linear-gradient(270deg, #000000 14.11%, rgba(0, 0, 0, 0.873268) 15.08%, rgba(0, 0, 0, 0.720529) 16.51%, rgba(0, 0, 0, 0.294577) 19.99%, rgba(0, 0, 0, 0.159921) 21.88%, rgba(0, 0, 0, 0) 25.68%), linear-gradient(90deg, #000000 13.6%, rgba(0, 0, 0, 0.984059) 14.58%, rgba(0, 0, 0, 0.967732) 15.44%, rgba(0, 0, 0, 0.865569) 16.3%, rgba(0, 0, 0, 0.230315) 22.87%, rgba(0, 0, 0, 0) 26.64%), linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.689555) 4.66%, rgba(0, 0, 0, 0.439033) 9.34%, rgba(0, 0, 0, 0.20628) 15.16%, rgba(0, 0, 0, 0) 24.22%), linear-gradient(189.44deg, rgba(0, 0, 0, 0) 58.48%, rgba(0, 0, 0, 0.106473) 63.17%, rgba(0, 0, 0, 0.235359) 68.85%, rgba(0, 0, 0, 0.492821) 78.08%, rgba(0, 0, 0, 0.740286) 85.86%, #000000 92.87%);
    display: flex;
    flex-direction:column-reverse;
`;
export const MainInfo = styled.div`
    margin: 30% 0 0 15%;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        margin: 30% 0 0 12%;
    }
`;

export const Title = styled.header`
    font-weight: 600;
    font-size: 64px;
    line-height: 1.2;
    margin-bottom: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 24px;
        margin-bottom: 4px;
    }
`;

export const Rating = styled.div`
    margin-bottom: 56px;
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    max-width: 140px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        margin-bottom: 8px;
    }
`;

export const Star = styled(StarIcon)`
    color: ${({ theme }) => theme.color.candlelight};
    align-content: center;
    width: 40px;
    height: 40px;
    margin-right: 8px;
    margin-bottom: 16px;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        width: 16px;
        height: 16px;
        margin-right: 4px;
        margin-bottom: 0;
    }
`;

export const Rate = styled.div`
    font-weight: 500;
    font-size: 30px;
    line-height: 1.3;
    margin-right: 8px;
    margin-bottom: 16px;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 14px;
        margin-right: 2px;
        margin-bottom: 0;
    }   
`;

export const OtherInfo = styled.div`
    font-size: 16px;
    line-height: 1.2;
    margin-right: 8px;
    margin-bottom: 16px;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 10px;
        margin-right: 8px;
        margin-bottom: 0;
    }
`;