import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
const Billgenerate = () => {
  const { id } = useParams();
  const [input, setInput] = useState({});

  const loadData = () => {
    let url = `http://localhost:3000/Restuarent/${id}`;
    axios.get(url).then((res) => {
      setInput(res.data);
    });
  };
  useEffect(() => {
    loadData();
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };
  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     let url = `http://localhost:3000/Restuarent/${id}`;
  //     axios.post(url, input).then((res) => {
  //         console.log(res.data)
  //         console.log(res.table);
  //         alert("Billgenerate Successfull!!")
  //         mynav("/display")
  //     })
  // }

  const capture = () => {
    print();
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "scroll",
          padding: "10px",
        }}
      >
        <Form id="bill">
          <center>
            <h3 style={{ fontWeight: "bold" }}>Print Your Bill</h3>
          </center>
          <hr />
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter name"
                name="name"
                value={input.name}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Customer Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="enter email"
                name="email"
                value={input.email}
                onChange={handleInput}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridAddress1">
              <Form.Label>Booking Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="enter date"
                name="date"
                value={input.date}
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridAddress1">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                placeholder="enter time"
                name="time"
                value={input.time}
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridAddress1">
              <Form.Label>Hours</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter hour"
                name="hour"
                required
                value={input.hour}
                onChange={handleInput}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Numbers of Table</Form.Label>
              <Form.Control
                name="table"
                value={input.table}
                placeholder="Enter number of table"
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Numbers of People</Form.Label>
              <Form.Control
                name="people"
                placeholder="Enter number of people"
                value={input.people}
                onChange={handleInput}
              />
            </Form.Group>
          </Row>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Table Charge (Per Table 100$)</Form.Label>
            <Form.Control
              name="people"
              placeholder="Enter number of people"
              value={
                input.table + " x " + "100" + " = " + input.table * 100 + "₹"
              }
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Person Charge (Per Person 150$)</Form.Label>
            <Form.Control
              name="people"
              placeholder="Enter number of people"
              value={
                input.people + " x " + "150" + " = " + input.people * 150 + "$"
              }
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Time Charge (Per Hour 50$)</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter hour"
              name="hour"
              required
              value={
                input.hour +
                " Hour x " +
                "50$ x " +
                input.table +
                " Table = " +
                input.hour * 50 * input.table +
                "$"
              }
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Total Bill</Form.Label>
            <Form.Control
              name="people"
              placeholder="Enter number of people"
              value={
                input.people * 150 +
                input.table * 100 +
                input.hour * 50 * input.table+"₹"
                
              }
              onChange={handleInput}
            />
          </Form.Group>
          <Button
            variant="success"
            style={{ marginTop: "10px" }}
            onClickCapture={capture}
          >
            Print Bill
          </Button>
        </Form>
      </div>
    </>
  );
};
export default Billgenerate;
