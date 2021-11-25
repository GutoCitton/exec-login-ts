import React, {createContext, useState, useEffect} from "react";
import api from "../api";
import { LoginDTO } from "../model/LoginDTO";

const AuthContext = createContext({});



const AuthProvider: React.FC<any> = ({ children }) => {
  useEffect(() => {
    console.log('teste');
  }, [])

  const handleLogin = async(user: LoginDTO) => {
    const {data} = await api.post('/auth', user);
    console.log(data);
  }

  const [auth, setAuth] = useState(false);
  return (
    <AuthContext.Provider value={{ auth, handleLogin }}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider}