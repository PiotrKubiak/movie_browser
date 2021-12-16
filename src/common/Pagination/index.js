import { NextArrow } from "./NextArrow";
import { PreviousArrow } from "./PreviousArrow";
import { Wrapper, Button, PaginationText, PaginationNumber } from "./styled";

export const Pagination = ({ movieBrowserStatus }) => {
  if (movieBrowserStatus === "success") {
    return (
      <Wrapper>
        <Button>
          <PreviousArrow />
        </Button>
        <Button>
          <PreviousArrow />
        </Button>
        <PaginationText>Page</PaginationText>
        <PaginationNumber>1</PaginationNumber>
        <PaginationText>of</PaginationText>
        <PaginationNumber>500</PaginationNumber>
        <Button>
          <NextArrow />
        </Button>
        <Button>
          <NextArrow />
        </Button>
      </Wrapper>
    );
  } else return null;
};
