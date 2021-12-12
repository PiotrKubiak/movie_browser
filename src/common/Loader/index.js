import spinner from "./images/spinner.svg";
import { SpinnerSection as SpinnerWrapper, Spinner } from "./styled";

export const Loader = () => {
  return (
    <SpinnerWrapper>
      <Spinner src={spinner} />
    </SpinnerWrapper>
  );
};
