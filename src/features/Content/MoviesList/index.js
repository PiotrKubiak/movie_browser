import { StyledSection } from "../styledMovies";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies, selectMovies, selectMovieBrowserStatus } from "../moviesBrowserSlice";
import { useEffect, useState } from "react";
import { Content } from "./content";
import { fetchGenres, selectGenres } from "./genresSlice";
import { setPage } from "../../../common/Pagination/pageNumber";

const MoviesList = () => {
  const dispatch = useDispatch();
  const [page, setNumber] = useState(1);
  setPage(page);
  const movieBrowserStatus = useSelector(selectMovieBrowserStatus);
  const movieBrowser = useSelector(selectMovies);
  const genres = useSelector(selectGenres);

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchGenres());
  }, [dispatch, page]);

  return (
    <StyledSection>
      <Content
        movieBrowserStatus={movieBrowserStatus}
        movieBrowser={movieBrowser}
        genres={genres}
        page={page}
        setNumber={setNumber}
      />
    </StyledSection>
  );
};

export default MoviesList;