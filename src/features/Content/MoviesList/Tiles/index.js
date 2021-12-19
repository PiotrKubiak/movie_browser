import { Container, Description, Image, Information, Rate, Rating, Star, Tag, Tags, Title, Votes } from "../../styledTile";
import { img_base_url } from "../../moviesBrowserApi";
import { StyledTiles } from "../../styledMovies";

const Tiles = ({ movieBrowser }) => {
  return (
    <StyledTiles>
      {movieBrowser.map(
        ({
          id,
          poster_path,
          original_title,
          // release_date,
          genre_ids,
          vote_average,
          vote_count,
        }) => (
          <Container key={id}>
            <Image src={img_base_url + poster_path} alt={original_title} />
            <Information>
              <Description>
                <Title> {original_title} </Title>
                {/* <Year>{release_date.substring(4, -1)}</Year> */}
                <Tags>
                  <Tag>{genre_ids}</Tag>
                </Tags>
              </Description>
              <Rating>
                <Star />
                <Rate>{vote_average}</Rate>
                <Votes>{vote_count} votes</Votes>
              </Rating>
            </Information>
          </Container>
        )
      )}
    </StyledTiles>
  );
};

export default Tiles;
