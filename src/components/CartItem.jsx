import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addItem,
  removeItem,
  updateQuantity
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      <p>Total Items: {totalQuantity}</p>
      <p>Total Cost: ${totalPrice}</p>

      {items.map((item) => (
        <div key={item.id} style={{ border: "1px solid #ccc", marginBottom: "10px", padding: "10px" }}>
          <h3>{item.name}</h3>
          <p>Unit Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))}>
            +
          </button>

          <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: -1 }))}>
            -
          </button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>

      <button onClick={() => alert("Coming Soon")}>Checkout</button>
    </div>
  );
}

export default CartItem;
