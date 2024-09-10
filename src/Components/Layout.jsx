import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link } from "react-router-dom";
import "primeicons/primeicons.css";

import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";


const Layout = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" id="navbar">
        <Container>
          <Navbar.Brand
            as={Link}
            to="home"
            style={{ fontWeight: "bold", fontSize: "30px", color: "green" }}
          >
            Restuarant
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" style={{boxShadow:'0px 0px 2px'}} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{
                maxHeight: "230px",
                padding: "0px",
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
            <div
              style={{
                display: "flex",
                gap: "10px",
                backgroundColor: "white",
                padding: "10px",
              }}
            >
              <span
                className="pi pi-sun"
                style={{ fontSize: "1.2rem" }}
                onClick={() => mode}
              ></span>
              <Nav.Link
                as={Link}
                to="https://www.linkedin.com/in/suraj-kumar-1965b0296/"
                target="_blank"
              >
                <span
                  className="pi pi-linkedin"
                  style={{ fontSize: "1.2rem" }}
                ></span>
              </Nav.Link>

              <Nav.Link as={Link} to="https://github.com/" target="_blank">
                <span
                  className="pi pi-github"
                  style={{ fontSize: "1.2rem" }}
                ></span>
              </Nav.Link>
            </div>
            <Form
              className="d-flex"
              style={{ backgroundColor: "white", padding: "5px 10px" }}
            >
              <Nav.Link as={Link} to="display">
                <Button variant="outline-success">Bookings</Button>
              </Nav.Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <div id="hero">
        <Outlet />
      </div>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="facebook-f" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="twitter" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="google" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="instagram" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="linkedin" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="github" />
            </a>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon color="secondary" icon="gem" className="me-3" />
                  Restuarant
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon color="secondary" icon="home" className="me-2" />
                  Bharti-Niketan, Bhopal (MP)
                </p>
                <p>
                  <MDBIcon color="secondary" icon="envelope" className="me-3" />
                  info@example.com
                </p>
                <p>
                  <MDBIcon color="secondary" icon="phone" className="me-3" /> +
                  01 234 567 88
                </p>
                <p>
                  <MDBIcon color="secondary" icon="print" className="me-3" /> +
                  01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2024 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            Restuaranttablebooking.com
          </a>
        </div>
      </MDBFooter>
    </>
  );
};
export default Layout;
