import { Container, Description, Image, Title } from "../../styledTile";
import { img_base_url } from "../../moviesBrowserApi";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Tile = ({ movieBrowser }) => {

    return (
        <>
            {movieBrowser && movieBrowser.map(({ id, name, profile_path }) => (

                <Container key={id}>
                    <Link to={`/people/${id}`}>
                        <Image src={img_base_url + profile_path} alt={name} />
                        <Description>
                            <Title> {name} </Title>
                        </Description>
                    </Link>
                </Container>

            ))};
        </>
    );
};

export default Tile;
