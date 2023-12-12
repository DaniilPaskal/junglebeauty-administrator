import React, { useContext, useState, useEffect } from "react";
import { queryCats } from "../components/FirebaseFunctions";

const SettingsContext = React.createContext();

export function SettingsProvider({ children }) {
    const [filters, setFilters] = useState({colour: [], father: [], mother: [], status: [], sex: []});
    const [parents, setParents] = useState([]);

    const getCats = async () => {
        const parents = await queryCats('parents');
        setParents(parents);
    }

    useEffect(() => {
        const colours = ['silver', 'brown'];
        const statuses = ['available', 'reserved', 'graduated'];
        const sexes = ['male', 'female'];

        getCats();

        setFilters({
            colour: colours,
            father: parents.filter((cat) => cat.sex === 'male').map((cat) => {return cat.name}),
            mother: parents.filter((cat) => cat.sex === 'female').map((cat) => {return cat.name}),
            status: statuses,
            sex: sexes
        }, [filters]);
    });

    return (
        <SettingsContext.Provider value={filters}>
            { children }
        </SettingsContext.Provider>
    );
}

export function useSettings() {
    return useContext(SettingsContext);
}