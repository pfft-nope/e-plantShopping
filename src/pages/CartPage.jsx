import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem
} from "../redux/CartSlice";

function CartPage() {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  return (
    <>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h1>Shopping Cart</h1>

        <p>Total Plants: {totalQuantity}</p>
        <p>Total Cost: ${totalPrice}</p>

        {items.length === 0 && <p>Your cart is empty.</p>}

        {items.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              maxWidth: "400px"
            }}
          >
            <h3>{item.name}</h3>
            <p>Unit Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${item.price * item.quantity}</p>

            <button onClick={() => dispatch(increaseQuantity(item.id))}>
              +
            </button>

            <button
              onClick={() => dispatch(decreaseQuantity(item.id))}
              style={{ marginLeft: "5px" }}
            >
              –
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
          <button style={{ marginRight: "10px" }}>Continue Shopping</button>
        </Link>

        <button onClick={() => alert("Coming Soon!")}>Checkout</button>
      </div>
    </>
  );
}

export default CartPage;