import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
// import CustomButton from "./Button";
import { remove } from "../state/cartSlice";
import SidbarController from "./SidbarController";
import CartBootstrap from "./CartBootstrap";

function Cart() {
  const items = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(remove(id));
    console.log("id inside remove method", id);
  };

  const eachItem = items.map((item) => (
    <div className="col-md-3" style={{ marginTop: "20px" }} key={item.id}>
      <Card style={{ width: "18rem" }}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={item.imageUrl}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <Card.Body>
          <Card.Title
            style={{
              height: "50px",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {item.title}
          </Card.Title>
          <Card.Text style={{ height: "50px", overflow: "hidden" }}>
            {item.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="justify-content-end">
          <Button variant="danger" onClick={() => removeItem(item.id)}>
            Remove Item
          </Button>
          {/* <SidbarController /> */}
          <CartBootstrap />
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Cart</h1>
      <div className="row">{eachItem}</div>
    </>
  );
}

export default Cart;
