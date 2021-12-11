import { StyledHeader, StyledSection, StyledTiles } from "./styled";
import Tile from "./Tile";
import { Pagination } from "../../../common/Pagination";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchMovies, selectMovies, selectMoviesStatus } from "../../movieBrowserSlice";
import { useEffect } from "react";
// import NoResult from "../../../common/NoResult";

const MoviesList = () => {
    const dispatch = useDispatch();

    const moviesStatus = useSelector(selectMoviesStatus);
    const moviess = useSelector(selectMovies);
    console.log(moviess);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    const Content = () => {
        switch (moviesStatus) {
            case "initial":
                return null;
            case "loading":
                return (<p>ładowanie</p>);
            case "error":
                return (<p>error</p>);
            case "success":
                return (<Tile movies={moviess} />);
            default:
                throw new Error(`incorrect status: ${moviesStatus}`);
        }
    };

    return (
        <StyledSection>
            {/* <NoResult/> */}

            <StyledHeader>Popular movies</StyledHeader>
            <StyledTiles>
                <Content />
            </StyledTiles>
            <Pagination />
        </StyledSection>

    );
};


export default MoviesList;
