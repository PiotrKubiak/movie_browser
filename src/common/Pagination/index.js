import { NextArrow } from "./NextArrow";
import { PreviousArrow } from "./PreviousArrow";
import { Wrapper, Button, PaginationText, PaginationNumber, ButtonText } from "./styled";

export const Pagination = ({ movieBrowserStatus, setNumber, page }) => {

  const allPages = 500;

  if (movieBrowserStatus === "success") {
    return (
      <Wrapper>

        <Button
          disabled={page === 1}
          onClick={() => setNumber(1)}>
          <PreviousArrow
            disabled={page === 1}
          />
          <ButtonText> First</ButtonText>
        </Button>

        <Button
          disabled={page === 1}
          onClick={() => setNumber(page - 1)}>
          <PreviousArrow
            disabled={page === 1}
          />
          <ButtonText> Previous</ButtonText>
        </Button>

        <PaginationText>Page</PaginationText>
        <PaginationNumber>{page}</PaginationNumber>
        <PaginationText>of</PaginationText>
        <PaginationNumber>{allPages}</PaginationNumber>

        <Button
          disabled={page === allPages}
          onClick={() => setNumber(page + 1)}>
          <ButtonText>Next</ButtonText>
          <NextArrow
            disabled={page === allPages}
          />
        </Button>

        <Button
          disabled={page === allPages}
          onClick={() => setNumber(allPages)}>
          <ButtonText>Last</ButtonText>
          <NextArrow
            disabled={page === allPages}
          />
        </Button>

      </Wrapper >
    );
  } else return null;
};
