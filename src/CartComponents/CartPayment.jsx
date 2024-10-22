import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { faCcMastercard, faCcPaypal } from "@fortawesome/free-brands-svg-icons";
import { faStripe } from "@fortawesome/free-brands-svg-icons/faStripe";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import "../index.css";

function CartPayment() {
  const items = useSelector((state) => state.cartSlice);
  const [totalPrice, setTotalPrice] = useState(null);
  const shippingFee = 20;

  // const dispatch = useDispatch();

  useEffect(() => {
    setTotalPrice(
      items.reduce((total, item) => total + item.price * item.quantity, 0)
    );
    // console.log(typeof totalPrice);
  });

  return (
    <div className="flex justify-center items-start p-10  min-h-screen sm:p-6 md:p-10 bg-gray-100">
      <div className=" w-full sm:w-3/4 md:w-2/3 bg-whitep-4 sm:p-6 md:p-8 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} />
            <span className="text-lg font-semibold ml-2">
              Continue shopping
            </span>
          </Link>
        </div>
        <div className="border-b pb-2 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Shopping cart</span>
            {/* <span className="text-gray-600">Sort by: price</span> */}
          </div>
          <span className="text-gray-500">
            {items.length
              ? `you have ${items.length} items in your cart `
              : "you have 0 products in your cart"}
            {/* You have 5 items in your cart */}
          </span>
        </div>
        {items.map((item) => (
          <div className="space-y-4" key={item.id}>
            <CartItem
              image={item.imageUrl}
              alt={item.title}
              title={item.title}
              description={item.description}
              price={item.price}
              id={item.id}
              quantity={item.quantity}
            />
          </div>
        ))}
      </div>
      <div className="w-1/3 ml-6 bg-blue-600 p-6 rounded-lg shadow-md text-white">
        <div className="flex items-center mb-4">
          <span className="text-lg font-semibold">Card details</span>
          <span className="ml-auto rounded-full">
            <FontAwesomeIcon icon={faCartShopping} />
          </span>
        </div>
        <div className="mb-4">
          <span className="text-sm">Card type</span>
          <div className="flex space-x-2 mt-2">
            {/* <img src= alt="Mastercard" /> */}
            <FontAwesomeIcon icon={faCcMastercard} />
            <FontAwesomeIcon icon={faStripe} />
            <FontAwesomeIcon icon={faCcVisa} />
            <FontAwesomeIcon icon={faCcPaypal} />
          </div>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Cardholder's Name"
            className="w-full p-2 rounded bg-blue-500 placeholder-white"
          />
          <input
            type="text"
            placeholder="Card Number"
            className="w-full p-2 rounded bg-blue-500 placeholder-white"
          />
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Expiration"
              className="w-1/2 p-2 rounded bg-blue-500 placeholder-white"
            />
            <input
              type="text"
              placeholder="Cvv"
              className="w-1/2 p-2 rounded bg-blue-500 placeholder-white"
            />
          </div>
        </div>
        <div className="mt-6 space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$ {totalPrice}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>$ {shippingFee}</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>TotalPrice</span>
            <span>$ {totalPrice ? totalPrice + shippingFee : 0}</span>
          </div>
        </div>
        <button className="w-full mt-4 bg-teal-500 p-2 rounded text-white ">
          {/* <span>$4818.00</span> */}
          <span>
            <Link to="/thanks">
              CHECKOUT <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </span>
        </button>
      </div>
    </div>
  );
}

export default CartPayment;
