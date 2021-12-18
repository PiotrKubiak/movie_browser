import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Tile = () => {
    const { id } = useParams();


    return (
        <>
            {id}
        </>
    )
};
export default Tile;