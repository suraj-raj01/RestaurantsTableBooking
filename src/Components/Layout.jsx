import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link } from "react-router-dom";
import "primeicons/primeicons.css";

const Layout = () => {
  const mode = () =>{
    document.body.classList.toggle("demo");
  }
  return (
    <>
      <Container>
        <Navbar expand="lg" id="navbar">
          <Container fluid>
            <Navbar.Brand
              as={Link}
              to="home"
              style={{ fontWeight: "bold", fontSize: "30px", color: "green" }}
            >
              Restuarant
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{
                  maxHeight: "230px",
                  padding: "10px",
                  backgroundColor: "white",
                }}
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
                <Nav.Link as={Link} to="pricing">
                  Pricing
                </Nav.Link>
                <Nav.Link as={Link} to="about">
                  About
                </Nav.Link>
              </Nav>
                <Nav.Link as={Link} to="https://www.linkedin.com/in/suraj-kumar-1965b0296/">
              <span className="pi pi-linkedin" style={{fontSize:'1.2rem'}} onClick={mode}></span>
                </Nav.Link>
              &nbsp;&nbsp;&nbsp;
              <span className="pi pi-sun" style={{fontSize:'1.2rem'}}></span>
              &nbsp;&nbsp;&nbsp;
                <Nav.Link as={Link} to="https://github.com/">
                <span className="pi pi-github" style={{fontSize:'1.2rem'}}></span>
                </Nav.Link>
              
              &nbsp;&nbsp;&nbsp;
              <Form
                className="d-flex"
                style={{ backgroundColor: "white", padding: "10px" }}
              >
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
