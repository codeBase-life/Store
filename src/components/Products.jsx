import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore as db } from "../firebase/Auth.js";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { add } from "../state/cartSlice.jsx";
import { useDispatch } from "react-redux";

function Products() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "products"));
      const ProductList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(ProductList);
      setLoading(false);
    };
    fetchProducts();
    // setLoading("false");
  }, []);
  // console.log(products);

  const Cart = (product) => {
    dispatch(add(product));
  };

  const card = products.map((product) => (
    <div className="col-md-3" key={product.id} style={{ marginTop: "20px" }}>
      <Card style={{ width: "18rem" }}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.imageUrl}
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
            {product.title}
          </Card.Title>
          <Card.Text
            style={{
              height: "50px",
              overflow: "hidden",
            }}
          >
            {product.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button variant="primary" onClick={() => Cart(product)}>
            Add To Cart
          </Button>
          <span style={{ padding: "5px", backgroundColor: "ButtonFace" }}>
            {/* Rating:{product.rating.rate} */}
          </span>
        </Card.Footer>
        <span style={{ display: "flex", justifyContent: "space-between" }}>
          PKR:{product.price}{" "}
          <span style={{ padding: "5px", backgroundColor: "" }}>
            {" "}
            {/* Available:{product.rating.count} */}
          </span>
        </span>
      </Card>
    </div>
  ));

  if (loading) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" variant="dark" />
      </div>
    );
  }
  return (
    <>
      <div className="row">{card}</div>
    </>
  );
}

export default Products;
