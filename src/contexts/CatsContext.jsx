import { React, useState, useEffect } from "react";
import { useContext } from "react";
import { QueryCats } from "../components/FirebaseFunctions";

const CatsContext = React.createContext();

export function CatsProvider({ children, value }) {
    const [parents, setParents] = useState(null);
    const [kittens, setKittens] = useState(null);

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
        <CatsContext.Provider value={value}>
            {children}
        </CatsContext.Provider>
    );
}

export function useCats() {
    return useContext(CatsContext);
}