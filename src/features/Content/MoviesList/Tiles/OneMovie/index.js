import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Error } from "../../../../../common/Error";
import { Loader } from "../../../../../common/Loader";
import { img_base_url } from "../../../moviesBrowserApi";
import { ImageMovie, Information, Rate, Rating, Star, Tag, Tags, Title, Votes, Year, Container, StyledTiles, OtherInfo, BasicInfo, Overview, SgColor, StyledInfo } from "./styled";
import Backdrop from "./Backdrop";

export function OneMovie() {

  const { id } = useParams();
  const [api, setApi] = useState({ state: "loading", });
  useEffect(() => {
    const axiosApi = () => {
      try {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=eb6efa05b2b8136a07d256a13fbb4f15&language=en-US`)
          .then(({ data }) => {
            setApi({ state: "success", data });
            console.log(data)
          })
      } catch (error) {
        (setApi({ state: "error", }));
      }
    }
    setTimeout(axiosApi, 500)
  }, [id]);
  console.log(api);

  return (
    <>
      {api.state === "loading"
        ? (
          <p>
            <Loader />
          </p>
        )
        : (api.state === "error"
          ? (
            <p>
              <Error />
            </p>
          ) : (
            <>
              <Backdrop
                backdropPath={img_base_url + api.data.backdrop_path}
                title={api.data.title}
                vote_avg={api.data.vote_average}
                num_vote={api.data.vote_count}
              />
              <StyledTiles>
                <Container>
                  <ImageMovie src={img_base_url + api.data.poster_path} alt='' />
                  <Information>
                    <Title> {api.data.original_title} </Title>
                    <Year>{api.data.release_date.slice(0, 4)}</Year>
                    <StyledInfo>
                      {api.data.production_countries.map(({ name }) => { return <BasicInfo><SgColor>Production: </SgColor>{name}</BasicInfo> })}
                      <BasicInfo><SgColor>Release date: </SgColor>{api.data.release_date}</BasicInfo>
                    </StyledInfo>
                    <Tags>
                      {api.data.genres.map(({ name }) => { return <Tag>{name}</Tag> })}
                    </Tags>
                    <Rating>
                      <Star />
                      <Rate>{api.data.vote_average}</Rate>
                      <OtherInfo> /10</OtherInfo>
                      <Votes>{api.data.vote_count} votes</Votes>
                    </Rating>
                    <Overview>{api.data.overview}</Overview>
                  </Information>
                </Container>
              </StyledTiles>
            </>
          ))}
    </>
  )
};