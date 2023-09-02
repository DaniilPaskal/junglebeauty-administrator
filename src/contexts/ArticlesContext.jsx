import React, { useContext, useState, useEffect } from "react";
import { getList } from "../components/FirebaseFunctions";

const ArticlesContext = React.createContext();

export function ArticlesProvider({ children }) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const getArticles = async () => {
        const articles = await getList('Articles-List.json');
        
        setArticles(articles);
        setLoading(false);
    }
    
    useEffect(() => {
        getArticles();
    }, []);

    return (
        <ArticlesContext.Provider value={articles}>
            { !loading && children }
        </ArticlesContext.Provider>
    );
}

export function useArticles() {
    return useContext(ArticlesContext);
}