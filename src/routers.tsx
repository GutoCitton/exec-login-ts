import { 
  BrowserRouter,
  Routes,
  Route,
  Link
 } from 'react-router-dom';


import Login from "./pages/Login";
import Pessoa from "./pages/Pessoa";
import Header from "./components/Header";
import Footer from "./components/Footer";


const routers = () => {
   return(
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Login />}  path="/login" />
          <Route element={<Pessoa />}  path="/pessoa" />
        </Routes>
        <Footer />
      </BrowserRouter>
   )
}

export default routers;