import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Tile = () => {
    const {id} = useParams();
    return (
        <>
<p>k</p>
{id}
        </>
    );
};

export default Tile;
