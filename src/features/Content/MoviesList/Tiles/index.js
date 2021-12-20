import { StyledTiles, Container, Description, Image, Information, Rate, Rating, Star, Tag, Tags, Title, Votes, Year } from "../../styledTile";
import { img_base_url } from "../../moviesBrowserApi";
import { foundName } from "../getGenres";
import { Link } from "react-router-dom";

const Tile = ({ genres, movieBrowser }) => {

  return (
    <StyledTiles>
      {movieBrowser.map(({ id, poster_path, original_title, release_date, genre_ids = [], vote_average, vote_count }) => (
        <Container key={id}>
          <Link to={`/movies/${id}`}>
            <Image src={img_base_url + poster_path} alt={original_title} />
            <Information>
              <Description>
                <Title> {original_title} </Title>
                {/* <Year>{release_date.substring(4, -1)}</Year> */}
                <Tags>
                  {genre_ids.map((id, index) => {
                    return <Tag key={index}>{foundName(id, genres)}</Tag>
                  })}
                </Tags>
              </Description>
              <Rating>
                <Star />
                <Rate>{vote_average}</Rate>
                <Votes>{vote_count} votes</Votes>
              </Rating>
            </Information>
          </Link>
        </Container>
      ))}
    </StyledTiles>
  )
};

export default Tile;
