import { StyledHeader, StyledSection, StyledTiles } from "./styled";
import Tile  from "./Tile";
import { Pagination } from "../../../common/Pagination";
import NoResult from "../NoResult";

const MoviesList = () => {
    return (
        <StyledSection>
            {/* <NoResult/> */}
            
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
