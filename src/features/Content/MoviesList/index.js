import { StyledHeader, StyledSection, StyledTiles } from "./styled";
import Tile from "./Tile";
// import NoResult from "../../../common/NoResult";
import { Pagination } from "../../../common/Pagination";
// import Error from "../Content/Error";

const MoviesList = () => {
  return (
    <StyledSection>
      {/* <NoResult/> */}

      {/* <Error/> */}
      <StyledHeader>Popular movies</StyledHeader>
      <StyledTiles>
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </StyledTiles>
      <Pagination />
    </StyledSection>
  );
};

export default MoviesList;
