import { useDispatch, useSelector } from "react-redux";
import { useReplaceQueryParameter } from "../../features/useQueryParameters";
import { NextArrow } from "./NextArrow";
import { PreviousArrow } from "./PreviousArrow";
import {
  Wrapper,
  Button,
  PaginationText,
  PaginationNumber,
  ButtonText,
} from "./styled";
import { toMovieList, toPeopleList, toSearch } from "../../features/paths";
import {
  selectPage,
  selectSearchQuery,
  selectAllPages,
  selectType,
  setPage,
} from "../../features/Content/moviesBrowserSlice";
import {
  searchQueryParameterName,
  pageQueryParameterName,
  typeQueryParameterName,
} from "../../features/queryParameterNames";

export const Pagination = ({ movieBrowserStatus }) => {
  if (movieBrowserStatus === "success") {
    const dispatch = useDispatch();
    const page = useSelector(selectPage);
    const allPages = useSelector(selectAllPages);
    const query = useSelector(selectSearchQuery);
    const type = useSelector(selectType);
    const replaceParameter = useReplaceQueryParameter();

    const onSetPage = (page) => {
      dispatch(setPage(page));
      if (query) {
        const parameters = [
          { key: searchQueryParameterName, value: query },
          { key: pageQueryParameterName, value: page },
          { key: typeQueryParameterName, value: type },
        ];
        replaceParameter(parameters, toSearch());
      } else {
        const parameters = [
          { key: searchQueryParameterName, value: undefined },
          { key: pageQueryParameterName, value: page },
          { key: typeQueryParameterName, value: undefined },
        ];
        if (type === "person") {
          replaceParameter(parameters, toPeopleList());
        } else {
          replaceParameter(parameters, toMovieList());
        }
      }
    };

    return (
      <Wrapper>
        <Button
          disabled={page === "1" || page === 1}
          onClick={() => onSetPage("1")}
        >
          <PreviousArrow />
          <PreviousArrow />
          <ButtonText>First</ButtonText>
        </Button>
        <Button
          disabled={page === "1" || page === 1}
          ocClick={() => onSetPage((Number(page) - 1).toString())}
        >
          <PreviousArrow />
          <ButtonText>Previous</ButtonText>
        </Button>
        <PaginationText>
          <ButtonText>Page</ButtonText>
          <PaginationNumber>{page}</PaginationNumber> of{" "}
          <PaginationNumber>{allPages}</PaginationNumber>
        </PaginationText>
        <Button
          disabled={page === allPages}
          onClick={() => onSetPage((Number(page) + 1).toString())}
        >
          <ButtonText>Next</ButtonText>
          <NextArrow />
        </Button>
        <Button
          disabled={page === allPages}
          onClick={() => onSetPage(allPages)}
        >
          <ButtonText>Last</ButtonText>
          <NextArrow />
          <NextArrow />
        </Button>
      </Wrapper>
    );
  } else return null;
};
