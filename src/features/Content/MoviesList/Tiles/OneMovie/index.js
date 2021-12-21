import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Error } from "../../../../../common/Error";
import { Loader } from "../../../../../common/Loader";
import { img_base_url } from "../../../moviesBrowserApi";
import { Image } from "../../../styledTile";

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
    <p>
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
            <p>
              <ImagePeople src={img_base_url + api.data.poster_path} alt='' />
              {api.data.original_title}

            </p>))}
    </p>
  )
};