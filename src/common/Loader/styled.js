import styled from "styled-components";

export const SpinnerSection = styled.div`
  max-width: 1080px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Spinner = styled.img`
  width: 91px;
  height: 91px;
  transform: rotate(360deg);
  animation: spin;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 35px;
    height: 35px;
  }

  @keyframes spin {
    from {
      transform: unset;
    }
    to {
      transform: translateY(360deg);
    }
  }
`;
