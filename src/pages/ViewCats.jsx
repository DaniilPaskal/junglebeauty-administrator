import { useCats } from "../contexts/CatsContext";
import ParentTable from "../components/ParentTable";
import KittenTable from "../components/KittenTable";

const ViewCats = () => {
    const cats = useCats();

    return (
        <>
            <h2>Parents:</h2>
            <ParentTable parents={cats.parents} />

            <h2>Kittens:</h2>
            <KittenTable kittens={cats.kittens} parents={cats.parents} />
        </>
    );
}

export default ViewCats;  