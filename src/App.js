import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import MoviePeople from "./features/Content/MoviePeople";
import MoviesList from "./features/Content/MoviesList";
import { Actress } from "./features/Content/MoviePeople/Tile/Actress";
import { OneMovie } from "./features/Content/MoviesList/Tiles/OneMovie";
import { ButtonsGroup, Camera, Container, Loupe, StyledBox, StyledInput, StyledItem, StyledList, StyledNav, StyledNavLink, StyledSearch, Title, } from "./styled";
import { useState } from "react";
import axios from "axios";

function App() {
  const [query, updateQuery] = useState();
  const [timeoutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState([]);

  const fetchData = async (query) => {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=eb6efa05b2b8136a07d256a13fbb4f15&language=en-US&query=${query}&page=1&include_adult=false`)
    updateMovieList(response.data.results)
  };
  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    updateQuery(event.target.value);
    const timeout = setTimeout(() => fetchData(event.target.value), 1_500);
    updateTimeoutId(timeout);
  };

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
                <StyledInput placeholder="Search for movies..." value={query} onChange={onTextChange} />
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
          {movieList.length > 0 ? <MoviesList movieList={movieList} /> : <MoviesList />}
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
