import { Container, Description, Image, Title } from "../../styledTile";
import { img_base_url } from "../../moviesBrowserApi";


const Tile = ({ movieBrowser }) => {

    return (
        <>
            {movieBrowser && movieBrowser.map(({ id, name, profile_path }) => (
                <Container key={id}>
                    <Image src={img_base_url + profile_path} alt={name} />
                    <Description>
                        <Title> {name} </Title>
                    </Description>
                </Container>
            ))};
        </>
    );
};

export default Tile;
