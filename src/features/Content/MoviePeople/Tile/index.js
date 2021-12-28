import { Character, Description, ImageContainer, ImagePeople, ProfileIcon, StyledLinkPeople, Title } from "../../styledTile";
import { img_base_url, personImageSize } from "../../moviesBrowserApi";

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
          <ImageContainer  width="176px" height="264px" mobileWidth="120px" mobileHeight="178px">
            {profile_path ?
              <ImagePeople src={img_base_url + personImageSize + profile_path} alt="" />
              : <ProfileIcon />
            }
          </ImageContainer>
          <Description>
            <Title align="center"> {name} </Title>
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