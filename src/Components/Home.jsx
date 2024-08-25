import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Footer from "./Footer";

import { InputText } from 'primereact/inputtext';
import React, { useState } from "react";
import { Dialog } from 'primereact/dialog';

const Home = () => {
  const mynav = useNavigate();
  const booking = (id,id1) => {
    mynav(`/booking/${id}/${id1}`);
  };
  const [visible, setVisible] = useState(false);
  return (
    <>
     <div className="card flex justify-content-center">
            <Dialog header="Login" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
            <div className="card flex flex-wrap align-items-center justify-content-center gap-2">
              <br /><br />
            <InputText type="text" placeholder="username" tooltip="Enter your username" tooltipOptions={{ autoHide: false }} />
            <InputText type="text" placeholder="password" tooltip="Enter your username" />
            <Button tooltip="Confirm to proceed" tooltipOptions={{ showDelay: 1000, hideDelay: 300 }} label="Save" >Submit</Button>
            <br />
        </div>
            </Dialog>
        </div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
            alt="First slide"
            height="400px"
            width="100%"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"
            alt="First slide"
            height="400px"
            width="100%"
          />
          <Carousel.Caption>
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
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div id="home">
        <div id="text">
          <h1 id="heading">Table booking system for smart restaurants</h1>
          <br />
          <p>
            Boost sales, enhance customer service, and minimize no-shows. Let
            your business grow on autopilot! <br />
            By investing in a reliable restaurant table booking system, you can
            elevate your dining experience and drive business success.
          </p>
          <br />
          <p>
            ⁕ Digital reservation book for the team <br />
            ⁕ Online reservations for your clients <br />⁕ Data and reports for
            the manager
          </p>

          <br />
          <div>
            <a href="#table">
              <Button variant="success">Get Started →</Button>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">
              <Button variant="success" label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)}>Login →</Button>
            </a>
          </div>
        </div>
        <div id="img"></div>
      </div>
      <hr />
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
              <Button variant="success" onClick={() => booking("SouthIndian",20)}>
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
              <Button variant="success" onClick={() => booking("NorthIndian",15)}>
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
              <Button variant="success" onClick={() => booking("Chinese",10)}>
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
              <Button variant="success" onClick={() => booking("Bengali",20)}>
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
              <Button variant="success" onClick={() => booking("American",25)}>
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
              <Button variant="success" onClick={() => booking("Japani",15)}>
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
