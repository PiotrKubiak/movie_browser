import { StyledHeader, StyledSection } from "../styledMovies";
import { StyledTiles } from "../styledTile";
import { Pagination } from "../../../common/Pagination";
// import NoResult from "../../../common/NoResult";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople, selectMovies, selectMovieBrowserStatus } from "../moviesBrowserSlice";
import { useEffect, useState } from "react";
import { Content } from "./content";
import { setPage } from "../../../common/Pagination/pageNumber";

const MoviesPeople = () => {
    const dispatch = useDispatch();
    const [page, setNumber] = useState(1);
    setPage(page);
    const movieBrowserStatus = useSelector(selectMovieBrowserStatus);
    const movieBrowser = useSelector(selectMovies);

    useEffect(() => {
        dispatch(fetchPeople());
    }, [dispatch, page]);

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
            <Pagination movieBrowserStatus={movieBrowserStatus} page={page} setNumber={setNumber} />
        </StyledSection>
    );
};

export default MoviesPeople;
