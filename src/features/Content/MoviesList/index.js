import { StyledHeader, StyledSection, StyledTiles } from "./styled";
import Tile  from "./Tile";
import { Pagination } from "../../../common/Pagination";
import { getMovies } from "./movieBrowserApi.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchMovies, selectMovies, selectMoviesStatus } from "../../movieBrowserSlice";
import { useEffect } from "react";
// import NoResult from "../../../common/NoResult";

const MoviesList = () => {
    const dispatch = useDispatch();

    const moviesStatus = useSelector(selectMoviesStatus);
    const movies = useSelector(selectMovies);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);


    // const movies = getMovies();

    return (
        <StyledSection>
            {/* <NoResult/> */}
            
            <StyledHeader>Popular movies</StyledHeader>
            <StyledTiles>
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
            </StyledTiles>
            <Pagination />
        </StyledSection>
  
  );
};


export default MoviesList;
