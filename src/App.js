import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import MoviePeople from "./features/Content/MoviePeople";
import MoviesList from "./features/Content/MoviesList";
import { StyledInput, StyledList, StyledNav, StyledNavLink, StyledSearch } from "./styled";

function App() {
  return (
    <HashRouter>
      <StyledNav>
        <StyledList>
          <li>🎥 Movies Browser</li>
          <li><StyledNavLink to="/movies">MOVIES</StyledNavLink></li>
          <li><StyledNavLink to="/people">PEOPLE</StyledNavLink></li>
          <li><StyledSearch><StyledInput placeholder="🔍︎ Search for movies..."></StyledInput></StyledSearch></li>
        </StyledList>
      </StyledNav>
      <Switch>
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
