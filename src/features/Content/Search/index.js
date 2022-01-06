import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { StyledInput } from "../../../styled";
import { fetchMoviesByQuery, fetchPeople, fetchPeopleByQuery, fetchPopularMovies } from "../moviesBrowserSlice";


function Search() {

  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.hash.slice(2,) === "movies") {
      if (query.trim() === "") {
        dispatch(fetchPopularMovies());
      } else {
        dispatch(fetchMoviesByQuery(query));
      }
    } else if (window.location.hash.slice(2,) === "people") {
      if (query.trim() === "") {
        dispatch(fetchPeople());
      } else {
        dispatch(fetchPeopleByQuery(query));
      }
    }
  }, [dispatch, query]);

  return (
    <StyledInput
      placeholder="Search for movies..."
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
      }} />
  )
}

export default Search;