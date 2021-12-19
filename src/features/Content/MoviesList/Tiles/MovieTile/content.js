import Tile from "./Tile";
import { Loader } from "../../../../../common/Loader";
import { Error } from "../../../../../common/Error";

export const Content = ({ movieBrowserStatus, movieBrowser }) => {
  switch (movieBrowserStatus) {
    case "initial":
      return null;
    case "loading":
      return <Loader />;
    case "error":
      return <Error />;
    case "success":
      return <Tile movieBrowser={movieBrowser} />;
    default:
      throw new Error(`incorrect status: ${movieBrowserStatus}`);
  }
};
