import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Snake Plant", price: 15, category: "Indoor" },
  { id: 2, name: "Fiddle Leaf Fig", price: 25, category: "Indoor" },
  { id: 3, name: "Aloe Vera", price: 10, category: "Succulents" },
  { id: 4, name: "Cactus", price: 8, category: "Succulents" },
  { id: 5, name: "Peace Lily", price: 18, category: "Air Purifying" },
  { id: 6, name: "Spider Plant", price: 12, category: "Air Purifying" }
];

const categories = ["Indoor", "Succulents", "Air Purifying"];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h1>Our Plants</h1>

        {categories.map((category) => (
          <div key={category} style={{ marginBottom: "30px" }}>
            <h2>{category}</h2>

            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const isAdded = cartItems.find(
                  (item) => item.id === plant.id
                );

                return (
                  <div
                    key={plant.id}
                    style={{
                      border: "1px solid #ccc",
                      padding: "10px",
                      marginBottom: "10px",
                      maxWidth: "300px"
                    }}
                  >
                    <h3>{plant.name}</h3>
                    <p>Price: ${plant.price}</p>

                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={isAdded}
                      style={{
                        padding: "8px 12px",
                        backgroundColor: isAdded ? "#aaa" : "green",
                        color: "white",
                        border: "none",
                        cursor: isAdded ? "not-allowed" : "pointer"
                      }}
                    >
                      {isAdded ? "Added" : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;