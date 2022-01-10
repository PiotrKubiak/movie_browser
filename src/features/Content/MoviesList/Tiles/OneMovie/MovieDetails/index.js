import { nanoid } from "@reduxjs/toolkit";
import { ImageContainer, VideoIcon } from "../../../../styledTile";
import {
  ImageMovie,
  Information,
  Rate,
  Rating,
  Star,
  Tag,
  Tags,
  Title,
  Votes,
  Year,
  Container,
  StyledTiles,
  OtherInfo,
  BasicInfo,
  Overview,
  SgColor,
  StyledInfo
} from "../styled";

const MovieDetails = ({ img_base_url, api, id }) => {
  const results = api.data;

  return (
    <StyledTiles>
      <Container key={id} >
        {results.poster_path ?
          <ImageMovie src={img_base_url + results.poster_path} alt='' />
          :
          <ImageContainer width="310px" height="464px" mobileWidth="114px" mobileHeight="170px">
            <VideoIcon />
          </ImageContainer>
        }
        <Information>
          <Title> {results.original_title} </Title>
          <Year>{results.release_date && results.release_date.slice(0, 4)}</Year>
          <StyledInfo>
            <BasicInfo><SgColor>Production: </SgColor>
              {results.production_countries.map(({ name }) => { return <p key={nanoid()}> {name}, </p> })}
            </BasicInfo>
            <BasicInfo>
              <SgColor>Release date: </SgColor>
              {results.release_date && results.release_date.slice(8, 10)}.
              {results.release_date && results.release_date.slice(5, 7)}.
              {results.release_date && results.release_date.slice(0, 4)}
            </BasicInfo>
          </StyledInfo>
          <Tags>
            {results.genres.map(({ name }) => { return <Tag key={nanoid()}>{name}</Tag> })}
          </Tags>
          <Rating>
            <Star />
            <Rate>{results.vote_average}</Rate>
            <Votes><OtherInfo>/ 10 </OtherInfo> {results.vote_count} votes</Votes>
          </Rating>
          <Overview>{results.overview}</Overview>
        </Information>
      </Container>
    </StyledTiles>
  );
};

export default MovieDetails;