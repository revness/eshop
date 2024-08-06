// import { addCollectionData } from './services/ecom-service'
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApiContextProvider from "./context/ApiContextProvider";
import ProductPage from "./pages/ProductPage/ProductPage";
import FavouritesContextProvider, {
  FavouritesContext,
} from "./context/FavouritesContext";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  // addCollectionData()
  return (
    <>
      <ApiContextProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <CartContextProvider>
            <FavouritesContextProvider>
              <Routes>
                <Route path="/" element={<LandingPage />}></Route>
                <Route
                  path="/products/:product/:id"
                  element={<ProductPage />}
                />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </FavouritesContextProvider>
          </CartContextProvider>
        </BrowserRouter>
      </ApiContextProvider>
    </>
  );
}

export default App;
