import Tile from "./Tile";

export const Content = ({ moviesStatus, movies }) => {
    switch (moviesStatus) {
        case "initial":
            return null;
        case "loading":
            // return (<Loading />);
            return (<p> ładowanie</p>);
        case "error":
            // return (<Error />);
            return (<p> błąd</p>);
        case "success":
            return (<Tile movies={movies} />);
        default:
            throw new Error(`incorrect status: ${moviesStatus}`);
    }
};