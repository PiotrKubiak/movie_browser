import styled from "styled-components";

export const StyledTiles = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
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
    grid-gap: 16px;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        margin: 16px 16px 21px 16px;
        padding: 16px;
        grid-gap: 0;        
    }
`;

export const ImagePeople = styled.img`
    
    max-width: 312px;
    max-height: 464px;
    border-radius: 5px;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        max-width: 114px;
        max-height: 168px;
    }
`;

export const Information = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 40px;
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        justify-content: flex-start;
        margin-left: 16px;
    }
`;

export const Title = styled.header`
    color: ${({ theme }) => theme.color.black};
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
   
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 14px;
    }
`;

export const StyledInfo = styled.div`
    margin-bottom: 8px;
    padding: 24px 0px 0px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        margin-bottom: 0px;
        padding: 16px 0px;
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

export const SgColor = styled.a`
    color: ${({ theme }) => theme.color.stormGray};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        display: inherit;
    }
`;

export const Biography = styled.div`
    font-size: 20px;
    line-height: 160%;
    padding: 4px 0px;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        margin-left: -128px;
        font-size: 14px;
        padding-top: 48px;
    }
`;

export const DesktopInscription = styled.div`
        display: inline;
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        display: none;
    }
`;

export const MobileInscription = styled.div`
        display: none;
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        display: inline;
    }
`;