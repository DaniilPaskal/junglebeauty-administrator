import React, { useContext, useState, useEffect } from "react";

const SettingsContext = React.createContext();

export function SettingsProvider({ children }) {
    const [settings, setSettings] = useState([]);

    return (
        <SettingsContext.Provider value={settings}>
            { children }
        </SettingsContext.Provider>
    );
}

export function useSettings() {
    return useContext(SettingsContext);
}