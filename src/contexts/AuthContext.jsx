import React, { useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    }, []);

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}