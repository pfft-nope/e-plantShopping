import { Link } from "react-router-dom";
import "../App.css";

function LandingPage() {
  return (
    <div className="landing">
      <h1>Paradise Nursery</h1>

      <p>
        Paradise Nursery is your one‑stop destination for beautiful,
        healthy houseplants that bring life and joy into your home.
      </p>

      <Link to="/plants">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default LandingPage;