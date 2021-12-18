import { BackdropImage, Container, Image, MainInfo, Off, Rate, Rating, Shadows, Star, Title, Votes } from "./styled";
import posterBig from "../../../images/posterBig.png"

const MoviePage = () => {
    return (
        <Container>
            <BackdropImage>
                <MainInfo>
                    <Title>Mulan long title</Title>
                    <Rating>
                        <Star />
                        <Rate>7.8</Rate>
                        <Off>/ 10</Off>
                        <Votes>335 votes</Votes>
                    </Rating>
                </MainInfo>
            </BackdropImage>
        </Container>
    );
};

export default MoviePage;
