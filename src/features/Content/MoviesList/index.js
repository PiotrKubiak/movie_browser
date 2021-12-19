import { StyledHeader, StyledSection } from "../styledMovies";
import { Pagination } from "../../../common/Pagination";
// import NoResult from "../../../common/NoResult";

import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectMovies, selectMovieBrowserStatus } from "../moviesBrowserSlice";
import { useEffect } from "react";
import { Content } from "./content";

import { fetchGenres, selectGenres, selectGenresStatus } from "./genresSlice";

const MoviesList = () => {
    const dispatch = useDispatch();
    const movieBrowserStatus = useSelector(selectMovieBrowserStatus);
    const movieBrowser = useSelector(selectMovies);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    const genresStatus = useSelector(selectGenresStatus);
    const genres = useSelector(selectGenres);

    useEffect(() => {
        dispatch(fetchGenres());
    }, [dispatch]);

    return (
        <StyledSection>    
            {/* <NoResult/> */}
            <StyledHeader>Popular movies</StyledHeader>
                <Content
                    movieBrowserStatus={movieBrowserStatus}
                    movieBrowser={movieBrowser}
                    genres={genres}
                />
            <Pagination movieBrowserStatus={movieBrowserStatus} />
        </StyledSection>
    );
};

export default MoviesList;