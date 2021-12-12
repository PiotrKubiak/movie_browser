import Tile from "./Tile";
import { Loader } from "../../../common/Loader";

export const Content = ({ movieBrowserStatus, movies }) => {
  switch (movieBrowserStatus) {
    case "initial":
      return null;
    case "loading":
      return <Loader />;
    case "error":
      // return (<Error />);
      return <p> błąd</p>;
    case "success":
      return <Tile movies={movies} />;
    default:
      throw new Error(`incorrect status: ${movieBrowserStatus}`);
  }
};
