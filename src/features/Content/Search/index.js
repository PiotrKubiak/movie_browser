// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useLocation } from "react-router-dom";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import { StyledInput } from "../../../styled";
// import { fetchMoviesByQuery, fetchPeople, fetchPeopleByQuery, fetchPopularMovies } from "../moviesBrowserSlice";


// function Search() {
//   const location = useLocation();
//   const history = useHistory();
//   const [timeoutId, setTimeoutId] = useState();
//   const [searchUsed, setSearchUsed] = useState(false);
//   const q= (new URLSearchParams(location.search)).get("search")

//   const onInputChange = ({target}) => {
//     const searchParams = new URLSearchParams(location.search);

//     if(target.value.trim() === ""){
//       searchParams.delete("search");
//     } else{
//       searchParams.set("search", target.value)
//     }

//     history.push(`${location.pathname}?${searchParams.toString()}`);
//     setSearchUsed(true);
//   };

//   const dispatch = useDispatch();


//   useEffect(() => {
//     if(searchUsed){
//       clearTimeout(timeoutId);
//       let timeout;
//       if (window.location.hash.slice(0,8) === "#/movies") {
//         if (q === "" || q === null) {
//           timeout = setTimeout(() => 
//           dispatch(fetchPopularMovies()), 1000);     
//         } else {
//           timeout = setTimeout(() => 
//           dispatch(fetchMoviesByQuery(q)), 1000);
//         }
//       } else if (window.location.hash.slice(2,8) === "people") {
//         if (q === "" || q === null) {
//           timeout = setTimeout(() => 
//           dispatch(fetchPeople()), 1000);
//         } else {
//           timeout = setTimeout(() => 
//           dispatch(fetchPeopleByQuery(q)), 1000);
//         }
//       }
//       setTimeoutId(timeout);
//     }
    
//     console.log(window.location.hash)
//     console.log(q)
//   }, [q]);
  
//   return (
//     <StyledInput
//       placeholder="Search for movies..."
//       value={q || ""}
//       onChange={onInputChange} />
//   )
// }

// export default Search;













import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { StyledInput } from "../../../styled";
import { fetchMoviesByQuery, fetchPeople, fetchPeopleByQuery, fetchPopularMovies } from "../moviesBrowserSlice";


function Search() {
  const location = useLocation();
  const history = useHistory();
  const q= (new URLSearchParams(location.search)).get("search")

  const onInputChange = ({target}) => {
    const searchParams = new URLSearchParams(location.search);

    if(target.value.trim() === ""){
      searchParams.delete("search");
    } else{
      searchParams.set("search", target.value)
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.hash.slice(0,8) === "#/movies") {
      // if (q) {
      if (q === "" || q === null) {
      // dispatch(fetchMoviesByQuery(q));
        dispatch(fetchPopularMovies())
      } else {
        dispatch(fetchMoviesByQuery(q));
        // dispatch(fetchPopularMovies());
      }
    } else if (window.location.hash.slice(2,8) === "people") {
      if (q === "" || q === null) {
        dispatch(fetchPeople());
      } else {
        dispatch(fetchPeopleByQuery(q));
      }
    }
    console.log(window.location.hash)
    console.log(q)
  }, [dispatch, q]);
  
  return (
    <StyledInput
      placeholder="Search for movies..."
      value={q || ""}
      onChange={onInputChange} />
      
  )
}

export default Search;


