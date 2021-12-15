import { NextArrow } from "./NextArrow";
import { PreviousArrow } from "./PreviousArrow";
import { Wrapper, Button, PaginationText, PaginationNumber } from "./styled";

export const Pagination = ({ movieBrowserStatus }) => {
  if (movieBrowserStatus === "success") {
    return (
      <Wrapper>
        <Button>First
          <PreviousArrow />
        </Button>
        <Button>Previous
          <PreviousArrow />
        </Button>
        <PaginationText>Page</PaginationText>
        <PaginationNumber>1</PaginationNumber>
        <PaginationText>of</PaginationText>
        <PaginationNumber>500</PaginationNumber>
        <Button>Next
          <NextArrow />
        </Button>
        <Button>Last
          <NextArrow />
        </Button>
      </Wrapper>
    );
  } else return null;
};
