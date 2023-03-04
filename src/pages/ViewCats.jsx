import { useState, useEffect, useContext } from "react";
import { QueryCats } from "../components/FirebaseFunctions";
import CatTable from "../components/CatTable";

const ViewCats = () => {
    const [parents, setParents] = useState([]);
    const [kittens, setKittens] = useState([]);

    const getCats = async () => {
        const kings = await QueryCats('parents', ['sex', '==', 'male']);
        const queens = await QueryCats('parents', ['sex', '==', 'female']);
        const kittens = await QueryCats('kittens');
        const parents = [...kings, ...queens];
        
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