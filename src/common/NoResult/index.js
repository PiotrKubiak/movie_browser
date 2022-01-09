import { Wrapper, Header, Image } from "./styled";
import noResultImage from "./NoResult.png";

const NoResult = ({ searchParam }) => (
    <Wrapper>
        <Header>Sorry, there are no results for "{searchParam}"</Header>
        <Image src={noResultImage} alt="No search result" />
    </Wrapper>
);

export default NoResult;