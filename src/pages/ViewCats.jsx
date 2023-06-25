import { useCats } from "../contexts/CatsContext";
import CatTable from "../components/CatTable";

const ViewCats = () => {
    const cats = useCats();

    return (
        <>
            <h2>Parents:</h2>
            <CatTable cats={cats.parents} />

            <h2>Kittens:</h2>
            <CatTable cats={cats.kittens} />
        </>
    );
}

export default ViewCats;  