import { useState, useEffect } from "react";
import { auth } from "../firebase/Auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../state/Seller";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sellerState = useSelector((state) => state.Seller.isLoggedIn);

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(sellerState);
    // const passtoNumber = parseInt(password);

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        dispatch(login());
        navigate("/");
      })
      .catch((err) => console.log("logging error", err));
  };

  return (
    <Form onSubmit={submitHandle}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LogIn;
