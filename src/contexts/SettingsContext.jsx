import React, { useContext, useState, useEffect } from "react";
import { useCats } from "./CatsContext";

const SettingsContext = React.createContext();

export function SettingsProvider({ children }) {
    const [filters, setFilters] = useState({colour: [], father: [], mother: [], status: [], sex: []});

    useEffect(() => {
        const parents = useCats().parents;
        const colours = ['silver', 'brown'];
        const statuses = ['available', 'reserved', 'graduated'];
        const sexes = ['male', 'female'];

        setFilters({
            colour: colours,
            father: parents.filter((cat) => cat.sex === 'male').map((cat) => {return cat.name}),
            mother: parents.filter((cat) => cat.sex === 'female').map((cat) => {return cat.name}),
            status: statuses,
            sex: sexes
        });
    }, []);

    return (
        <SettingsContext.Provider value={filters}>
            { children }
        </SettingsContext.Provider>
    );
}

export function useSettings() {
    return useContext(SettingsContext);
}