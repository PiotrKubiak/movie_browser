import { NextArrow } from "./NextArrow";
import { PreviousArrow } from "./PreviousArrow";
import { Wrapper, Button, PaginationText, PaginationNumber, ButtonText } from "./styled";

export const Pagination = ({ movieBrowserStatus, setNumber, number }) => {

  const allPages = 500;

  if (movieBrowserStatus === "success") {
    return (
      <Wrapper>

        <Button
          disabled={number === 1}
          onClick={() => setNumber(1)}>
          <PreviousArrow
            disabled={number === 1}
          />
          <ButtonText> First</ButtonText>
        </Button>

        <Button
          disabled={number === 1}
          onClick={() => setNumber(number - 1)}>
          <PreviousArrow
            disabled={number === 1}
          />
          <ButtonText> Previous</ButtonText>
        </Button>

        <PaginationText>Page</PaginationText>
        <PaginationNumber>{number}</PaginationNumber>
        <PaginationText>of</PaginationText>
        <PaginationNumber>{allPages}</PaginationNumber>

        <Button
          disabled={number === allPages}
          onClick={() => setNumber(number + 1)}>
          <ButtonText>Next</ButtonText>
          <NextArrow
            disabled={number === allPages}
          />
        </Button>

        <Button
          disabled={number === allPages}
          onClick={() => setNumber(allPages)}>
          <ButtonText>Last</ButtonText>
          <NextArrow
            disabled={number === allPages}
          />
        </Button>

      </Wrapper >
    );
  } else return null;
};
