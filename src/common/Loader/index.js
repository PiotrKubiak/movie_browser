import spinner from "./images/spinner.svg";
import { SpinnerSection, Spinner } from "./styled";

export const Loader = () => {
  return (
    <SpinnerSection>
      <Spinner src={spinner} />
    </SpinnerSection>
  );
};
