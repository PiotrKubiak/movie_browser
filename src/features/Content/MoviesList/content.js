import Tiles from "./Tiles";
import { Loader } from "../../../common/Loader";
import { Error } from "../../../common/Error";

export const Content = ({ movieBrowserStatus, movieBrowser, genres, credits, movieList }) => {
  switch (movieBrowserStatus) {
    case "initial":
      return null;
    case "loading":
      return <Loader />;
    case "error":
      return <Error />;
    case "success":
      return <Tiles movieBrowser={movieBrowser} genres={genres} credits={credits} movieList={movieList} />;
    default:
      throw new Error(`incorrect status: ${movieBrowserStatus}`);
  }
};
