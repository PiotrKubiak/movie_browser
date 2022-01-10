import { StyledSection } from "../styledMovies";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople, selectMovies, selectMovieBrowserStatus } from "../moviesBrowserSlice";
import { useEffect, useState } from "react";
import { Content } from "./content";
import { setPage } from "../../../common/Pagination/pageNumber";

const PeopleList = () => {
  const dispatch = useDispatch();
  const [page, setNumber] = useState(1);
  setPage(page);
  const movieBrowserStatus = useSelector(selectMovieBrowserStatus);
  const movieBrowser = useSelector(selectMovies);

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch, page]);

  return (
    <StyledSection>
        <Content
          movieBrowserStatus={movieBrowserStatus}
          movieBrowser={movieBrowser}
          page={page}
          setNumber={setNumber} />
    </StyledSection>
  );
};

export default PeopleList;
