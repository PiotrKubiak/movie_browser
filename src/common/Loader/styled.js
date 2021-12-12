import styled from "styled-components";
import { ReactComponent as loading } from "./images/spinner.svg";

export const SpinnerSection = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Spinner = styled(loading)`
  width: 91px;
  height: 91px;
  animation-name: rotate;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 35px;
    height: 35px;
  }

  @keyframes rotate {
    /* from {
      transform: unset;
    } */
    to {
      transform: rotate(360deg);
    }
  }
`;
