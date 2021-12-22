import { StyledHeader, StyledSection } from "../styledMovies";
import { Pagination } from "../../../common/Pagination";
// import NoResult from "../../../common/NoResult";

import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectMovies, selectMovieBrowserStatus } from "../moviesBrowserSlice";
import { useEffect, useState } from "react";
import { Content } from "./content";

import { fetchGenres, selectGenres } from "./genresSlice";
import { StyledTiles } from "../styledTile";

const MoviesList = () => {
    const dispatch = useDispatch();
    const movieBrowserStatus = useSelector(selectMovieBrowserStatus);
    const movieBrowser = useSelector(selectMovies);

    const [number, setNumber] = useState(1);
    useEffect(() => {
        console.log(`Kliknięto ${number} razy`);
        dispatch(fetchMovies());
    }, [dispatch, number]);

    const genres = useSelector(selectGenres);

    useEffect(() => {
        dispatch(fetchGenres());
    }, [dispatch]);

    return (
        <StyledSection>
            {/* <NoResult/> */}
            <StyledHeader>Popular movies</StyledHeader>
            <StyledTiles>
                <Content
                    movieBrowserStatus={movieBrowserStatus}
                    movieBrowser={movieBrowser}
                    genres={genres}
                />
            </StyledTiles>
            <Pagination movieBrowserStatus={movieBrowserStatus} number={number} setNumber={setNumber} />
        </StyledSection>
    );
};

export default MoviesList;