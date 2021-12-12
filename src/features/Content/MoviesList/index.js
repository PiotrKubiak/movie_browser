import { StyledHeader, StyledSection, StyledTiles } from "./styled";
import { Pagination } from "../../../common/Pagination";
// import NoResult from "../../../common/NoResult";

import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectMovies, selectMovieStatus } from "./moviesBrowserSlice";
import { useEffect } from "react";
import { Content } from "./content";



const MoviesList = () => {
    const dispatch = useDispatch();
    const moviesStatus = useSelector(selectMovieStatus);
    const movies = useSelector(selectMovies);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    return (
        <StyledSection>
            {/* <NoResult/> */}

            <StyledHeader>Popular movies</StyledHeader>
            <StyledTiles>
                <Content moviesStatus={moviesStatus} movies={movies} />
            </StyledTiles>
            <Pagination />
        </StyledSection>
    );
};

export default MoviesList;