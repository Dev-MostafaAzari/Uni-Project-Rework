import LoginPage from "./components/Login";
import MainPage from "./components/Main";
import NavbarPart from "./components/Navbar";
import ProductsPage from "./components/Products";
import RegisterPage from "./components/Register";


function App() {
  return (
    <div className="App">
     <NavbarPart/>
     {/* <MainPage/> */}
     {/* <ProductsPage/> */}
     {/* <RegisterPage/> */}
     <LoginPage/>
    </div>
  );
}

export default App;
