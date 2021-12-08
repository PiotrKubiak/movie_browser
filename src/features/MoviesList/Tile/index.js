import { Container, Description, Image, Rate, Rating, Star, Tag, Tags, Title, Votes, Year } from "./styled";
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
                <Rate>7.8</Rate>
                <Votes>35 Votes</Votes>
            </Rating>
        </Container>
    )
}

export default Tile;