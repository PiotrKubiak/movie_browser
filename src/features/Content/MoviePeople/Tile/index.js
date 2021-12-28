import { Character, Description, ImageContainer, ImagePeople, ProfileIcon, StyledLinkPeople, Title } from "../../styledTile";
import { img_base_url } from "../../moviesBrowserApi";

const Tile = ({ movieBrowser, credits }) => {
  let creditsDisplay;
  let cast;

  if (credits === "cast") {
    creditsDisplay = movieBrowser.data.cast.slice(0, 12);
    cast = true;
  } else if (credits === "crew") {
    creditsDisplay = movieBrowser.data.crew.slice(0, 12);
    cast = false;
  } else if (!credits) {
    creditsDisplay = movieBrowser;
  }

  return (
    <>
      {creditsDisplay.map(({ id, name, profile_path, character, job }) => (
        <StyledLinkPeople key={id} to={`/people/${id}`}>

          <ImagePeople src={img_base_url + profile_path} alt={name} />
          <Description>
            <Title> {name} </Title>
            {(character || job) ?
              <Character>{cast ? character : job}</Character>
              : null
            }
          </Description>
        </StyledLinkPeople>
      ))}
    </>
  );
};

export default Tile;