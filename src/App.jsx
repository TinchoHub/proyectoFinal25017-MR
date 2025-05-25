import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navibar from "./components/Navibar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import 'bootstrap/dist/css/bootstrap.min.css'
import { StoreProvider } from "./context/StoreContext";

function App() {

  return (
    <div className="d-flex flex-column min-vh-100">
      
        <BrowserRouter>
        <StoreProvider>
          <Navibar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Productos" element={<Products /> } />
            <Route path="/Contacto" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Perfil" element={<ProtectedRoute><Profile /></ProtectedRoute>} />           
          </Routes>
          <Footer />
          </StoreProvider>
        </BrowserRouter>
      
    </div>
  )
}

export default App
