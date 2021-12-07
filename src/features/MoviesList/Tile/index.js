import { Container, Description, Image, Rating, Star, Tag, Tags, Title, Year } from "./styled";
import poster from "../../images/poster.png";

const Tile = () => {
    return (
        <Container>
            <Image src={poster} alt="" />
            <Description>
                <Title>Mulan</Title>
                <Year>2020</Year>
                <Tags>
                    <Tag>Action</Tag>
                    <Tag>Adventure</Tag>
                    <Tag>Drama</Tag>
                </Tags>
            </Description>
            <Rating>
                <Star/>
            </Rating>
        </Container>
    )
}

export default Tile;