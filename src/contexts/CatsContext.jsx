import React from "react";
import { useContext } from "react";

const CatsContext = React.createContext();

export function CatsProvider({ children, value }) {
    return (
        <CatsContext.Provider value={value}>
            {children}
        </CatsContext.Provider>
    );
}

export function useCats() {
    return useContext(CatsContext);
}