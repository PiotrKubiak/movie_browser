import { Description, Information, Rate, Rating, Star, Tag, Tags, Title, Votes, SubTitle, StyledLinkMovie, ImageMovie, ImageContainer, VideoIcon } from "../../styledTile";
import { img_base_url, tileImageSize } from "../../moviesBrowserApi";
import { foundName } from "../getGenres";
import { useLocation } from "react-router-dom";

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

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const q = searchParams.get("search");

  return (
    <>
      {movieDisplay.map(({ id, poster_path, original_title, release_date, character, job, genre_ids = [], vote_average, vote_count }) => (
        <StyledLinkMovie key={id} to={`/movies/${id}`}>
          {poster_path ?
            <ImageMovie src={img_base_url + tileImageSize + poster_path} alt={original_title} />
            :
            <ImageContainer width="292px" height="434px" mobileWidth="114px" mobileHeight="170px">
              <VideoIcon />
            </ImageContainer>
          }
          <Information>
            <Description>
              <Title align="left"> {original_title} </Title>
              <SubTitle>{(character || job) ? (cast ? character : job)
                : (release_date && release_date.slice(0, 4))}</SubTitle>
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