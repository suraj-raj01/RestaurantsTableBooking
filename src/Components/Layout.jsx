import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Container>
        <Navbar expand="lg" id="navbar">
          <Container fluid>
            <Navbar.Brand
              as={Link}
              to="home"
              style={{ fontWeight: "bold", fontSize: "30px" }}
            >
              Restuarant
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "230px", padding:'10px', backgroundColor: "white" }}
                navbarScroll
              >
                <Nav.Link as={Link} to="home">
                  Home
                </Nav.Link>
                <NavDropdown title="Solution" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">
                    Individual Restuarant
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Pub Bars</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Resources" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">
                    Individual Restuarant
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Pub Bars</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="#">
                  Pricing
                </Nav.Link>
                <Nav.Link as={Link} to="#">
                  About
                </Nav.Link>
              </Nav>
              <Form className="d-flex" style={{backgroundColor:'white',padding:'10px'}}>
                <Nav.Link as={Link} to="display">
                  <Button variant="outline-success">Bookings</Button>
                </Nav.Link>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
      <Container>
        <div id="hero">
          <Outlet />
        </div>
      </Container>
    </>
  );
};
export default Layout;
