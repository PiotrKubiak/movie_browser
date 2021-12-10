import { NextArrow } from "./NextArrow";
import { PreviousArrow } from "./PreviousArrow";
import { Wrapper, Button, PaginationText, PaginationNumber } from "./styled";

export const Pagination = () => {
  return (
    <Wrapper>
      <Button>
        <PreviousArrow />
        First
      </Button>
      <Button>
        <PreviousArrow />
        Previous
      </Button>
      <PaginationText>Page</PaginationText>
      <PaginationNumber>1</PaginationNumber>
      <PaginationText>of</PaginationText>
      <PaginationNumber>500</PaginationNumber>
      <Button>
        Next
        <NextArrow />
      </Button>
      <Button>
        Last
        <NextArrow />
      </Button>
    </Wrapper>
  );
};
