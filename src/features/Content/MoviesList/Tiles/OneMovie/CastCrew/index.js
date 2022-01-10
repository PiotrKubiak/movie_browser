import axios from "axios";
import { useEffect, useState } from "react";
import { Error } from "../../../../../../common/Error";
import { Loader } from "../../../../../../common/Loader";
import { StyledTiles } from "../../../../styledTile";
import { Header, Section } from "./styled";
import Tile from "../../../../PeopleList/Tile";

const CastCrew = ({ id, header, credits }) => {

  const [creditsApi, setCreditsApi] = useState({ state: "loading", });
  useEffect(() => {
    const axiosApi = () => {
      try {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=eb6efa05b2b8136a07d256a13fbb4f15&language=en-US`)
          .then(
            ({ data }) => {
              setCreditsApi({ state: "success", data });
            }
          )
      } catch (error) {
        (setCreditsApi({ state: "error", }));
      }
    }
    setTimeout(axiosApi, 500)
  }, [id]);

  return (
    <>
      <Section>
        <Header>{header}</Header>
        {creditsApi.state === "loading" ? (<Loader />) :
          (creditsApi.state === "error" ? (<Error />) :
            (
              <StyledTiles>
                <Tile movieBrowserStatus={creditsApi.state} movieBrowser={creditsApi} credits={credits} />
              </StyledTiles>
            ))}
      </Section>
    </>)
};

export default CastCrew;