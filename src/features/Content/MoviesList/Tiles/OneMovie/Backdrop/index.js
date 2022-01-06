import { BackdropImage, Container, Gradient, MainInfo, OtherInfo, Rate, Rating, Star, Title } from "./styled";
import { img_base_url } from "../../../../moviesBrowserApi";


const Backdrop = ({ backdropPath, title, vote_avg, num_vote }) => {

    if (backdropPath) {
        return (
            <Container>
                <BackdropImage bcg={img_base_url + backdropPath}>
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