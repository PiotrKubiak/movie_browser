import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { StyledInput } from "../../../styled";
import { fetchMoviesByQuery, fetchPeople, fetchPeopleByQuery, fetchPopularMovies } from "../moviesBrowserSlice";

function Search() {
  const location = useLocation();
  const history = useHistory();
  const query = (new URLSearchParams(location.search)).get("search")

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete("search");
    } else {
      searchParams.set("search", target.value)
    }
    history.push(`${location.pathname}?${searchParams.toString()}`);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.hash.slice(0, 8) === "#/movies") {
      if (query === "" || query === null) {
        dispatch(fetchPopularMovies())
      } else {
        dispatch(fetchMoviesByQuery(query));
      }
    } else if (window.location.hash.slice(2, 8) === "people") {
      if (query === "" || query === null) {
        dispatch(fetchPeople());
      } else {
        dispatch(fetchPeopleByQuery(query));
      }
    }
  }, [dispatch, query]);

  return (
    <StyledInput
      placeholder={"Search for movies"}
      value={query || ""}
      onChange={onInputChange} />
  )
}

export default Search;