
import { createContext, useEffect, useState } from "react"


export const AuthContext = createContext();
const AuthContextProvider = ({ children }) =>{
    const [authState, setAuthState] = useState({
        isAuthenticated:false,
        token: null,
        email:null,
    });
    

    useEffect(() =>{
        const storedToken = localStorage.getItem("token");
        const storedEmail = localStorage.getItem("email");
        if(storedToken && storedEmail){
            setAuthState({
                isAuthenticated:true,
                token:storedToken,
                email:storedEmail,
            })
        }
    },[])

    const login = (token) =>{
        localStorage.setItem("token",token);
        localStorage.setItem("email", email);
        setAuthState({
            isAuthenticated:true,
            token,
            email,
        });
        
    }
    const logout = ()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        setAuthState({
            isAuthenticated:false,
            token:null,
            email:null,
        })
        
    }
    return (
        <AuthContext.Provider value={{...authState, login, logout, }}>
            {children}
        </AuthContext.Provider>

    )
}
export default AuthContextProvider;