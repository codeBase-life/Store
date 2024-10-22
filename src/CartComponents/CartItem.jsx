// CartItem.js

import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  remove,
} from "../state/cartSlice";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QrCode from "./qrCode";

const CartItem = ({ image, alt, title, description, price, id, quantity }) => {
  const cart = useSelector((item) => item.cartSlice);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };
  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };
  const removeItem = (id) => {
    dispatch(remove(id));
  };
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center bg-white p-4 rounded-lg shadow-md mb-4 w-full">
        <img
          src={image}
          alt={alt}
          className="w-full sm:w-1/4 rounded-lg mb-4 sm:mb-0"
        />
        <div className="flex flex-col sm:flex-row sm:justify-between w-full sm:ml-4">
          <div className="flex flex-col mb-4 sm:mb-0">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-gray-600">{description}</p>
            <span className="text-gray-800 font-bold">${price}</span>
          </div>
          <span>
            <QrCode />
          </span>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleDecrement(id)}
              className="bg-gray-200 p-2 rounded"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => handleIncrement(id)}
              className="bg-gray-200 p-2 rounded"
            >
              +
            </button>
            <button
              onClick={() => removeItem(id)}
              className="bg-red-500 p-2 rounded text-white"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
