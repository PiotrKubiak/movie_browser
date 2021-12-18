import { BackdropImage, Container, Image, MainInfo, Off, Rate, Rating, Shadows, Star, Title, Votes } from "./styled";
import posterBig from "../../../../images/posterBig.png"

const Backdrop = ({title, rate, votes}) => {
    return (
        <Container>
            <BackdropImage>
                <MainInfo>
                    <Title>{title}</Title>
                    <Rating>
                        <Star />
                        <Rate>{rate}</Rate>
                        <Off>/ 10</Off>
                        <Votes>{votes} votes</Votes>
                    </Rating>
                </MainInfo>
            </BackdropImage>
        </Container>
    );
};

export default Backdrop;
