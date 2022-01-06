import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import MoviePeople from "./features/Content/MoviePeople";
import MoviesList from "./features/Content/MoviesList";
import { Actress } from "./features/Content/MoviePeople/Tile/Actress";
import { OneMovie } from "./features/Content/MoviesList/Tiles/OneMovie";
import {
  ButtonsGroup,
  Camera,
  Container,
  Loupe,
  StyledBox,
  StyledInput,
  StyledItem,
  StyledList,
  StyledNav,
  StyledNavLink,
  StyledSearch,
  Title
} from "./styled";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMoviesByQuery, fetchPeople, fetchPeopleByQuery, fetchPopularMovies } from "./features/Content/moviesBrowserSlice";

function App() {
  const [query, setQuery] = useState("");
  console.log(window.location.hash.slice(2,));

  const dispatch = useDispatch();
  useEffect(() => {
    if (window.location.hash.slice(2,) === "movies") {
      console.log(" jest w movies");
      if (query.trim() === "") {
        dispatch(fetchPopularMovies());
      } else {
        dispatch(fetchMoviesByQuery(query));
      }
    } else if (window.location.hash.slice(2,) === "people") {
      console.log(" jest w people");
      if (query.trim() === "") {
        dispatch(fetchPeople());
      } else {
        dispatch(fetchPeopleByQuery(query));
      }
    }

  }, [dispatch, query]);

  return (
    <HashRouter>
      <StyledNav>
        <Container>
          <StyledList>
            <ButtonsGroup>
              <StyledItem>
                <Title>
                  {" "}
                  <Camera /> Movies Browser
                </Title>
              </StyledItem>
              <StyledItem>
                <StyledNavLink to="/movies">MOVIES</StyledNavLink>
              </StyledItem>
              <StyledItem>
                <StyledNavLink to="/people">PEOPLE</StyledNavLink>
              </StyledItem>
            </ButtonsGroup>
            <StyledItem>
              <StyledSearch>
                <StyledBox>
                  <Loupe />
                  <StyledInput
                    placeholder="Search for movies..."
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                    }} />
                </StyledBox>
              </StyledSearch>
            </StyledItem>
          </StyledList>
        </Container>
      </StyledNav>
      <Switch>
        <Route path={`/movies/:id`}>
          <OneMovie />
        </Route>
        <Route path={`/people/:id`}>
          <Actress />
        </Route>
        <Route path="/movies">
          <MoviesList />
        </Route>
        <Route path="/people">
          <MoviePeople />
        </Route>
        <Redirect to="/movies" />
      </Switch>
    </HashRouter>
  );
}

export default App;
