import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Error } from "../../../../../common/Error";
import { Loader } from "../../../../../common/Loader";
import { img_base_url } from "../../../moviesBrowserApi";
import MovieCastCrew from "./MovieCastCrew";
import { Container, ImagePeople, Information, Title, StyledInfo, BasicInfo, SgColor, Biography, StyledTiles } from "../styled";

export function Actress() {

  const { id } = useParams();
  const [api, setApi] = useState({ state: "loading", });
  useEffect(() => {
    const axiosApi = () => {
      try {
        axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=eb6efa05b2b8136a07d256a13fbb4f15&language=en-US`)
          .then(({ data }) => {
            setApi({ state: "success", data });
          })
      } catch (error) {
        (setApi({ state: "error", }));
      }
    }
    setTimeout(axiosApi, 500)
  }, [id]);

  return (
    <>
      {api.state === "loading"
        ? (<Loader />)
        : (api.state === "error"
          ? (<Error />)
          : (
            <>
              <StyledTiles>
                <Container>
                  <ImagePeople src={img_base_url + api.data.profile_path} alt='' />
                  <Information>
                    <Title> {api.data.name} </Title>
                    <StyledInfo>
                      <BasicInfo><SgColor>Date of birth: </SgColor>{api.data.birthday}</BasicInfo>
                      <BasicInfo><SgColor>Place of birth: </SgColor>{api.data.place_of_birth}</BasicInfo>
                      <Biography>{api.data.biography}</Biography>
                    </StyledInfo>
                  </Information>
                </Container>
              </StyledTiles>
              <MovieCastCrew id={id} header="Movies - cast" credits="cast" />
              <MovieCastCrew id={id} header="Movies - crew" credits="crew" />

            </>
          ))}
    </>
  )
};