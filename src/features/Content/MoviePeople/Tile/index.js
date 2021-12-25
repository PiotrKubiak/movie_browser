import { Character, Description, ImageContainer, ImagePeople, ProfileIcon, StyledLinkPeople, Title } from "../../styledTile";
import { img_base_url } from "../../moviesBrowserApi";

const Tile = ({ movieBrowser, credits }) => {

  let castDisplay = movieBrowser.data.cast.slice(0,12);
  let crewDisplay = movieBrowser.data.crew.slice(0,12);


  if (movieBrowser && !credits)  {
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
  }
  if (credits === "cast") {
    return (
      <>
        {/* {console.log(movieBrowser.data)} */}
        {castDisplay.map(({ id, name, profile_path, character }) => (
          <>
            <StyledLinkPeople key={id} to={`/people/${id}`}>
              <ImageContainer>
                {profile_path ?
                  <ImagePeople src={img_base_url + profile_path} alt="" />
                  : <ProfileIcon />
                }
              </ImageContainer>
              <Description>
                <Title>{name}</Title>
                <Character>{character}</Character>
              </Description>
            </StyledLinkPeople>
          </>
        ))}
      </>
    );
  }
  if (credits === "crew") {
    return (
      <>
        {crewDisplay.map(({ id, name, profile_path, department }) => (
          <>
            <StyledLinkPeople key={id} to={`/people/${id}`}>
              <ImageContainer>
                {profile_path ?
                  <ImagePeople src={img_base_url + profile_path} alt="" />
                  : <ProfileIcon />
                }
              </ImageContainer>
              <Description>
                <Title>{name}</Title>
                <Character>{department}</Character>
              </Description>
            </StyledLinkPeople>
          </>
        ))}
      </>
    );
  }
};

export default Tile;
