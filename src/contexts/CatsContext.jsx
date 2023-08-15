import React, { useContext, useState, useEffect } from "react";
import { queryCats } from "../components/FirebaseFunctions";

const CatsContext = React.createContext();

export function CatsProvider({ children }) {
    const [cats, setCats] = useState([]);
    const [loading, setLoading] = useState(true);

    const getCats = async () => {
        const parents = await queryCats('parents');
        const kittens = await queryCats('kittens');
        
        setCats({parents, kittens});
        setLoading(false);
    }
    
    useEffect(() => {
        getCats();
    }, []);

    return (
        <CatsContext.Provider value={cats}>
            { !loading && children }
        </CatsContext.Provider>
    );
}

export function useCats() {
    return useContext(CatsContext);
}