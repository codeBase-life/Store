import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../state/cartSlice";
import QrCode from "./qrCode";

function CartBootstrap() {
  const [show, setShow] = useState(false);
  const cart = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();

  const calculateTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };
  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View in Cart
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart Summary</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ padding: "0px" }}>
          <ul style={{ padding: "0px" }}>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  height: "100px",
                }}
              >
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                    height: "100px",
                  }}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    style={{
                      width: "70px",
                      height: "70px",
                      marginRight: "30px",
                    }}
                  />
                  {/* <span style={{ marginRight: "10px" }}>{item.title}</span> */}
                  {/* <div
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      marginRight: "5px",
                      width: "50px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span style={{ fontWeight: "bold" }}>{item.title}</span>
                   
                  </div> */}
                  <Button
                    variant="secondary"
                    onClick={() => handleDecrement(item.id)}
                  >
                    -
                  </Button>
                  <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                  <Button
                    variant="secondary"
                    onClick={() => handleIncrement(item.id)}
                  >
                    +
                  </Button>
                  <span style={{ marginLeft: "15px" }}>price:{item.price}</span>
                </li>
                <div>
                  <QrCode title={item.title} price={item.price} />
                </div>
              </div>
            ))}
          </ul>
          <h3>Total Price: ${calculateTotalPrice()}</h3>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CartBootstrap;
