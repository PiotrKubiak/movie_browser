import Tile from "./MoviesList/Tile";

export const Content = ({ moviesStatus, movies }) => {
    switch (moviesStatus) {
        case "initial":
            return null;
        case "loading":
            return (<Loading />);
        case "error":
            return (<Error />);
        case "success":
            return (<Tile movies={movies}/>);
        default:
            throw new Error(`incorrect status: ${moviesStatus}`);
    }
};