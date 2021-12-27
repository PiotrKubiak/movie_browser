import { ButtonLink, DangerIcon, Description, Title, Wrapper } from "./styled";

export const Error = () => {
    return (
        <Wrapper>
            <DangerIcon />
            <Title>Ooops! Something went&nbsp;wrong...</Title>
            <Description>Please check your network connection and&nbsp;try&nbsp;again</Description>
            <ButtonLink href={""} target="_blank">Back to home page</ButtonLink>
        </Wrapper>
    )
};