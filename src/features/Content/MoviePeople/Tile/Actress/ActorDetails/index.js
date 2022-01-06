import { Container, Information, Title, StyledInfo, BasicInfo, SgColor, Biography, StyledTiles, DesktopInscription, MobileInscription } from "../../styled";
import { ImagePeople, ImageMovie, ImageContainer, ProfileIcon } from "../../../../styledTile";
import { img_base_url, tileImageSize } from "../../../../moviesBrowserApi";


const ActorDetails = ({ api }) => {
    const results = api.data;

    return (
        <StyledTiles>
            <Container>
                {results.profile_path ?
                    <ImageMovie src={img_base_url + tileImageSize + api.data.profile_path} alt='' />
                    :
                    <ImageContainer width="290px" height="434px" mobileWidth="114px" mobileHeight="170px">
                        <ProfileIcon />
                    </ImageContainer>

                }

                <Information>
                    <Title> {results.name} </Title>
                    <StyledInfo>
                        <BasicInfo>
                            <SgColor>
                                <DesktopInscription>Date of birth: </DesktopInscription>
                                <MobileInscription>Birth: </MobileInscription>
                            </SgColor>
                            {results.birthday.slice(8, 10)}.
                            {results.birthday.slice(5, 7)}.
                            {results.birthday.slice(0, 4)}
                        </BasicInfo>
                        <BasicInfo><SgColor>Place of birth: </SgColor>{results.place_of_birth}</BasicInfo>
                    </StyledInfo>
                    <Biography>{results.biography}</Biography>
                </Information>
            </Container>
        </StyledTiles>
    );
};

export default ActorDetails;