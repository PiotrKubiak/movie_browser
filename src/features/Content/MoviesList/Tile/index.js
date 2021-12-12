import { Container, Description, Image, Rate, Rating, Star, Tag, Tags, Title, Votes, Year } from "./styled";
import { img_base_url } from "../../moviesBrowserApi";


const Tile = ({ movies }) => {

    return (
        <>
            {movies.map(({ id, poster_path, original_title, release_date, genre_ids, vote_average, vote_count }) => (
                <Container key={id}>
                    <Image src={img_base_url + poster_path} alt={original_title} />
                    <Description>
                        <Title> {original_title} </Title>
                        {/* <Year>{release_date.substring(4,-1)}</Year> */}
                        <Tags>
                            <Tag>{genre_ids}</Tag>
                        </Tags>

                        <Rating>
                            <Star />
                            <Rate>{vote_average}</Rate>
                            <Votes>{vote_count} votes</Votes>
                        </Rating>
                    </Description>
                </Container>
            ))};
        </>
    );
};

export default Tile;
