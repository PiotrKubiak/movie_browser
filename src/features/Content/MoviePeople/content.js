import Tile from "./Tile";
import { Loader } from "../../../common/Loader";
import { Error } from "../../../common/Error";

export const Content = ({ movieBrowserStatus, movieBrowser, credits }) => {
  switch (movieBrowserStatus) {
    case "initial":
      return null;
    case "loading":
      return <Loader />;
    case "error":
      return <Error />;
    case "success":
      return <Tile movieBrowser={movieBrowser} credits={credits} />;
    default:
      throw new Error(`incorrect status: ${movieBrowserStatus}`);
  }
};
