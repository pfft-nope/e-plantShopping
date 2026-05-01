import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import Navbar from "./Navbar";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    category: "Indoor",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Fiddle Leaf Fig",
    price: 25,
    category: "Indoor",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Aloe Vera",
    price: 10,
    category: "Succulents",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 4,
    name: "Cactus",
    price: 8,
    category: "Succulents",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 5,
    name: "Peace Lily",
    price: 18,
    category: "Air Purifying",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 6,
    name: "Spider Plant",
    price: 12,
    category: "Air Purifying",
    image: "https://via.placeholder.com/150"
  }
];

const categories = ["Indoor", "Succulents", "Air Purifying"];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h1>Our Plants</h1>

        {categories.map((category) => (
          <div key={category} style={{ marginBottom: "30px" }}>
            <h2>{category}</h2>

            <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
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
                        width: "200px",
                        textAlign: "center"
                      }}
                    >
                      <img
                        src={plant.image}
                        alt={plant.name}
                        style={{ width: "100%", height: "150px" }}
                      />

                      <h3>{plant.name}</h3>
                      <p>Price: ${plant.price}</p>

                      <button
                        onClick={() => handleAddToCart(plant)}
                        disabled={isAdded}
                        style={{
                          backgroundColor: isAdded ? "#aaa" : "green",
                          color: "white",
                          border: "none",
                          padding: "8px",
                          cursor: isAdded ? "not-allowed" : "pointer"
                        }}
                      >
                        {isAdded ? "Added" : "Add to Cart"}
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
