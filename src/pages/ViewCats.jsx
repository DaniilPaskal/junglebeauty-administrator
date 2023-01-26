import { useState, useEffect } from "react";
import { QueryCats } from "../components/DBFunctions";
import CatTable from "../components/CatTable";

const ViewCats = () => {
    const [parents, setParents] = useState([]);
    const [kittens, setKittens] = useState([]);

    const getCats = async () => {
        const parents = await QueryCats('parents');
        const kittens = await QueryCats('kittens');
        setParents(parents);
        setKittens(kittens);
    }
    
    useEffect(() => {
        getCats();
    }, []);

    return (
        <>
            <h2>Parents:</h2>
            <CatTable cats={parents} />

            <h2>Kittens:</h2>
            <CatTable cats={kittens} />
        </>
    );
}

export default ViewCats;  