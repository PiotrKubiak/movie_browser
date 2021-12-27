import { Description, Information, Rate, Rating, Star, Tag, Tags, Title, Votes, SubTitle, StyledLinkMovie, ImageMovie } from "../../styledTile";
import { img_base_url } from "../../moviesBrowserApi";
import { foundName } from "../getGenres";

const Tile = ({ genres, movieBrowser, credits }) => {
  let movieDisplay;
  let cast;

  if (credits === "cast") {
    movieDisplay = movieBrowser.data.cast.slice(0, 8);
    cast = true;
  } else if (credits === "crew") {
    movieDisplay = movieBrowser.data.crew.slice(0, 8);
    cast = false;
  } else if (!credits) {
    movieDisplay = movieBrowser;
  }

  return (
    <>
      {movieDisplay.map(({ id, poster_path, original_title, release_date, character, job, genre_ids = [], vote_average, vote_count }) => (
        <StyledLinkMovie key={id} to={`/movies/${id}`}>
          <ImageMovie src={img_base_url + poster_path} alt={original_title} />
          <Information>
            <Description>
              <Title align="left"> {original_title} </Title>
              <SubTitle>{(character || job) ? (cast ? character : job) : release_date.slice(0, 4)}</SubTitle>
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
        </StyledLinkMovie>
      ))}
    </>
  )
}

export default Tile;