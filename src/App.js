import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import MoviePeople from "./features/Content/MoviePeople";
import MoviesList from "./features/Content/MoviesList";
import { Actress } from "./features/Content/MoviePeople/Tile/Actress";
import { OneMovie } from "./features/Content/MoviesList/Tiles/OneMovie";
import { ButtonsGroup, Camera, Container, Loupe, StyledBox, StyledItem, StyledList, StyledNav, StyledNavLink, StyledSearch, Title, } from "./styled";
import Search from "./features/Content/Search";

function App() {

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
                  <Search />
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
