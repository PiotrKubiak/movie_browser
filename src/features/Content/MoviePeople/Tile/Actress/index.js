import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Error } from "../../../../../common/Error";
import { Loader } from "../../../../../common/Loader";
import { img_base_url, tileImageSize } from "../../../moviesBrowserApi";
import { ImagePeople } from "../../../styledTile";
import MovieCastCrew from "./MovieCastCrew";

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
              <ImagePeople src={img_base_url + tileImageSize + api.data.profile_path} alt='' />
              {api.data.name}

              <MovieCastCrew id={id} header="Movies - cast" credits="cast"/>
              <MovieCastCrew id={id} header="Movies - crew" credits="crew"/>
              
            </>
          ))}
    </>
  )
};