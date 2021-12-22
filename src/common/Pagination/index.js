// import { NextArrow } from "./NextArrow";
import { PreviousArrow } from "./PreviousArrow";
import { Wrapper, Button, PaginationText, PaginationNumber, ButtonText } from "./styled";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Pagination = ({ movieBrowserStatus, setNumber, number }) => {

  if (movieBrowserStatus === "success") {
    return (
      <Wrapper>
        <Link to={`/movies/`}>
          <Button
            // disabled={page === 1} 
            onClick={() => setNumber(number + 1)}>
            {/* <PreviousArrow disabled={page === 1} /> */}
            <ButtonText> First</ButtonText>
          </Button>
        </Link>


        {/* <Button disabled={page === 1} onClick={() => changePageNumber(page - 1)}>
        <PreviousArrow disabled={page === 1} />
        <ButtonText> Previous</ButtonText>
      </Button>

      <PaginationText>Page</PaginationText>
      <PaginationNumber>{page}</PaginationNumber>
      <PaginationText>of</PaginationText>
      <PaginationNumber>{allPages}</PaginationNumber>

      <Button
        disabled={page === allPages} onClick={() => changePageNumber(page + 1)}>
        <ButtonText>Next</ButtonText>
        <NextArrow disabled={page === allPages} />
      </Button>

      <Button
        disabled={page === allPages} onClick={() => changePageNumber(allPages)}>
        <ButtonText>Last</ButtonText>
        <NextArrow disabled={page === allPages} />
      </Button> */}

      </Wrapper>
    );
  } else return null;
};
