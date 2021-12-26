import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Error } from "../../../../../common/Error";
import { Loader } from "../../../../../common/Loader";
import { img_base_url } from "../../../moviesBrowserApi";
import Backdrop from "./Backdrop";
import CastCrew from "./CastCrew";
import MovieDetails from "./MovieDetails";

export function OneMovie() {

  const { id } = useParams();
  const [api, setApi] = useState({ state: "loading", });
  useEffect(() => {
    const axiosApi = () => {
      try {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=eb6efa05b2b8136a07d256a13fbb4f15&language=en-US`)
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
              <Backdrop
                backdropPath={img_base_url + api.data.backdrop_path}
                title={api.data.title}
                vote_avg={api.data.vote_average}
                num_vote={api.data.vote_count}
              />
              <MovieDetails img_base_url={img_base_url} api={api} />
              <CastCrew id={id} header="Cast" credits="cast" />
              <CastCrew id={id} header="Crew" credits="crew" />
            </>
          ))}
    </>
  )
};