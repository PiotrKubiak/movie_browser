import Tile from "./Tile";
import { StyledHeader } from "../styledMovies";
import { Loader } from "../../../common/Loader";
import { Error } from "../../../common/Error";
import { StyledTiles } from "../styledTile";
import { Pagination } from "../../../common/Pagination";
import { useLocation } from "react-router-dom";
import NoResult from "../../../common/NoResult";

export const Content = ({ movieBrowserStatus, movieBrowser, credits, page, setNumber }) => {

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
            <StyledHeader>{searchQuery === "" ? "Popular people" : `Search result for "${searchQuery}"`} </StyledHeader>
            <StyledTiles>
              <Tile movieBrowser={movieBrowser} credits={credits} />
            </StyledTiles>
            <Pagination movieBrowserStatus={movieBrowserStatus} page={page} setNumber={setNumber} />
          </>
        )
      }
      else return <NoResult searchParam={searchParam} />;
    default:
      throw new Error(`incorrect status: ${movieBrowserStatus}`);
  }
};
