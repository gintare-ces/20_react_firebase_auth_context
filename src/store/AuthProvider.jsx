import { createContext, useState } from "react";


const AuthContext = createContext({
    user: {},
    isLoading: false,
    login() {},
    logout() {},
    register() {},
});



function AuthProvider({ children }) {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const authCtx = {
        user,
        isLoading,
    }
  return (
    <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider