import React, { useContext, useState, useEffect } from "react";
import { QueryCats } from "../components/FirebaseFunctions";

const CatsContext = React.createContext();

export function CatsProvider({ children }) {
    const [cats, setCats] = useState(null);

    const getCats = async () => {
        const parents = await QueryCats('parents');
        const kittens = await QueryCats('kittens');
        
        setCats({parents, kittens})
    }
    
    useEffect(() => {
        getCats();
    }, []);

    return (
        <CatsContext.Provider value={cats}>
            {children}
        </CatsContext.Provider>
    );
}

export function useCats() {
    return useContext(CatsContext);
}