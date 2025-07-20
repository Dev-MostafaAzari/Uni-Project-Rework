import MainPage from "./components/Main";
import NavbarPart from "./components/Navbar";
import ProductsPage from "./components/Products";


function App() {
  return (
    <div className="App">
     <NavbarPart/>
     {/* <MainPage/> */}
     <ProductsPage/>
    </div>
  );
}

export default App;
