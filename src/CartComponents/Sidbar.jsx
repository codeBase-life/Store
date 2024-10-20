import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../state/cartSlice";
import "../index.css";

function Sidbar({ isOpen, onClose }) {
  const cart = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();

  const calculateTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };
  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };
  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h1 className=" text-3xl">Cart Summary</h1>

        <ul style={{ listStyle: "none" }}>
          {cart.map((item) => (
            <li key={item.id} style={{ display: "flex" }}>
              <div
                style={{
                  width: "200px",
                  overflow: "hidden",
                  listStyle: "none",
                }}
              >
                <img
                  className=" w-5"
                  src={item.imageUrl}
                  alt=""
                  style={{ width: "50px" }}
                />
              </div>
              <div className="flex justify-between">
                ${item.price}
                <div>
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className="px-2 bg-gray-300 rounded-md mr-1"
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="px-2  bg-gray-400 rounded-md ml-1"
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className=" text-3xl">Total Price: ${calculateTotalPrice()}</p>
      </div>
    </>
  );
}

export default Sidbar;
