import { useContext } from "react";

const AuthContext = React.createContext();

export function AuthProvider({children, value}) {
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}