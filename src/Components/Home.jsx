import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Footer from "./Footer";
const Home = () => {
  const mynav = useNavigate();
  const booking = (id) => {
    mynav(`/booking/${id}`);
  };
  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
            alt="First slide"
            height="400px"
            width="100%"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://www.fabhotels.com/blog/wp-content/uploads/2018/08/Feature-Image-Resize_290918_600x400.jpg:cf-webp:w-450:h-240"
            alt="First slide"
            height="400px"
            width="100%"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://img.freepik.com/free-photo/female-student-working-parttime-as-waitress-serving-food-guest-pub_637285-2436.jpg"
            alt="First slide"
            height="400px"
            width="100%"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div id="home">
        <div id="text">
          <h1 id="heading">
            Table booking system for smart restaurants
          </h1>
          <hr />
          <p>
            Boost sales, enhance customer service, and minimize no-shows. Let
            your business grow on autopilot!
          </p>

          <p>→ Digital reservation book for the team </p>
          <p>→ Online reservations for your clients</p>
          <p>→ Data and reports for the manager</p>

          <div>
            <a href="#table">
              <Button variant="success">Get Started →</Button>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">
              <Button variant="success">Login →</Button>
            </a>
          </div>
        </div>
        <div id="img"></div>
      </div>
      <div id="footer">
        <h4>Trusted by restaurants, bars and clubs in over 50+ cities</h4>
        <div id="images">
          <img
            src="https://www.tablein.com/hs-fs/hubfs/image%20647.png?width=140&name=image%20647.png"
            alt=""
          />
          <img
            src="https://www.tablein.com/hs-fs/hubfs/kisspng-hilton-hotels-resorts-hilton-worldwide-logo-hilton-5b239c8040e8a6%201.png?width=150&name=kisspng-hilton-hotels-resorts-hilton-worldwide-logo-hilton-5b239c8040e8a6%201.png"
            alt=""
          />
          <img
            src="https://www.tablein.com/hs-fs/hubfs/co7793c386-corinthia-logo-corinthia-hotels-logo-download-logo-icon-png-svg%201.png?width=220&name=co7793c386-corinthia-logo-corinthia-hotels-logo-download-logo-icon-png-svg%201.png"
            alt=""
          />
          <img
            src="https://www.tablein.com/hs-fs/hubfs/image%20642.png?width=220&name=image%20642.png"
            alt=""
          />
          <img
            src="https://www.tablein.com/hs-fs/hubfs/image%20646.png?width=220&name=image%20646.png"
            alt=""
          />
        </div>
      </div>
      <div id="table">
        <CardGroup>
          <Card>
            <Card.Body>
              <img
                src="https://images.restaurantfurniture.net//dpr_1.0,f_auto,q_auto,w_1162/gallery-images/620356-13787-022824-07394963"
                width="100%"
                alt=""
              />
              <Card.Title>Food Type SouthIndian</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer id="card-footer">
              <Button variant="success" onClick={() => booking("SouthIndian")}>
                Book Now→
              </Button>
              <p></p>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Body>
              <img
                src="https://images.squarespace-cdn.com/content/v1/5e1b73fb6eeb973ee1becfc4/1592674910819-UZA3G70IPJ6WUL8VG617/custom-restaurant-tables-david-stine+1.jpg"
                width="100%"
                alt=""
              />
              <Card.Title>Food Type NorthIndian</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.
              </Card.Text>
            </Card.Body>
            <Card.Footer id="card-footer">
              <Button variant="success" onClick={() => booking("NorthIndian")}>
                Book Now→
              </Button>
              <p></p>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Body>
              <img
                src="https://www.chagrinvalleycustomfurniture.com/images/16299/image/modal/large-led-lit-live-edge-river-table_3x2.jpg"
                width="100%"
                alt=""
              />
              <Card.Title>Food Type Chinese</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer id="card-footer">
              <Button variant="success" onClick={() => booking("Chinese")}>
                Book Now→
              </Button>
              <p></p>
            </Card.Footer>
          </Card>
        </CardGroup>
        <br />
        <br />
        <br />
        <br />
        <CardGroup>
          <Card>
            <Card.Body>
              <img
                src="https://www.travelandleisure.com/thmb/a8tPoQdzt78i7pPv5fqVwuiL3XE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Linger-Time-Restaurant-Table-TOOLONG0316-559224b42fb749f9af69f77a34c7f6c6.jpg"
                width="100%"
                alt=""
              />
              <Card.Title>Food Type Bengali</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer id="card-footer">
              <Button variant="success" onClick={() => booking("Bengali")}>
                Book Now→
              </Button>
              <p></p>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <img
                src="https://haveaseat.com.au/wp-content/uploads/2022/05/image-006.jpg"
                width="100%"
                alt=""
              />
              <Card.Title>Food Type American</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer id="card-footer">
              <Button variant="success" onClick={() => booking("American")}>
                Book Now→
              </Button>
              <p></p>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <img
                src="https://www.thechairmarket.com/cdn/shop/articles/Screenshot_2024-01-11_134721.jpg?v=1704973750&width=640"
                width="100%"
                alt=""
              />
              <Card.Title>Food Type Japani</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer id="card-footer">
              <Button variant="success" onClick={() => booking("Japani")}>
                Book Now→
              </Button>
              <p></p>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
      <Footer />
    </>
  );
};
export default Home;
