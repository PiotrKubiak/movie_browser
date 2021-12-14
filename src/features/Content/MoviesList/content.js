import Tile from "./Tile";
import { Loader } from "../../../common/Loader";

export const Content = ({ moviesStatus, movies, genres }) => {
  switch (moviesStatus) {
    case "initial":
      return null;
    case "loading":
      return <Loader />;
    case "error":
      // return (<Error />);
      return <p> błąd</p>;
    case "success":
      return <Tile movies={movies} genres={genres}/>;
    default:
      throw new Error(`incorrect status: ${moviesStatus}`);
  }
};
