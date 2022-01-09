import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Error } from "../../../../../../common/Error";
import { Loader } from "../../../../../../common/Loader";
import { Content } from "../../../../MoviesList/content";
import { fetchGenres, selectGenres } from "../../../../MoviesList/genresSlice";
import { StyledTiles } from "../../../../styledTile";
import Tiles from "../../../../MoviesList/Tiles"

import { Header, Section } from "./styled";

const MovieCastCrew = ({ id, header, credits }) => {
    const dispatch = useDispatch();
    const genres = useSelector(selectGenres);


    useEffect(() => {
        dispatch(fetchGenres());
    }, [dispatch]);



    const [creditsApi, setCreditsApi] = useState({ state: "loading", });
    useEffect(() => {
        const axiosApi = () => {
            try {
                axios.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=eb6efa05b2b8136a07d256a13fbb4f15&language=en-US`)
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
        <Section>
            {creditsApi.state === "loading" ? (<Loader />) :
                (creditsApi.state === "error" ? (<Error />) :
                    (
                        <>
                            <Header> {header} ({credits === "cast" ? creditsApi.data.cast.length : creditsApi.data.crew.length})
                            </Header>

                            <StyledTiles>
                                <Tiles movieBrowser={creditsApi} genres={genres} credits={credits}/>;
                            </StyledTiles>
                        </>
                    ))}
        </Section>)
};

export default MovieCastCrew;