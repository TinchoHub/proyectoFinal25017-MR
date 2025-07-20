import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navibar from "./components/Navibar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import About from "./pages/About";import ProtectedRoute from "./components/ProtectedRoute";
import 'bootstrap/dist/css/bootstrap.min.css'
import { StoreProvider } from "./context/StoreContext";

function App() {

  return (
    <BrowserRouter>
      <StoreProvider>
        <Navibar />
        <div className="flex-grow-1 d-flex flex-column min-vh-100 p-0" style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Productos" element={<Products />} />
            <Route path="/Contacto" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
            <Route path="/Perfil" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          </Routes>
        </div>
        <Footer />
      </StoreProvider>
    </BrowserRouter>
  )
}

export default App
