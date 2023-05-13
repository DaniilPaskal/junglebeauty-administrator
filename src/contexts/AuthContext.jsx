import React, { useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        })
    }, []);

    return (
        <AuthContext.Provider value={user}>
            { !loading && children }
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}