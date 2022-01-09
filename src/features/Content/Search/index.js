import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { StyledInput } from "../../../styled";
import { fetchMoviesByQuery, fetchPeople, fetchPeopleByQuery, fetchPopularMovies } from "../moviesBrowserSlice";

function Search() {
  const location = useLocation();
  const history = useHistory();
  const query = (new URLSearchParams(location.search)).get("search")
  const [timeoutId, setTimeoutId] = useState();

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete("search");
    } else {
      searchParams.set("search", target.value)
    }
    const base = `${location.pathname}`;
    const searchParam = `?${searchParams.toString()}`;
    history.push(`${location.pathname}?${searchParams.toString()}`);
    window.location.hash = base.slice(0, 7) + searchParam;
  };

  const dispatch = useDispatch();

  useEffect(() => {
    clearTimeout(timeoutId);
    let timeout;
    if (window.location.hash.slice(2, 8) === "movies") {
      if (query === "" || query === null) {
        dispatch(fetchPopularMovies());
      } else {
        timeout = setTimeout(() => dispatch(fetchMoviesByQuery(query)), 500);
      }
    } else if (window.location.hash.slice(2, 8) === "people") {
      if (query === "" || query === null) {
        dispatch(fetchPeople());
      } else {
        timeout = setTimeout(() => dispatch(fetchPeopleByQuery(query)), 500);
      }
    }
    setTimeoutId(timeout);
  }, [dispatch, query]);

  const inputChoice = window.location.hash.slice(2, 8);

  return (
    <StyledInput
      placeholder={`Search for ${inputChoice}`}
      value={query || ""}
      onChange={onInputChange} />
  )
}

export default Search;