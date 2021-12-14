import { StyledHeader, StyledSection, StyledTiles } from "./styled";
import { Pagination } from "../../../common/Pagination";
// import NoResult from "../../../common/NoResult";

import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectMovies, selectMovieStatus } from "./moviesBrowserSlice";
import { useEffect } from "react";
import { Content } from "./content";

import { fetchGenres, selectGenres, selectGenresStatus } from "./genresSlice";



const MoviesList = () => {
    const dispatch = useDispatch();
    const moviesStatus = useSelector(selectMovieStatus);
    const movies = useSelector(selectMovies);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    const dispatch2 = useDispatch();
    const genresStatus = useSelector(selectGenresStatus);
    const genres = useSelector(selectGenres);

    useEffect(() => {
        dispatch2(fetchGenres());
    }, [dispatch2]);

    return (
        <StyledSection>
            {/* <NoResult/> */}

            <StyledHeader>Popular movies</StyledHeader>
            <StyledTiles>
                <Content moviesStatus={moviesStatus} movies={movies} genres={genres}/>
            </StyledTiles>
            <Pagination />
        </StyledSection>
    );
};

export default MoviesList;
