import { StyledHeader, StyledSection } from "../styledMovies";
import { Pagination } from "../../../common/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies, selectMovies, selectMovieBrowserStatus } from "../moviesBrowserSlice";
import { useEffect, useState } from "react";
import { Content } from "./content";
import { fetchGenres, selectGenres } from "./genresSlice";
import { StyledTiles } from "../styledTile";
import { setPage } from "../../../common/Pagination/pageNumber";

const MoviesList = () => {
    const dispatch = useDispatch();
    const [page, setNumber] = useState(1);
    setPage(page);
    const movieBrowserStatus = useSelector(selectMovieBrowserStatus);
    const movieBrowser = useSelector(selectMovies);

    useEffect(() => {
        dispatch(fetchPopularMovies());
    }, [dispatch, page]);

    const genres = useSelector(selectGenres);

    useEffect(() => {
        dispatch(fetchGenres());
    }, [dispatch]);

    return (
        <StyledSection>
            <StyledHeader>Popular movies</StyledHeader>
            <StyledTiles>
                <Content
                    movieBrowserStatus={movieBrowserStatus}
                    movieBrowser={movieBrowser}
                    genres={genres}
                />
            </StyledTiles>
            <Pagination movieBrowserStatus={movieBrowserStatus} page={page} setNumber={setNumber} />
        </StyledSection>
    );
};

export default MoviesList;