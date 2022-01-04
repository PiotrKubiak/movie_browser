import { ImageMovie, Information, Rate, Rating, Star, Tag, Tags, Title, Votes, Year, Container, StyledTiles, OtherInfo, BasicInfo, Overview, SgColor, StyledInfo } from "../styled";


const MovieDetails = ({ img_base_url, api }) => {

    return (
        <StyledTiles>
            <Container>
                <ImageMovie src={img_base_url + api.data.poster_path} alt='' />
                <Information>
                    <Title> {api.data.original_title} </Title>
                    <Year>{api.data.release_date.slice(0, 4)}</Year>
                    <StyledInfo>
                        <BasicInfo><SgColor>Production: </SgColor>
                        {api.data.production_countries.map(({ name }) => { return <a>{name}, </a> })}
                        </BasicInfo>
                        <BasicInfo>
                            <SgColor>Release date: </SgColor>
                            {api.data.release_date.slice(8, 10)}.
                            {api.data.release_date.slice(5, 7)}.
                            {api.data.release_date.slice(0, 4)}
                        </BasicInfo>
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
    );

};

export default MovieDetails;