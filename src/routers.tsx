/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import { 
  BrowserRouter,
  Routes,
  Route,
 } from 'react-router-dom';
 
import Login from "./pages/Login";
import Pessoa from "./pages/Pessoa";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home'
import Endereco from './pages/Endereco'
import { PessoaProvider } from './context/PessoaContext';
import { AuthProvider } from './context/AuthContext';
import NotFound from './components/NotFound';


const routers = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLogin(true);
    }
  }, [])
   return(
      <BrowserRouter>
        <AuthProvider>
          <PessoaProvider>
            <Header />
            {isLogin ? (
              <Routes>
                <Route element={<Login />}  path="/login" />
                <Route element={<Pessoa />}  path="/pessoa" />
                <Route element={<Home />}  path="/" />
                <Route element={<Endereco />}  path="/endereco" />
                <Route element={<NotFound />} path='*' />
              </Routes>
            ) : (
              <Routes>
                <Route element={<Login />}  path="/login" />
                <Route element={<Home />}  path="/" />
                <Route element={<NotFound />} path='*' />
              </Routes>
            )}
            <Footer />
          </PessoaProvider>
        </AuthProvider>
      </BrowserRouter>
   )
}

export default routers;