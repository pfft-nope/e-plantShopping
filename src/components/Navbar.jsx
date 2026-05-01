import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#2f6f4e",
        color: "white",
      }}
    >
      <h2>Paradise Nursery</h2>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/plants" style={{ color: "white", textDecoration: "none" }}>
          Plants
        </Link>
        <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
          🛒 Cart ({totalQuantity})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;