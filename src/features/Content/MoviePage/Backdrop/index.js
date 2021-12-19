import { BackdropImage, Container, Image, MainInfo, Off, Rate, Rating, Star, Title, Votes } from "./styled";
import posterBig2 from "./posterBig2.png";

const Backdrop = ({ image, title, rate, votes }) => {
    return (
        <Container>
            
                <BackdropImage>
                    <Image src={posterBig2} alt="" />
                    <MainInfo>
                        <p> asda asd asd a dad asd asd </p>
                    </MainInfo>
                </BackdropImage>
            
        </Container>
    );
};

export default Backdrop;


{/* <img src={posterBig2}/>
            <BackdropImage style={{backgroundImage:posterBig2}}>
                <MainInfo>
                    <Title>{title}</Title>
                    <Rating>
                        <Star />
                        <Rate>{rate}</Rate>
                        <Off>/ 10</Off>
                        <Votes>{votes} votes</Votes>
                    </Rating>
                </MainInfo>
            </BackdropImage> */}