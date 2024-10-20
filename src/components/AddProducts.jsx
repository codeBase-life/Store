import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { storage, firestore as db } from "../firebase/Auth";

function AddProducts() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [productImage, setProductImage] = useState(null);

  const handleImageFile = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!productImage) {
      console.log("please select an image");
      return;
    }
    const storageRef = ref(storage, `images/${productImage.name}`);
    await uploadBytes(storageRef, productImage);
    const imageUrl = await getDownloadURL(storageRef);
    await addDoc(collection(db, "products"), {
      title,
      price,
      description,
      imageUrl,
    });
    setTitle("");
    setPrice("");
    setProductImage(null);
    description("");
    alert("product added");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",

          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "700px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "5px",
            display: "flex",
            padding: "50px",
          }}
        >
          <div style={{ width: "500px" }}>
            <label htmlFor="productname">ProductName:</label>
            <Form.Control
              type="text"
              placeholder="product Name..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <label htmlFor="productprice">Product Price:</label>
            <Form.Control
              type="number"
              placeholder="Product Price..."
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label htmlFor="productdescription">Product Description</label>
            <Form.Control
              type="text"
              placeholder="product description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />{" "}
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload Product Image</Form.Label>
              <Form.Control type="file" onChange={handleImageFile} />
            </Form.Group>
            <Button variant="secondary" type="submit">
              {" "}
              Submit
            </Button>{" "}
          </div>
        </div>
      </form>
    </>
  );
}

export default AddProducts;
