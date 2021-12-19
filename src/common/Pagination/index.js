import { useUrlParameter, useReplaceUrlParameter } from "../../features/useUrlParameters";
import { startPage } from "./startPage";
import { NextArrow } from "./NextArrow";
import { PreviousArrow } from "./PreviousArrow";
import { Wrapper, Button, PaginationText, PaginationNumber, ButtonText } from "./styled";

export const Pagination = () => {
  const allPages = 500;
  const urlPageNumber = +useUrlParameter("page");
  const page = startPage(urlPageNumber);
  const changeUrlParameters = useReplaceUrlParameter();

  const changePageNumber = (page) => {
    changeUrlParameters([
      {
        key: "page",
        value: page,
      },
    ]);
  };
  return (
    <Wrapper>
      <Button
        disabled={page === 1} onClick={() => changePageNumber(1)}>
        <PreviousArrow disabled={page === 1} />
        <ButtonText> First</ButtonText>
      </Button>

      <Button disabled={page === 1} ocClick={() => changePageNumber(page - 1)}>
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
      </Button>

    </Wrapper>
  );
};
