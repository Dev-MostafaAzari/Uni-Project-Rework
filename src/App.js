import Contactme from "./components/ContactMe";
import LoginPage from "./components/Login";
import MainPage from "./components/Main";
import NavbarPart from "./components/Navbar";
import OffcanvasPart from "./components/Offcanvas";
import ProductsPage from "./components/Products";
import RegisterPage from "./components/Register";
import LoginOffcan from "./contexts/LoginAndOffcanContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <LoginOffcan>
        <div className="App">
          <OffcanvasPart />
          <NavbarPart />
          <Routes>
            <Route path="/Uni-Project-Rework" element={<MainPage/>}/>
            <Route path="/products" element={<ProductsPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/contact" element={<Contactme/>}/>
          </Routes>
        </div>
      </LoginOffcan>
    </BrowserRouter>
  );
}

export default App;
