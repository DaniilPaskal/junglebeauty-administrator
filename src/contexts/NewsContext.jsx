import React, { useContext, useState, useEffect } from "react";
import { GetList } from "../components/FirebaseFunctions";

const NewsContext = React.createContext();

export function NewsProvider({ children }) {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    const getNews = async () => {
        const news = await GetList('News-List.json');
        
        setNews(news.NewsList);
        setLoading(false);
    }
    
    useEffect(() => {
        getNews();
    }, []);

    return (
        <NewsContext.Provider value={news}>
            { !loading && children }
        </NewsContext.Provider>
    );
}

export function useNews() {
    return useContext(NewsContext);
}