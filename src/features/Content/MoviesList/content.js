import Tile from "./Tile";
import { Loader } from "../../../common/Loader";

export const Content = ({ moviesStatus, movies }) => {
  switch (moviesStatus) {
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
      throw new Error(`incorrect status: ${moviesStatus}`);
  }
};
