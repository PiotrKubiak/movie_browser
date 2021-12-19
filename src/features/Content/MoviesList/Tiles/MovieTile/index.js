import { useDispatch, useSelector } from "react-redux";
import { fetchOneMovie, selectMovies, selectMovieBrowserStatus } from "../../../moviesBrowserSlice";
import { useEffect } from "react";
import { Content } from "./content";

const MovieTile = () => {
  const dispatch = useDispatch();
  const movieBrowserStatus = useSelector(selectMovieBrowserStatus);
  const movieBrowser = useSelector(selectMovies);

  useEffect(() => {
    dispatch(fetchOneMovie());
  }, [dispatch]);

  return (
    <Content movieBrowserStatus={movieBrowserStatus} movieBrowser={movieBrowser} />
  );
};

export default MovieTile;
