import { BackdropImage, Container, Gradient, Image, MainInfo, OtherInfo, Rate, RateScale, Rating, Star, Title } from "./styled";

const Backdrop = ({ backdropPath, title, vote_avg, num_vote }) => {

    if (backdropPath) {
        return (
            <Container>
                <BackdropImage bcg={backdropPath}>
                    <Gradient>
                        <MainInfo>
                            <Title>{title}</Title>
                            <Rating>
                                <Star />
                                <Rate>{vote_avg}</Rate>
                                <OtherInfo>/ 10</OtherInfo>
                                <OtherInfo>{num_vote} votes</OtherInfo>
                            </Rating>
                        </MainInfo>
                    </Gradient>
                </BackdropImage>
            </Container>
        );
    } else return null;
};

export default Backdrop;