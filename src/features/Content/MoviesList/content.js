import Tiles from "./Tiles";
import { Loader } from "../../../common/Loader";
import { Error } from "../../../common/Error";
import NoResult from "../../../common/NoResult";
import { useLocation } from "react-router-dom";
import { Pagination } from "../../../common/Pagination";
import { StyledTiles } from "../styledTile";
import { StyledHeader } from "../styledMovies";

export const Content = ({ movieBrowserStatus, movieBrowser, genres, credits, page, setNumber }) => {

  const location = useLocation();
  const searchParam = (new URLSearchParams(location.search)).get("search");

  const searchQuery = window.location.hash.slice(16,);

  switch (movieBrowserStatus) {
    case "initial":
      return null;
    case "loading":
      return <Loader />;
    case "error":
      return <Error />;
    case "success":
      if (movieBrowser.length > 0) {
        return (
          <>
            <StyledHeader>{searchQuery === "" ? "Popular movies" : `Search result for "${searchQuery}"`} </StyledHeader>
            <StyledTiles>
              <Tiles movieBrowser={movieBrowser} genres={genres} credits={credits} />
            </StyledTiles>
            <Pagination movieBrowserStatus={movieBrowserStatus} page={page} setNumber={setNumber} />
          </>
        )
      }
      else return <NoResult searchParam={searchParam} />
    default:
      throw new Error(`incorrect status: ${movieBrowserStatus}`);
  }
};