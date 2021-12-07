import { StyledHeader, StyledSection, StyledTiles } from "./styled";
import Tile  from "./Tile";

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
        </StyledSection>
    )
}

export default MoviesList;