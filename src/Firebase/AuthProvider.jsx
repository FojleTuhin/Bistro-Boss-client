import { useState } from "react";
import { createContext } from "react";

 export const AuthContext = createContext(null)


const AuthProvider = ({childrn}) => {

    const [user, setUser]= useState(null);
    const [loading, setLoading]= useState(true);


    const authInfo={
        user

    }

    return (
        <AuthContext.Provider value={authInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;