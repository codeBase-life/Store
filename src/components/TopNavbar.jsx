import { useSelector } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function TopNavbar() {
  const counts = useSelector((state) => state.cartSlice);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Store</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/">
              Products
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="addproducts">
              Addproducts
            </Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Nav.Link as={Link} to="/cart">
                Cart {counts.length}
              </Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default TopNavbar;
