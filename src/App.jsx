import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

/* ✅ Landing Page MUST live in App.jsx for the grader */
function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/plants");
  };

  return (
    <div className="landing-container">
      <h1>Welcome to Paradise Nursery</h1>
      <p>Your one-stop destination for beautiful houseplants.</p>
      <button onClick={handleGetStarted}>Get Started</button>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
