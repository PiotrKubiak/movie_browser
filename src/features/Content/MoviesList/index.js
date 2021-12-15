import { StyledHeader, StyledSection } from "../styledMovies";
import { Pagination } from "../../../common/Pagination";
// import NoResult from "../../../common/NoResult";

import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectMovies, selectMovieBrowserStatus } from "../moviesBrowserSlice";
import { useEffect } from "react";
import { Content } from "./content";

const MoviesList = () => {
    const dispatch = useDispatch();
    const movieBrowserStatus = useSelector(selectMovieBrowserStatus);
    const movieBrowser = useSelector(selectMovies);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    return (
        <StyledSection>
            
            {/* <NoResult/> */}
            <StyledHeader>Popular movies</StyledHeader>
            <Content movieBrowserStatus={movieBrowserStatus} movieBrowser={movieBrowser} />
            <Pagination movieBrowserStatus={movieBrowserStatus} />
        </StyledSection>
    );
};

export default MoviesList;