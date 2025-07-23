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
      <div className="App">
        <NavbarPart />
        {/* <MainPage/> */}
        {/* <ProductsPage/> */}
        {/* <RegisterPage/> */}
        <LoginOffcan>
          <LoginPage />
          <OffcanvasPart />
        </LoginOffcan>
      </div>

    </BrowserRouter>
  );
}

export default App;
