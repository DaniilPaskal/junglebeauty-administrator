import React, { useContext, useState, useEffect } from "react";
import { getList } from "../components/FirebaseFunctions";

const ListsContext = React.createContext();

export function ListsProvider({ children }) {
    const [lists, setLists] = useState({});
    const [loading, setLoading] = useState(true);

    const getLists = async () => {
        const news = await getList('News-List.json');
        const articles = await getList('Articles-List.json');
        const videos = await getList('Videos-List.json');
        
        setLists({news, articles, videos});
        setLoading(false);
    }
    
    useEffect(() => {
        getLists();
    }, []);

    return (
        <ListsContext.Provider value={lists}>
            { !loading && children }
        </ListsContext.Provider>
    );
}

export function useLists() {
    return useContext(ListsContext);
}