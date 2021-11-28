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
import { PessoaProvider } from './context/PessoaContext';
import { AuthProvider } from './context/AuthContext';


const routers = () => {
   return(
      <BrowserRouter>
        <AuthProvider>
          <PessoaProvider>
            <Header />
            <Routes>
              <Route element={<Login />}  path="/login" />
              <Route element={<Pessoa />}  path="/pessoa" />
              <Route element={<Home />} path='/' />
            </Routes>
            <Footer />
          </PessoaProvider>
        </AuthProvider>
      </BrowserRouter>
   )
}

export default routers;