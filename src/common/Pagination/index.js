// import { NextArrow } from "./NextArrow";
import { PreviousArrow, } from "./PreviousArrow";
import { NextArrow } from "./NextArrow";
import { Wrapper, Button, PaginationText, PaginationNumber, ButtonText } from "./styled";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Pagination = ({ movieBrowserStatus, setNumber, number }) => {

  if (movieBrowserStatus === "success") {
    return (
      <Wrapper>

        {/* <Button disabled={page === 1} onClick={() => changePageNumber(1)}>
            <PreviousArrow disabled={page === 1} />
            <ButtonText> First</ButtonText>
          </Button> */}

        {/* <Button disabled={page === 1} onClick={() => changePageNumber(page - 1)}>
        <PreviousArrow disabled={page === 1} />
        <ButtonText> Previous</ButtonText>
      </Button> */}

        {/* <PaginationText>Page</PaginationText>
      <PaginationNumber>{page}</PaginationNumber>
      <PaginationText>of</PaginationText>
      <PaginationNumber>{allPages}</PaginationNumber> */}

        <Link to={`/movies/`}>
          <Button
            // disabled={page === allPages} 
            onClick={() => setNumber(number + 1)}>
            <ButtonText>Next</ButtonText>
            <NextArrow
            // disabled={page === allPages} 
            />
          </Button>
        </Link>
        
        {/* <Button
        disabled={page === allPages} onClick={() => changePageNumber(allPages)}>
        <ButtonText>Last</ButtonText>
        <NextArrow disabled={page === allPages} />
      </Button> */}

      </Wrapper >
    );
  } else return null;
};
