// CartItem.js

import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  remove,
} from "../state/cartSlice";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <div
        className="flex items-center bg-white p-4 rounded-lg shadow-md"
        key={id}
      >
        <img src={image} alt={alt} className="w-16 h-16 rounded mr-4" />
        <div className="flex-grow">
          <div className="font-semibold">{title}</div>
          <div className="text-gray-500">{description}</div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="px-2 py-1 bg-gray-200 rounded"
            onClick={() => handleDecrement(id)}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="px-2 py-1 bg-gray-200 rounded"
            onClick={() => handleIncrement(id)}
          >
            +
          </button>

          <span className="font-semibold">$ {price}</span>
          {/* <i className="fas fa-trash-alt text-gray-500"></i> */}
          <span
            className=" text-gray-500 cursor-pointer"
            onClick={() => removeItem(id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </span>
        </div>
      </div>
    </>
  );
};

export default CartItem;
