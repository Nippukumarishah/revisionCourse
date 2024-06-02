
import { createContext,  useState } from "react"



export const AuthContext = createContext();
const AuthContextProvider = ({ children }) =>{
    const [authState, setAuthState] = useState({
        isAuthenticated:false,
        token: null,
        email:null,
    });
    
    

   

    const login = (token) =>{
        
        setAuthState({
            isAuthenticated:true,
            token: token,
            
        });
        
    }
    const logout = ()=>{
       
        setAuthState({
            isAuthenticated:false,
            token:null,
            email:null,
            
        })
        
        
    }
    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>

    )
}
export default AuthContextProvider;