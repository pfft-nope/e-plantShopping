import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // ✅ Dedicated function to calculate total cart amount
  const calculateTotalCartAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // ✅ Clear naming for quantity handlers
  const handleIncreaseQuantity = (id) => {
    dispatch(updateQuantity({ id, value: 1 }));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(updateQuantity({ id, value: -1 }));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      <p>Total Items: {cartItems.length}</p>
      <p>Total Cost: ${calculateTotalCartAmount()}</p>

      {cartItems.length === 0 && <p>Your cart is empty.</p>}

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px"
          }}
        >
          <h3>{item.name}</h3>
          <p>Unit Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => handleIncreaseQuantity(item.id)}>
            +
          </button>

          <button
            onClick={() => handleDecreaseQuantity(item.id)}
            style={{ marginLeft: "5px" }}
          >
            −
          </button>

          <button
            onClick={() => dispatch(removeItem(item.id))}
            style={{ marginLeft: "10px", color: "red" }}
          >
            Delete
          </button>
        </div>
      ))}

      <Link to="/plants">
        <button style={{ marginRight: "10px" }}>
          Continue Shopping
        </button>
      </Link>

      <button onClick={() => alert("Coming Soon!")}>
        Checkout
      </button>
    </div>
  );
}

export default CartItem; 
