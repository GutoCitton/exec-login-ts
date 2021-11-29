import React, {createContext, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { LoginDTO } from "../model/LoginDTO";

const AuthContext = createContext({});



const AuthProvider: React.FC<any> = ({ children }) => {

  const [auth, setAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.defaults.headers.common['Authorization'] = token;
      setAuth(true);
    }
    setLoading(false);
  }, [])
  

  const handleLogin = async(user: LoginDTO) => {
    const {data} = await api.post('/auth', user);
    localStorage.setItem('token', data);
    api.defaults.headers.common['Authorization'] = data;
    navigate('/pessoa')
    setAuth(true);
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    delete api.defaults.headers.common['Authorization'];
    navigate('/login')
    setAuth(false);
  }

  if (loading) {
    return (<h1>Loading</h1>)
  }

  return (
    <AuthContext.Provider value={{ auth, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider}