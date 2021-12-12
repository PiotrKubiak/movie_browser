import { StyledHeader, StyledSection, StyledTiles } from "./styled";
import { Pagination } from "../../../common/Pagination";
// import NoResult from "../../../common/NoResult";

import { useDispatch, useSelector } from "react-redux";
import { fetchPeople, selectMovies, selectMovieBrowserStatus } from "../moviesBrowserSlice";
import { useEffect } from "react";
import { Content } from "./content";

const MoviesPeople = () => {
    const dispatch = useDispatch();
    const movieBrowserStatus = useSelector(selectMovieBrowserStatus);
    const movieBrowser = useSelector(selectMovies);

    useEffect(() => {
        dispatch(fetchPeople());
    }, [dispatch]);

    return (
        <StyledSection>
            {/* <NoResult/> */}
            <StyledHeader>Popular people</StyledHeader>
            <StyledTiles>
                <Content movieBrowserStatus={movieBrowserStatus} movieBrowser={movieBrowser} />
            </StyledTiles>
            <Pagination />
        </StyledSection>
    );
};

export default MoviesPeople;
