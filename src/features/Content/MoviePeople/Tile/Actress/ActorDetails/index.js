import { Container, Information, Title, StyledInfo, BasicInfo, SgColor, Biography, StyledTiles, DesktopInscription, MobileInscription } from "../../styled";
import { ImagePeople } from "../../../../styledTile";
import { img_base_url, tileImageSize } from "../../../../moviesBrowserApi";


const ActorDetails = ({ api }) => {

    return (
        <StyledTiles>
                <Container>
                  <ImagePeople src={img_base_url + tileImageSize + api.data.profile_path  } alt='' />
                  <Information>
                    <Title> {api.data.name} </Title>
                    <StyledInfo>
                      <BasicInfo>
                        <SgColor>
                          <DesktopInscription>Date of birth: </DesktopInscription>
                          <MobileInscription>Birth: </MobileInscription>
                        </SgColor>
                        {api.data.birthday.slice(8, 10)}.
                        {api.data.birthday.slice(5, 7)}.
                        {api.data.birthday.slice(0, 4)}
                      </BasicInfo>
                      <BasicInfo><SgColor>Place of birth: </SgColor>{api.data.place_of_birth}</BasicInfo>
                    </StyledInfo>
                    <Biography>{api.data.biography}</Biography>
                  </Information>
                </Container>
              </StyledTiles>
    );

};

export default ActorDetails;