import { StyledHeader, StyledSection, StyledTiles } from "./styled";
import { Pagination } from "../../../common/Pagination";
// import NoResult from "../../../common/NoResult";

import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectMovies, selectMovieBrowserStatus } from "../moviesBrowserSlice";
import { useEffect } from "react";
import { Content } from "./content";

const MoviesList = () => {
    const dispatch = useDispatch();
    const movieBrowserStatus = useSelector(selectMovieBrowserStatus);
    const movies = useSelector(selectMovies);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    return (
        <StyledSection>
            {/* <NoResult/> */}
            <StyledHeader>Popular movies</StyledHeader>
            <StyledTiles>
                <Content movieBrowserStatus={movieBrowserStatus} movies={movies} />
            </StyledTiles>
            <Pagination />
        </StyledSection>
    );
};

export default MoviesList;
