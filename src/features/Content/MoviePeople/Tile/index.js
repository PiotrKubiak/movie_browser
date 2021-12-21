import { Description, ImagePeople, StyledLinkPeople, Title } from "../../styledTile";
import { img_base_url } from "../../moviesBrowserApi";


const Tile = ({ movieBrowser }) => {
  return (
    <>
      {movieBrowser.map(({ id, name, profile_path }) => (
        <StyledLinkPeople key={id} to={`/people/${id}`}>
          <ImagePeople src={img_base_url + profile_path} alt={name} />
          <Description>
            <Title> {name} </Title>
          </Description>
        </StyledLinkPeople>
      ))}
    </>
  );
};

export default Tile;
