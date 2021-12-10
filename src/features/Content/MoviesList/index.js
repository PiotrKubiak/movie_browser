import { StyledHeader, StyledSection, StyledTiles } from "./styled";
import Tile  from "./Tile";
import { Pagination } from "../../../common/Pagination";

const MoviesList = () => {
    return (
        <StyledSection>
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
