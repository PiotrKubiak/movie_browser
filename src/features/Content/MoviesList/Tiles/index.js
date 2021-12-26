import { Description, Information, Rate, Rating, Star, Tag, Tags, Title, Votes, SubTitle, StyledLinkMovie, ImageMovie } from "../../styledTile";
import { img_base_url } from "../../moviesBrowserApi";
import { foundName } from "../getGenres";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchGenres } from "../genresSlice";

const Tile = ({ genres, movieBrowser, credits }) => {
  let movieCastDisplay;
  let movieCrewDisplay;

  if (credits) {
    movieCastDisplay = movieBrowser.data.cast.slice(0, 8);
    movieCrewDisplay = movieBrowser.data.crew.slice(0, 8);
  }

  if (movieBrowser && !credits) {
    return (
      <>
        {movieBrowser.map(({ id, poster_path, original_title, release_date, genre_ids = [], vote_average, vote_count }) => (
          <StyledLinkMovie key={id} to={`/movies/${id}`}>
            <ImageMovie src={img_base_url + poster_path} alt={original_title} />
            <Information>
              <Description>
                <Title align="left"> {original_title} </Title>
                <SubTitle>{release_date && release_date.slice(0, 4)}</SubTitle>
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
  };
  if (movieBrowser && credits === "cast") {
    // console.log(movieCastDisplay)
    return (
      <>
        {movieCastDisplay.map(({ id, poster_path, original_title, character, genre_ids = [], vote_average, vote_count }) => (
          <StyledLinkMovie key={id} to={`/movies/${id}`}>
            <ImageMovie src={img_base_url + poster_path} alt={original_title} />
            <Information>
              <Description>
                <Title align="left"> {original_title} </Title>
                <SubTitle>{character}</SubTitle>
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

  if (movieBrowser && credits === "crew") {
    console.log(movieCrewDisplay)
    return (
      <>
        {movieCrewDisplay.map(({ id, poster_path, original_title, job, genre_ids = [], vote_average, vote_count }) => (
          <StyledLinkMovie key={id} to={`/movies/${id}`}>
            <ImageMovie src={img_base_url + poster_path} alt={original_title} />
            <Information>
              <Description>
                <Title align="left"> {original_title} </Title>
                <SubTitle>{job}</SubTitle>
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
}

export default Tile;
