import { HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductList from "./components/ProductList";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;